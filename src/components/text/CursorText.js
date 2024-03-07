import "styles/components/text/cursortext.scss"
import React, { useState, useEffect, useRef } from 'react';

const CursorText = (props) => {
    const [characters, setCharacters] = useState([]);
    const [cursorClass, setCursorClass] = useState("not-writing");
    const cursorRef = useRef(null);

    const setCharactersAsWords = (characterList) => {
        let words = [];
        let currentString = "";
        for (let char of characterList) {
            if (char === " ") {
                words.push(currentString + " ");
                currentString = "";
                continue;
            }

            currentString += char;
        }

        words.push(currentString)

        setCharacters(words);
    }

    useEffect(() => {
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

            // List of all currently shown characters
            let updatedCharacters = [];

            // Make the cursor visible
            setCursorClass("not-writing not-hidden")

            // Add characters from sections and delay it by a specified amount
            for (let sectionIndex in props.name) {

                // Section data
                let section = props.name[sectionIndex];

                // List of all characters of the section
                let sectionTextList = section.text.split("");

                for (let index in sectionTextList) {
                    let char = sectionTextList[index];

                    // Add the character after a delay
                    setTimeout((char) => {
                        updatedCharacters.push(char);
                        setCharactersAsWords(updatedCharacters);
                        setCursorClass("not-hidden");
                        refreshCursorClassTimer();
                    }, duration * 1000, char);

                    duration += section.speed;
                }

                duration += section.waitSeconds;
            }

            // Hide cursor after some time
            setTimeout(() => {
                clearInterval(cursorClassTimer);
                setCursorClass("hidden");
            }, (duration + 1) * 1000)
        }, props.delaySeconds * 1000);
    }, [props.name, props.fontSize, props.delaySeconds]);

    return (
        <div className={"cursor-text " + props.fontSize + " " + props.className}>
            {characters.map((word, index) => <pre className="char" key={"char-" + index}>{word}</pre>)}
            <div ref={cursorRef} className={"cursor " + cursorClass}></div>
            {props.children}
        </div>
    )

}

export default CursorText