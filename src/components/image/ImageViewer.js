import "styles/components/image/imageviewer.scss";

import { useImperativeHandle, forwardRef, useState } from "react";

const ImageViewer = forwardRef((props, ref) => {

    const [openClass, setOpenClass] = useState("closed");

    useImperativeHandle(ref, () => {
        return {
            "open": open,
            "close": close,
        }
    })

    const open = () => {
        document.body.classList.add("no-scrolling");
        setOpenClass("open");
    }

    const close = () => {
        document.body.classList.remove("no-scrolling");
        setOpenClass("closed");
    }

    let images = [props.images[0]];

    return (
        <div className={"image-viewer " + openClass}>
            <div className="darkened-bg" onClick={close}></div>
            <div className="images">
                {images.map((image, index) =>
                    <div className="image-container" key={"image" + index}>
                        <img draggable="false" src={image} alt="" className="image" />
                    </div>
                )}
            </div>
        </div>
    )
});

export default ImageViewer;