import "styles/components/text/cursortext.scss"
import React, { useState, useEffect, useRef } from 'react';

const CursorText = (props) => {
    const [characters, setCharacters] = useState([]);
    const cursorRef = useRef(null);

    useEffect(() => {
        let duration = 0;
        let updatedCharacters = []; // Array to accumulate characters

        for (let sectionIndex in props.name) {
            let section = props.name[sectionIndex];
            let sectionTextList = section.text.split("");

            for (let index in sectionTextList) {
                let char = sectionTextList[index];
                setTimeout((char, index, sectionIndex) => {
                    console.log(char, index, sectionIndex)
                    const newElement = <p style={{ fontSize: props.fontSize + "px" }} className="char" key={"char-" + index + sectionIndex}>{char}</p>;
                    updatedCharacters.push(newElement);
                    setCharacters([...updatedCharacters]);
                }, duration * 1000, char, index, sectionIndex);

                duration += 0.1;
            }

            duration += section.waitSeconds;
        }

        setTimeout(() => {
            cursorRef.current.className = "";
        }, (duration + 1) * 1000)
    }, [props.name, props.fontSize]);

    return (
        <div className="cursor-text">
            <div ref={cursorRef} className="cursor"></div>
            {characters.map(char => char)}
        </div>
    )

}

export default CursorText