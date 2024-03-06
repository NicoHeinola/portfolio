import CursorText from "components/text/CursorText";
import EncryptedCursorText from "components/text/EncryptedCursorText";
import "styles/views/frontpage.scss"

function FrontPage() {
    let description = "I'm a passionate programmer with motivation to constantly learn something new. I specialize in web development but I'm also proficient at making desktop applications and games.";
    return (
        <div className="front-page">
            <div className="background"></div>
            <div className="hi-section">
                <div className="social-medias">
                    <div className="list-of-medias">
                        <a className="media" style={{ animationDelay: ".5s" }} href="https://github.com/NicoHeinola" target="_blank">
                            <img className="icon" src="icons/github.png" />
                        </a>
                        <a className="media" style={{ animationDelay: ".6s" }} href="https://github.com/NicoHeinola" target="_blank">
                            <img className="icon" src="icons/linkedin.png" />
                        </a>
                        <a className="media" style={{ animationDelay: ".7s" }} href="https://github.com/NicoHeinola" target="_blank">
                            <img className="icon" src="icons/mail.png" />
                        </a>
                    </div>
                    <div className="seperator-line" style={{ animationDelay: "0.3s" }}></div>
                </div>
                <div className="about-me">
                    <CursorText className="title" fontSize="big" delaySeconds={.1} name={[{ text: "", waitSeconds: 0.50, speed: 0 }, { text: "Hi,", waitSeconds: 0.55, speed: 0.1 }, { text: " I'm Nico!", waitSeconds: 0, speed: 0.035 }]}></CursorText>
                    <EncryptedCursorText decryptionCount={7} delaySeconds={.1} decryptionDelaySeconds={0.03} encryptionDelaySeconds={0.05} fontSize="small" name={[{ text: "", waitSeconds: 1.8, speed: 0 }, { text: description, waitSeconds: 0, speed: 0.006 }]}>
                    </EncryptedCursorText>
                </div>
            </div>
            <div className="image-section" style={{ animationDelay: "3.1s" }}>
                <div className='image-container'>
                    <div className="skewed-image hollow-image">
                        <div className="image" src="images/me.jpg"></div>
                    </div>
                    <div className="skewed-image">
                        <img draggable="false" className="image" src="images/me.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FrontPage;