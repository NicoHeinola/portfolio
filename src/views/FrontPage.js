import CursorText from "components/text/CursorText";
import "styles/views/frontpage.scss"

function FrontPage() {
    return (
        <div>
            <CursorText fontSize="100" name={[{ text: "Hi,", waitSeconds: 1 }, { text: " I'm Nico!", waitSeconds: 0 }]}></CursorText>
        </div>
    );
}

export default FrontPage;