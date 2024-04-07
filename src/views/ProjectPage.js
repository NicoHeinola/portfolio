import "styles/views/projectpage.scss";
import ProjectCard from "components/cards/ProjectCard";
import ImageViewer from "components/image/ImageViewer";
import { useRef, useState } from "react";

const ProjectPage = () => {
    const [images, setImages] = useState([]);
    let imageViewerRef = useRef(null);

    const openImageViewer = (images) => {
        imageViewerRef.current.open();
        setImages(images);
    }

    let projects = [
        {
            "title": "Mia's Beauty And Hair",
            "images": ["images/projects/mias_beauty_and_hair.png"],
            "description": "I designed and coded a barber website and handled the hosting and search engine indexing processes.",
            "code-languages": [{ "language": "Vue.js", "image": "images/languages/vuejs.png" }, { "language": "JavaScript", "image": "images/languages/js.png" }, { "language": "SASS", "image": "images/languages/sass.png" }],
            "links": [{ "href": "https://miasbeauty.fi/", "image": "icons/link.png" }],
        },
        {
            "title": "City Daylength Graph Calc",
            "images": ["images/projects/city_daylength_graph.png"],
            "description": "A web application that forms graphs containing daytime durations of different cities for comparison. The graph system was self-made and doesn't use any additional libraries.",
            "code-languages": [{ "language": "Vue.js", "image": "images/languages/vuejs.png" }, { "language": "JavaScript", "image": "images/languages/js.png" }, { "language": "CSS", "image": "images/languages/css.png" }, { "language": "PHP", "image": "images/languages/php.png" }, { "language": "Laravel/Lumen PHP Framework", "image": "images/languages/laravel.svg" }],
            "links": [{ "href": "https://github.com/NicoHeinola/CityDayLengthGraph", "image": "icons/github.png" }],
        },
        {
            "title": "Auto Clicker",
            "images": ["images/projects/autoclicker_light_theme.png", "images/projects/autoclicker_dark_theme.png"],
            "description": "This is an all-round tool for automating mouse clicks and it can click over 1000 times per second! Most autoclickers either don't have all the necessary features or cost money but this one's got them all. Plus this software is completely free!",
            "code-languages": [{ "language": "Python", "image": "images/languages/python.png" }, { "language": "Tk/Tcl" }],
            "links": [{ "href": "https://github.com/NicoHeinola/AutoClicker", "image": "icons/github.png" }],
        },
        {
            "title": "YouTube Video Downloader",
            "images": ["images/projects/youtube_downloader.png"],
            "description": "This tool allows you to download most YouTube videos and even choose their quality. Supports multiple downloads at once!",
            "code-languages": [{ "language": "Python", "image": "images/languages/python.png" }, { "language": "Tk/Tcl", "image": "" }, { "language": "FFmpeg", "image": "" }],
            "links": [{ "href": "https://github.com/NicoHeinola/YouTubeDownloader", "image": "icons/github.png" }],
        },
        {
            "title": "Noita Game Save Backupper",
            "images": ["images/projects/noita_save_backupper.png"],
            "description": "This app was made for a game called \"Noita\" and it's purpose is to enable users to backup their game saves. This is especially useful when you have a very large game file and it has the chance to corrupt at any moment.",
            "code-languages": [{ "language": "Python", "image": "images/languages/python.png" }, { "language": "python-eel", "image": "" }, { "language": "JavaScript", "image": "images/languages/js.png" }, { "language": "CSS", "image": "images/languages/css.png" }, { "language": "Electron", "image": "images/languages/electron.png" }],
            "links": [{ "href": "https://github.com/NicoHeinola/NoitaSaveBackupper", "image": "icons/github.png" }],
        },
        {
            "title": "Super Alt+F4",
            "images": ["images/projects/super_alt_f4.png"],
            "description": "Have you ever had trouble forcing a program to close because it has disabled the alt+f4 key-combination? This program fixes that problem by bypassing that!",
            "code-languages": [{ "language": "Python", "image": "images/languages/python.png" }, { "language": "PyQt5", "image": "images/languages/qt.png" }],
            "links": [{ "href": "https://github.com/NicoHeinola/SuperAltF4", "image": "icons/github.png" }],
        },
        {
            "title": "Infinite World Game",
            "images": ["images/projects/infinite_world_game.png"],
            "description": "This was a practise project with Unity and it's purpose was to study and learn how to make infinitely generating maps. It has been optimized quite well and supports rendering hundreds of chunks of tiles at once. It also has enemy spawning, character movement, entity stat system and a very basic pve system.",
            "code-languages": [{ "language": "C#", "image": "images/languages/c_sharp.png" }, { "language": "Unity", "image": "images/languages/unity.png" }],
            "links": [{ "href": "https://github.com/NicoHeinola/InfiniteWorldGame", "image": "icons/github.png" }],
        },
    ]

    let ongoingProjects = [
        {
            "title": "Movie Streaming Website",
            "images": ["images/projects/local_show_browser.png"],
            "description": "A Netflix-like website that allows you to stream your own movies and shows to you and even other people. Current features include users (login, register and admins), VLC mediaplayer support (for local hosting only), HLS video streaming, video conversion manager (allows you to convert any video to streamable HLS format), site settings page (admin only), show managing tools (admins only), shows page and episode watch status.",
            "code-languages": [{ "language": "Vue.js", "image": "images/languages/vuejs.png" }, { "language": "JavaScript", "image": "images/languages/js.png" }, { "language": "SASS", "image": "images/languages/sass.png" }, { "language": "Python", "image": "images/languages/python.png" }, { "language": "Python-flask", "image": "" }, { "language": "SQLite", "image": "" }, { "language": "FFmpeg", "image": "" }],
            "links": [{ "href": "https://github.com/NicoHeinola/LocalShowBrowser_frontend", "text": "Github Page", "image": "icons/github.png" }],
        },
        {
            "title": "ActionScripter",
            "images": ["images/projects/actionscripter_1.png"],
            "description": "A user-friendly tool to make automated scripts time-taking tasks for you. Most of programs like this are either missing something, have a terrible UI or cost money but this will solve all of those 3!",
            "code-languages": [{ "language": "React", "image": "images/languages/react.png" }, { "language": "Redux", "image": "redux.svg" }, { "language": "JavaScript", "image": "images/languages/js.png" }, { "language": "SASS", "image": "images/languages/sass.png" }, { "language": "Python", "image": "images/languages/python.png" }, { "language": "Python-flask", "image": "" }, { "language": "Electron", "image": "images/languages/electron.png" }],
            "links": [{ "href": "https://github.com/NicoHeinola/LocalShowBrowser_frontend", "text": "Github Page", "image": "icons/github.png" }],
        },
        {
            "title": "Lethal Company Mod Manager",
            "images": ["images/projects/lethal_company_mod_manager.png"],
            "description": "a Tool that allows users to install and manage mods in a game called \"Lethal Company\". I'm still working on the UI and most of the functionalities such as downloading mods, creating modpacks and using them inside the game.",
            "code-languages": [{ "language": "C++", "image": "images/languages/c_plus_plus.png" }, { "language": "Qt6 (QML)", "image": "images/languages/qt.png" }],
            "links": [],
        },
        {
            "title": "Portfolio",
            "images": ["images/projects/portfolio.png"],
            "description": "Holds most of my finished and on-going projects and some information about myself too. Features coming soon: dropped projects, more images to projects, more of my finished projects, project searching/filtering and more refined UI to the projects section.",
            "code-languages": [{ "language": "React", "image": "images/languages/react.png" }, { "language": "JavaScript", "image": "images/languages/js.png" }, { "language": "SASS", "image": "images/languages/sass.png" }],
            "links": [{ "href": "https://github.com/NicoHeinola/portfolio", "text": "Github Page", "image": "icons/github.png" }],
        },
    ]

    return (
        <div className="project-page" id="project-page">
            <div className="logos">
                <div className="bg"></div>
                <div className="logo-list">
                    <div className="logo">
                        <img alt="Vue.js" className="image" src="images/languages/vuejs.png" />
                    </div>
                    <div className="logo">
                        <img alt="React" className="image" src="images/languages/react.png" />
                    </div>
                    <div className="logo">
                        <img alt="JavaScript" className="image" src="images/languages/js.png" />
                    </div>
                    <div className="logo">
                        <img alt="PHP" className="image" src="images/languages/php.png" />
                    </div>
                    <div className="logo">
                        <img alt="Laravel/Lumen" className="image" src="images/languages/laravel.svg" />
                    </div>
                    <div className="logo">
                        <img alt="CSS" className="image" src="images/languages/css.png" />
                    </div>
                    <div className="logo">
                        <img alt="SASS" className="image" src="images/languages/sass.png" />
                    </div>
                    <div className="logo">
                        <img alt="Python" className="image" src="images/languages/python.png" />
                    </div>
                    <div className="logo">
                        <img alt="C++" className="image" src="images/languages/c_plus_plus.png" />
                    </div>
                    <div className="logo">
                        <img alt="C#" className="image" src="images/languages/c_sharp.png" />
                    </div>
                    <div className="logo">
                        <img alt="QT6" className="image" src="images/languages/qt.png" />
                    </div>
                    <div className="logo">
                        <img alt="Electron" className="image" src="images/languages/electron.png" />
                    </div>
                    <div className="logo">
                        <img alt="Unity" className="image" src="images/languages/unity.png" />
                    </div>
                    <div className="logo">
                        <img alt="Redux" className="image" src="images/languages/redux.svg" />
                    </div>
                </div>
            </div>

            <h1 className="title">Ongoing Projects</h1>
            <div className="projects">
                {ongoingProjects.map((project, index) =>
                    <ProjectCard key={'project-card' + index} openImageViewer={openImageViewer} project={project}></ProjectCard>
                )}

            </div>
            <h1 className="title">Finished Projects</h1>
            <div className="projects">
                {projects.map((project, index) =>
                    <ProjectCard key={'project-card' + index} openImageViewer={openImageViewer} project={project}></ProjectCard>
                )}
            </div>
            <ImageViewer ref={imageViewerRef} images={images} />
        </div>
    )
}

export default ProjectPage