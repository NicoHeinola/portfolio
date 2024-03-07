import "styles/components/navigation/navigation.scss";
import { useState, useEffect, useRef } from "react";

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('');
    const selectionRef = useRef(null);

    let links = [
        { text: "Home", href: "#", id: "home-link" },
        { text: "Work Experience", href: "#", id: "work-experience-link" },
        { text: "My Projects", href: "#", id: "my-projects-link" },
    ]

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        // Adjust these values as needed based on your sections' positions
        const sectionOffsets = {

        }

        // Form the section offset array
        for (let index in links) {
            let link = links[index];

            if (index == 0) {
                sectionOffsets[link.id] = 0;
                continue;
            }

            sectionOffsets[link.id] = document.getElementById(link.id).offsetTop;
        }

        let active = '';
        Object.keys(sectionOffsets).forEach((key) => {
            if (scrollPosition >= sectionOffsets[key] - 100) {
                active = key;
            }
        });

        setActiveSection(active);
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

    const scrollToSection = (sectionId) => {
        const sectionRect = getSectionBoundingRect(sectionId);
        if (!sectionRect) {
            return;
        }

        const section = document.getElementById(sectionId);

        const parentRect = section.parentElement.getBoundingClientRect();
        const positionX = sectionRect.left - parentRect.left;

        selectionRef.current.style.left = `${positionX}px`;
        selectionRef.current.style.width = `${sectionRect.width + 2}px`;

        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth',
        });

        setActiveSection(sectionId)
        onSectionUnHover()
    };

    const onSectionHover = (sectionId) => {
        // Let's not add any movement if user is hovering currently selected nav item
        if (sectionId === activeSection) {
            return;
        }

        const sectionRect = getSectionBoundingRect(sectionId);
        if (!sectionRect) {
            return;
        }

        const selectionRect = selectionRef.current.getBoundingClientRect();

        let dir = (selectionRect.x < sectionRect.x) ? 1 : -1;

        selectionRef.current.style.marginLeft = `${9 * dir}px`;
    }

    const onSectionUnHover = () => {
        selectionRef.current.style.marginLeft = `0px`;
    }

    // Add scroll event listener
    useEffect(() => {
        scrollToSection(links[0].id)

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navigation">
            <div className="links">
                <div ref={selectionRef} className="selection" id="nav-selection"></div>
                {links.map((link, index) => <a className="link" id={link.id} onMouseLeave={onSectionUnHover} onMouseEnter={() => onSectionHover(link.id)} onClick={() => scrollToSection(link.id)} href={link.href} key={`link-${index}`}>{link.text}</a>)}
            </div>
        </nav>
    )
}


export default Navigation;