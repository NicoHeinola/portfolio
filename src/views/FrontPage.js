import CursorText from "components/text/CursorText";
import EncryptedCursorText from "components/text/EncryptedCursorText";
import "styles/views/frontpage.scss"

function FrontPage() {
    let description = "I'm a passionate programmer with motivation to constantly learn something new. I specialize in web development but I'm also proficient at making desktop applications and games.";
    return (
        <div className="front-page">
            <div className="hi-section">
                <div className="about-me">
                    <CursorText className="title" fontSize="big" name={[{ text: "", waitSeconds: 0.70, speed: 0 }, { text: "Hi,", waitSeconds: 1, speed: 0.05 }, { text: " I'm Nico!", waitSeconds: 0, speed: 0.05 }]}></CursorText>
                    <EncryptedCursorText decryptionCount={8} decryptionDelaySeconds={0.03} encryptionDelaySeconds={0.05} delaySeconds={0} fontSize="small" name={[{ text: "", waitSeconds: 3, speed: 0 }, { text: description, waitSeconds: 0, speed: 0.006 }]}>
                    </EncryptedCursorText>
                </div>
            </div>
            <div className="image-section">
                <div className="image-container">
                    <img src="images/me.jpg" />
                </div>
            </div>
        </div>
    );
}

export default FrontPage;