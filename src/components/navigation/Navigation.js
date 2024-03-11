import "styles/components/navigation/navigation.scss";
import { useState, useEffect, useRef } from "react";

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('');
    const selectionRef = useRef(null);

    let links = [
        { text: "Home", href: "#", sectionId: "front-page", id: "home-link" },
        { text: "My Projects", href: "#project-page", sectionId: "project-page", id: "my-projects-link" },
    ]

    // Called on page scroll
    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        // Adjust these values as needed based on your sections' positions
        const sectionOffsets = {}

        // Form the section offset array
        for (let index in links) {
            let link = links[index];

            if (index === 0) {
                sectionOffsets[link.sectionId] = 0;
                continue;
            }

            let section = document.getElementById(link.sectionId);

            if (!section) {
                continue;
            }

            sectionOffsets[link.sectionId] = section.offsetTop;
        }

        let active = '';
        Object.keys(sectionOffsets).forEach((key) => {
            if (scrollPosition >= sectionOffsets[key] - 100) {
                active = key;
            }
        });

        // setActiveSection(active);
        onSectionUnHover();
    };

    const getSectionBoundingRect = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section || !selectionRef) {
            return undefined;
        }

        const sectionRect = section.getBoundingClientRect();
        return sectionRect;
    }

    const scrollToSection = (sectionId, clicked, doScroll) => {
        if (sectionId === activeSection) {
            return;
        }

        const sectionRect = getSectionBoundingRect(sectionId);
        if (!sectionRect) {
            return;
        }

        const section = document.getElementById(sectionId);

        const parentRect = section.parentElement.getBoundingClientRect();
        const positionX = sectionRect.left - parentRect.left;

        selectionRef.current.style.left = `${positionX}px`;
        selectionRef.current.style.width = `${sectionRect.width + 2}px`;

        if (doScroll) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
            });
        }

        setActiveSection(sectionId)
        onSectionUnHover()

        if (clicked) {
            selectionRef.current.style.scale = `${1.1}`;
            return;
        }
    };

    const onSectionHover = (sectionId) => {
        const sectionRect = getSectionBoundingRect(sectionId);
        if (!sectionRect) {
            return;
        }

        // Let's expand to both directions if hovering current one
        if (sectionId === activeSection) {
            selectionRef.current.style.scale = `${1.1}`;
            return;
        }

        const selectionRect = selectionRef.current.getBoundingClientRect();

        let dir = (selectionRect.x < sectionRect.x) ? 1 : -1;

        selectionRef.current.style.marginLeft = `${9 * dir}px`;
    }

    const onSectionUnHover = () => {
        selectionRef.current.style.scale = `${1}`;
        selectionRef.current.style.paddingLeft = `0px`;
        selectionRef.current.style.marginLeft = `0px`;
    }

    // Add scroll event listener
    useEffect(() => {
        setTimeout(() => scrollToSection(links[0].id, false, false), 200)


        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navigation">
            <div className="container">
                <div className="links">
                    <div ref={selectionRef} className="selection" id="nav-selection"></div>
                    {links.map((link, index) => <a className="link" id={link.id} style={{ animationDelay: (4.4 + 0.2 * index) + "s" }} onMouseLeave={onSectionUnHover} onMouseEnter={() => onSectionHover(link.id)} onClick={() => scrollToSection(link.id, true)} href={link.href} key={`link-${index}`}>{link.text}</a>)}
                </div>
            </div>
        </nav>
    )
}


export default Navigation;