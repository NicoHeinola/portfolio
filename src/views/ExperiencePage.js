import FancyText from "components/text/FancyText";
import "styles/views/experiencepage.scss";

const ExperiencePage = () => {

    const jobDescriptions = [
        {
            "title": "Alfons Digital",
            "sub_title": "Junior Web Developer",
            "logo": "images/work_logos/alfonsdigitaloy.png",
            "descriptions": [
                {
                    "text": "Fullstack development of online education platforms like Maol2 and Äly, utilizing Vue.js and Laravel/Lumen PHP framework"
                },
                {
                    "text": "Writing PHP unit tests with Laravel/Lumen's unit library"
                },
                {
                    "text": "Postgress and MySQL database management"
                },
                {
                    "text": "Utilizing Paytrail's payment api on a webstore"
                },
                {
                    "text": "Testing, maintenance and backup automation of Wordpress web applications"
                }
            ]
        },
        {
            "title": "The Finnish Defence Forces",
            "sub_title": "Software Developer",
            "logo": "images/work_logos/pv.png",
            "descriptions": [
                {
                    "text": "Served my military service as a software/fullstack developer"
                },
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
            "sub_title": "1st Place",
            "logo": "images/work_logos/skillsfinland.png",
            "descriptions": [
                {
                    "text": "Secured the first place in the Finnish championships of Taitaja2022"
                },
                {
                    "text": "Continued the development of a homepage from the ground up using JavaScript and React"
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
            "sub_title": "3rd Place",
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
                <div className="bg"></div>
                <div className="logo-list">
                    <div className="logo">
                        <img alt="" className="image" src="images/work_logos/pv.png" />
                        <p className="text">The Finnish Defence Forces</p>
                    </div>
                    <div className="logo">
                        <img alt="" className="image" src="images/work_logos/alfonsdigitaloy.png" />
                        <p className="text">Alfons Digital</p>
                    </div>
                    <div className="logo">
                        <img alt="" className="image" src="images/work_logos/skillsfinland.png" />
                        <p className="text">Taitaja2022</p>
                    </div>
                    <div className="logo">
                        <img alt="" className="image" src="images/work_logos/skillsfinland.png" />
                        <p className="text">Taitaja2021</p>
                    </div>
                </div>
            </div>
            <div className="experiences">
                {jobDescriptions.map((experience, expIndex) =>
                    <div key={"experience" + expIndex} className="experience">
                        <div className="title-row">
                            <img alt="" className="icon" src={experience.logo} />
                            <FancyText><h2 className="title">{experience.title}</h2></FancyText>
                        </div>
                        <div className="sub-title-row">
                            <h4 className="sub-title">{experience.sub_title}</h4>
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