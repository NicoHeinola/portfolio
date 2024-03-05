import CursorText from "components/text/CursorText";
import EncryptedCursorText from "components/text/EncryptedCursorText";
import "styles/views/frontpage.scss"

function FrontPage() {
    let description = "I'm a passionate programmer with motivation to constantly learn something new. I specialize in web development, but I'm also proficient in making desktop applications or games using Unity and Godot 4.";
    return (
        <div className="front-page">
            <CursorText fontSize="big" name={[{ text: "", waitSeconds: 0.70, speed: 0 }, { text: "Hi,", waitSeconds: 1, speed: 0.05 }, { text: " I'm Nico!", waitSeconds: 0, speed: 0.05 }]}></CursorText>
            <EncryptedCursorText decryptionCount={8} decryptionDelaySeconds={0.05} encryptionDelaySeconds={0.05} delaySeconds={0} fontSize="small" name={[{ text: "", waitSeconds: 3.4, speed: 0 }, { text: description, waitSeconds: 0, speed: 0.008 }]}>
            </EncryptedCursorText>
        </div>
    );
}

export default FrontPage;