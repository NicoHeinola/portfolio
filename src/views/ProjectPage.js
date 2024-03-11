import "styles/views/projectpage.scss";
import { useState } from "react";
import HollowButton from "components/input/HollowButton";

const ProjectPage = () => {

    let projects = [
        {
            "title": "Mia's Beauty And Hair",
            "images": ["images/projects/mias_beauty_and_hair.png"],
            "description": "A barber website I made.",
            "code-languages": [{ "language": "Vue.js", "image": "images/languages/vuejs.png" }, { "language": "JavaScript", "image": "images/languages/js.png" }, { "language": "SASS", "image": "images/languages/sass.png" }],
            "link": "",
            "website-link": "https://miasbeauty.fi/",
        },
        {
            "title": "City Daylength Graph Calculator",
            "images": ["images/projects/city_daylength_graph.png"],
            "description": "A web application that forms graphs containing daytime durations of different cities for comparison. The graph system was self-made and doesn't use any additional libraries.",
            "code-languages": [{ "language": "Vue.js", "image": "images/languages/vuejs.png" }, { "language": "JavaScript", "image": "images/languages/js.png" }, { "language": "CSS", "image": "images/languages/css.png" }, { "language": "PHP", "image": "images/languages/php.png" }, { "language": "Laravel/Lumen PHP Framework", "image": "images/languages/laravel.svg" }],
            "link": "https://github.com/NicoHeinola/CityDayLengthGraph",
        },
        {
            "title": "Auto Clicker",
            "images": ["images/projects/autoclicker_dark_theme.png", "images/projects/autoclicker_dark_theme.png"],
            "description": "This is an all-round tool for automating mouse clicks and it click over 1000 times per second! Most autoclickers either don't have all the necessary features or cost money but this one's got them all. Plus this software is completely free!",
            "code-languages": [{ "language": "Python", "image": "images/languages/python.png" }, { "language": "Tk/Tcl" }],
            "link": "https://github.com/NicoHeinola/AutoClicker",
        },
        {
            "title": "YouTube Video Download Tool",
            "images": ["images/projects/youtube_downloader.png"],
            "description": "This tool allows you to download most YouTube videos and even choose their quality. Supports multiple downloads at once!",
            "code-languages": [{ "language": "Python", "image": "images/languages/python.png" }, { "language": "Tk/Tcl", "image": "" }, { "language": "FFmpeg", "image": "" }],
            "link": "https://github.com/NicoHeinola/YouTubeDownloader",
        },
        {
            "title": "Noita Game Save Backupper Tool",
            "images": ["images/projects/noita_save_backupper.png"],
            "description": "This app was made for a game called \"Noita\" and it's purpose is to enable users to backup their game saves. This is especially useful when you have a very large game file and it has the chance to corrupt at any moment.",
            "code-languages": [{ "language": "Python", "image": "images/languages/python.png" }, { "language": "python-eel", "image": "" }, { "language": "JavaScript", "image": "images/languages/js.png" }, { "language": "CSS", "image": "images/languages/css.png" }, { "language": "Electron", "image": "images/languages/electron.png" }],
            "link": "https://github.com/NicoHeinola/NoitaSaveBackupper",
        },
        {
            "title": "Super Alt+F4",
            "images": ["images/projects/super_alt_f4.png"],
            "description": "Have you ever had trouble forcing a program to close because it has disabled the alt+f4 key-combination? This program fixes that problem by bypassing that!",
            "code-languages": [{ "language": "Python", "image": "images/languages/python.png" }, { "language": "PyQt5", "image": "images/languages/qt.png" }],
            "link": "https://github.com/NicoHeinola/SuperAltF4",
        },
        {
            "title": "Infinite World Game",
            "images": ["images/projects/infinite_world_game.png"],
            "description": "This was a practise project with Unity and it's purpose was to study and learn how to make infinitely generating maps. It has been optimized quite well and supports rendering hundreds of chunks of tiles at once. It also has enemy spawning, character movement, entity stat system and a very basic pvp system.",
            "code-languages": [{ "language": "C#", "image": "images/languages/c_sharp.png" }, { "language": "Unity", "image": "images/languages/unity.png" }],
            "link": "https://github.com/NicoHeinola/InfiniteWorldGame",
        },
    ]

    let ongoingProjects = [
        {
            "title": "Movie Streaming Website",
            "images": ["images/projects/local_show_browser.png"],
            "description": "A Netflix-like website that allows you to stream your own movies and shows to you and other people. Currently has: Login, Register, VLC Media Player supported video playing, Admin control system for various features such as site settings and shows. Coming soon: UI revamp, HLS-streaming videos directly on the website.",
            "code-languages": [{ "language": "Vue.js", "image": "images/languages/vuejs.png" }, { "language": "JavaScript", "image": "images/languages/js.png" }, { "language": "SASS", "image": "images/languages/sass.png" }, { "language": "Python", "image": "images/languages/python.png" }, { "language": "Python-flask", "image": "" }, { "language": "SQLite", "image": "" }],
            "links": [{ "href": "https://github.com/NicoHeinola/LocalShowBrowser_frontend", "text": "Github Page", "image": "icons/github.png" }],
        },
        {
            "title": "Lethal Company Mod Manager",
            "images": ["images/projects/lethal_company_mod_manager.png"],
            "description": "a Tool that allows users to install and manage mods in a game called \"Lethal Company\". This is still a very ongoing project.",
            "code-languages": [{ "language": "C++", "image": "images/languages/c_plus_plus.png" }, { "language": "Qt6 (QML)", "image": "images/languages/qt.png" }],
            "links": [],
        },
    ]

    return (
        <div className="project-page" id="project-page">
            <div className="logos">
                <div className="logo-list">
                    <div className="logo">
                        <img className="image" src="images/languages/vuejs.png" />
                    </div>
                    <div className="logo">
                        <img className="image" src="images/languages/react.png" />
                    </div>
                    <div className="logo">
                        <img className="image" src="images/languages/js.png" />
                    </div>
                    <div className="logo">
                        <img className="image" src="images/languages/php.png" />
                    </div>
                    <div className="logo">
                        <img className="image" src="images/languages/laravel.svg" />
                    </div>
                    <div className="logo">
                        <img className="image" src="images/languages/css.png" />
                    </div>
                    <div className="logo">
                        <img className="image" src="images/languages/sass.png" />
                    </div>
                    <div className="logo">
                        <img className="image" src="images/languages/python.png" />
                    </div>
                    <div className="logo">
                        <img className="image" src="images/languages/c_plus_plus.png" />
                    </div>
                    <div className="logo">
                        <img className="image" src="images/languages/c_sharp.png" />
                    </div>
                    <div className="logo">
                        <img className="image" src="images/languages/qt.png" />
                    </div>
                    <div className="logo">
                        <img className="image" src="images/languages/electron.png" />
                    </div>
                    <div className="logo">
                        <img className="image" src="images/languages/unity.png" />
                    </div>
                </div>
            </div>

            <h1 className="title">Ongoing Projects</h1>
            <div className="projects">
                {ongoingProjects.map((project, index) =>
                    <div key={'project' + index} className="project">
                        <div className="image-container">
                            <img src={project.images[0]} className="image" />
                            <div className="links">
                                {project.links.map((link, linkIndex) =>
                                    <a className="link" key={'projlink' + linkIndex} href={link.href} target="_blank" rel="noreferrer">
                                        <img className="image" src={link.image} />
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="content">
                            <h3 className="title">{project.title}</h3>
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
                )}
            </div>
        </div>
    )
}

export default ProjectPage