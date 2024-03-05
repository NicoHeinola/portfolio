import "styles/components/text/cursortext.scss"
import "styles/components/text/encryptedcursortext.scss"
import React, { useState, useEffect, useRef } from 'react';

const EncryptedCursorText = (props) => {
    const [characters, setCharacters] = useState([]);
    const [cursorClass, setCursorClass] = useState("not-writing");
    const cursorRef = useRef(null);

    const setCharactersAsWords = (characterList) => {
        let words = [];
        let currentString = "";
        for (let char of characterList) {
            if (char === " ") {
                words.push(currentString);
                words.push(" ");
                currentString = "";
                continue;
            }

            currentString += char;
        }

        words.push(currentString)

        setCharacters(words);
    }


    useEffect(() => {
        function generateRandomString(length) {
            // Characters tho choose random characters from
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ';

            let result = '';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return result;
        }

        // List of currently held characters
        let newCharacters = [];
        let encryptedCharacters = [];
        let correctCharacters = [];

        // Write the text
        setTimeout(() => {
            let cursorClassTimer;

            // Delay for cursor to start blinking again
            const refreshCursorClassTimer = () => {
                clearInterval(cursorClassTimer);

                cursorClassTimer = setInterval(() => {
                    setCursorClass("not-writing not-hidden");
                }, 320);
            }

            // How long the next character interval takes to start
            let duration = 0;

            // Make the cursor visible
            setCursorClass("not-writing not-hidden")

            // Add characters from sections and delay it by a specified amount
            for (let sectionIndex in props.name) {
                // Section data
                let section = props.name[sectionIndex];

                // List of all characters of the section
                let sectionTextList = section.text.split("");

                for (let index = 0; index < sectionTextList.length; index++) {
                    let char = sectionTextList[index];

                    correctCharacters.push(char);
                    encryptedCharacters.push(index);

                    // Add the character after a delay
                    setTimeout((index, char) => {
                        // Character element
                        newCharacters.push(char === " " ? char : generateRandomString(1))
                        setCharactersAsWords(newCharacters)
                        setCursorClass("not-hidden");
                        refreshCursorClassTimer();
                    }, duration * 1000, index, char);

                    duration += section.speed;
                }

                duration += section.waitSeconds;
            }

            // Hide cursor after some time
            setTimeout(() => {
                clearInterval(cursorClassTimer);
                setCursorClass("hidden");
            }, (duration + 1) * 1000)

            setTimeout(() => {
                // Start decrypting the string
                const decryptionInterval = setInterval(() => {
                    const decryptText = () => {
                        let charIndex = Math.floor(Math.random() * encryptedCharacters.length);
                        encryptedCharacters.splice(charIndex, 1);

                        if (encryptedCharacters.length === 0) {
                            clearInterval(decryptionInterval);
                        }
                    }

                    for (let i = 0; i < props.decryptionCount; i++) {
                        decryptText();
                    }

                }, props.decryptionDelaySeconds * 1000);

            }, (duration + 0.5) * 1000);

        }, props.delaySeconds * 1000);


        // Encrypt the characters constantly
        const encryptionInterval = setInterval(() => {
            for (let charIndex = 0; charIndex < newCharacters.length; charIndex++) {
                let char = newCharacters[charIndex];

                // If character is decrypted
                if (!encryptedCharacters.includes(charIndex)) {
                    newCharacters[charIndex] = correctCharacters[charIndex];
                } else {
                    newCharacters[charIndex] = (char === " ") ? char : generateRandomString(1);
                }
            }
            setCharactersAsWords(newCharacters);

            if (encryptedCharacters.length === 0 && correctCharacters.length > 0) {
                clearInterval(encryptionInterval);
            }
        }, props.encryptionDelaySeconds * 1000);
    }, [props.decryptionCount, props.decryptionDelaySeconds, props.delaySeconds, props.encryptionDelaySeconds, props.name]);

    return (
        <div className={"encrypted-cursor-text cursor-text " + props.fontSize + " " + props.className}>
            {characters.map((char, index) => <p className="char" key={'char-' + index}>{char}</p>)}
            <div ref={cursorRef} className={"cursor " + cursorClass}></div>
            {props.children}
        </div>
    )

}

export default EncryptedCursorText