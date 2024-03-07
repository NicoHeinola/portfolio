import { useState } from "react";
import "styles/components/input/hollowbutton.scss";

const HollowButton = (props) => {
    let [hoverClass, setHoverClass] = useState("");
    let [timer, setTimer] = useState(undefined);
    let [additionTimer, setAdditionTimer] = useState(undefined);

    let animationDuration = 300;

    const startClassRemoveTimer = () => {
        let timer = setTimeout(() => {
            setHoverClass("");
        }, animationDuration)
        setTimer(timer);
    }

    const startClassAdditionTimer = () => {
        let additionTimer = setTimeout(() => {
            setHoverClass("hover");
        }, animationDuration)
        setAdditionTimer(additionTimer)
    }

    const clearClassRemoveTimer = () => {
        clearTimeout(timer);
    }

    const clearClassAdditionTimer = () => {
        clearTimeout(additionTimer);
    }

    const onMouseEnterCall = () => {
        if (hoverClass !== "no-hover") {
            clearClassRemoveTimer();
            setHoverClass("hover")
        } else {
            startClassAdditionTimer();
        }
    }

    const onMouseLeaveCall = () => {
        clearClassAdditionTimer();
        startClassRemoveTimer();
        setHoverClass("no-hover")
    }

    return (
        <button style={props.style} className={"hollow-button " + hoverClass + " " + props.className} onMouseEnter={onMouseEnterCall} onMouseLeave={onMouseLeaveCall}>
            {props.children}
        </button>
    )
}

export default HollowButton;