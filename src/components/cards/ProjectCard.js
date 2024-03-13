import FancyText from "components/text/FancyText";
import "styles/components/cards/projectcard.scss"

const ProjectCard = (props) => {
    let project = props.project;

    return (
        <div className="project-card">
            <div className="shadow"></div>
            <div className="bg"></div>
            <div className="image-container">
                <img alt="" src={project.images[0]} className="image" />
            </div>
            <div className="content">
                <div className="title-row">
                    <FancyText><h3 className="title">{project.title}</h3></FancyText>
                    <div className="links">
                        {project.links.map((link, linkIndex) =>
                            <a className="link" key={'projlink' + linkIndex} href={link.href} target="_blank" rel="noreferrer">
                                <img alt="" className="image" src={link.image} />
                            </a>
                        )}
                    </div>
                </div>
                <p className="description">{project.description}</p>
                <div className="code-languages">
                    {project["code-languages"].map((language, langIndex) =>
                        <p className="language" key={"codelang" + langIndex}>
                            {language.language}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;