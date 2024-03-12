import FancyText from "components/text/FancyText";
import "styles/views/experiencepage.scss";

const ExperiencePage = () => {

    const jobDescriptions = [
        {
            "title": "Alfons Digital",
            "logo": "images/work_logos/alfonsdigitaloy.png",
            "descriptions": [
                {
                    "text": "Fullstack development of online education platforms like maol2 and Äly, utilizing Vue.js and Laravel/Lumen PHP framework"
                },
                {
                    "text": "Postgress and SQL database management"
                },
                {
                    "text": "Utilizing Paytrail's payment api on a webstore"
                },
                {
                    "text": "Testing, maintenance and backup automation of wordpress web applications"
                }
            ]
        },
        {
            "title": "The Finnish Defence Forces",
            "logo": "images/work_logos/pv.png",
            "descriptions": [
                {
                    "text": "Development of a desktop application with C++ and Qt 6 framework"
                },
                {
                    "text": "Fullstack development of Styx which was used for remote management of computers (React, Rust, Express.js, Node.js, MongoDB)"
                }
            ]
        },
        {
            "title": "Taitaja2022",
            "logo": "images/work_logos/skillsfinland.png",
            "descriptions": [
                {
                    "text": "Secured first place in the Finnish championships of Taitaja2022"
                },
                {
                    "text": "Developed a homepage from the ground up using JavaScript and React"
                },
                {
                    "text": "Created a backend using PHP that. It allowed users to control map markers on the homepage"
                },
                {
                    "text": "Utilized an SQL database for data management"
                },
                {
                    "text": "The competition required communication with and end user"
                }

            ]
        },
        {
            "title": "Taitaja2021",
            "logo": "images/work_logos/skillsfinland.png",
            "descriptions": [
                {
                    "text": "Secured the third place while I was still learning web development"
                },
                {
                    "text": "Built a website using HTML, JavaScript and PHP"
                },
                {
                    "text": "Second part of the competition included a handful of fast-paced coding exercises"
                }
            ]
        }
    ]

    return (
        <div className="experience-page" id="experience-page">
            <div className="logos">
                <div className="logo-list">
                    <div className="logo">
                        <img className="image" src="images/work_logos/pv.png" />
                        <p className="text">The Finnish Defence Forces</p>
                    </div>
                    <div className="logo">
                        <img className="image" src="images/work_logos/alfonsdigitaloy.png" />
                        <p className="text">Alfons Digital</p>
                    </div>
                    <div className="logo">
                        <img className="image" src="images/work_logos/skillsfinland.png" />
                        <p className="text">Taitaja2022</p>
                    </div>
                    <div className="logo">
                        <img className="image" src="images/work_logos/skillsfinland.png" />
                        <p className="text">Taitaja2021</p>
                    </div>
                </div>
            </div>
            <div className="experiences">
                {jobDescriptions.map((experience, expIndex) =>
                    <div className="experience">
                        <div className="title-row">
                            <img className="icon" src={experience.logo} />
                            <FancyText><h2 className="title">{experience.title}</h2></FancyText>
                        </div>
                        <ul className="description-list">
                            {experience.descriptions.map((description, descIndex) =>
                                <li className="description" key={'ldesc' + descIndex}>{description.text}</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ExperiencePage;