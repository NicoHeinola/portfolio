import HollowButton from "components/input/HollowButton";
import ParticleCanvas from "components/particles/ParticleCanvas";
import CursorText from "components/text/CursorText";
import EncryptedCursorText from "components/text/EncryptedCursorText";
import "styles/views/frontpage.scss"

function FrontPage() {
    const isFirefox = typeof InstallTrigger !== 'undefined';

    let description = "Programming is more than just a job for me; it's my passion. Specializing in web development, I've also dedicated my free time to making desktop applications and games. Continuously seeking ways to enhance my skills, programming is both my career and a fulfilling hobby.";

    return (
        <div className="front-page">
            <ParticleCanvas className="particles" startDelaySeconds={5}></ParticleCanvas>
            <div className="background"></div>
            <div className="hi-section">
                <div className="social-medias">
                    <div className="list-of-medias">
                        <a className="media" style={{ animationDelay: ".5s" }} href="https://github.com/NicoHeinola" target="_blank" rel="noreferrer">
                            <img alt="" className="icon" src="icons/github.png" />
                        </a>
                        <a className="media" style={{ animationDelay: ".6s" }} href="https://fi.linkedin.com/in/nico-heinola-991b561b3" target="_blank" rel="noreferrer">
                            <img alt="" className="icon" src="icons/linkedin.png" />
                        </a>
                        <a className="media" style={{ animationDelay: ".7s" }} href="mailto:nico.heinola@gmail.com" target="_blank" rel="noreferrer">
                            <img alt="" className="icon" src="icons/mail.png" />
                        </a>
                    </div>
                    <div className="seperator-line" style={{ animationDelay: "0.3s" }}></div>
                </div>
                <div className="about-me-container">
                    <div className="about-me">
                        <CursorText className="title" fontSize="big" delaySeconds={isFirefox ? 0.1 : 0.3} name={[{ text: "", waitSeconds: 0.50, speed: 0 }, { text: "Hi,", waitSeconds: 0.30, speed: 0.1 }, { text: " I'm Nico!", waitSeconds: 0, speed: 0.035 }]}></CursorText>
                        <CursorText className="title" fontSize="semi-big" delaySeconds={isFirefox ? 0.1 : 0.3} name={[{ text: "", waitSeconds: 1, speed: 0 }, { text: "Fullstack Developer", waitSeconds: 0.30, speed: 0.1 }]}></CursorText>
                        <EncryptedCursorText decryptionCount={isFirefox ? 7 : 5} delaySeconds={isFirefox ? 0.1 : 0.5} decryptionDelaySeconds={0.02} fontSize="small" name={[{ text: "", waitSeconds: 1.8, speed: 0 }, { text: description, waitSeconds: 0, speed: 0.006 }]}>
                        </EncryptedCursorText>
                    </div>
                    <div className="buttons">
                        <a href="#project-page"><HollowButton style={{ animationDelay: "3.5s" }}>My Projects</HollowButton></a>
                        <a href="#experience-page"><HollowButton className="secondary" style={{ animationDelay: "3.5s" }}>Experience</HollowButton></a>
                    </div>
                </div>
            </div>
            <div className="image-section" style={{ animationDelay: "3.1s" }}>
                <div className='image-container'>
                    <div className="skewed-image hollow-image">
                        <div className="image"></div>
                    </div>
                    <div className="skewed-image">
                        <img alt="" draggable="false" className="image main-image" src="images/me.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FrontPage;