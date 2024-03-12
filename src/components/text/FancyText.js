import "styles/components/text/fancytext.scss";

const FancyText = (props) => {
    return (
        <div className={"fancy-text " + props.className}>
            <div className="fancy-elements">
                <div className="element top-left">

                </div>
                <div className="element bottom-right">

                </div>

            </div>
            {props.children}
        </div>
    )
}

export default FancyText;
