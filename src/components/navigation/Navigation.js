import "styles/components/navigation/navigation.scss";
import { useState, useEffect, useRef } from "react";

const Navigation = () => {
    const selectionRef = useRef(null);
    let hoveredSectionId = "";

    let links = [
        { text: "Home", href: "#", sectionId: "front-page", linkId: "home-link" },
        { text: "Experience", href: "#experience-page", sectionId: "experience-page", linkId: "experience-link" },
        { text: "My Projects", href: "#project-page", sectionId: "project-page", linkId: "my-projects-link" },
    ]

    let activeSectionId = "";

    const getLinkFromSectionId = (sectionId) => {
        return links.find(linkObject => linkObject.sectionId === sectionId);
    }

    // Called on page scroll
    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        // Adjust these values as needed based on your sections' positions
        const sectionOffsets = {}
        // Form the section offset array
        for (let index in links) {
            let linkObject = links[index];

            if (index === 0) {
                sectionOffsets[linkObject] = 0;
                continue;
            }

            let section = document.getElementById(linkObject.sectionId);

            if (!section) {
                continue;
            }

            sectionOffsets[index] = section.offsetTop;
        }

        let active = links[0];
        Object.keys(sectionOffsets).forEach((index) => {
            if (scrollPosition >= sectionOffsets[index] - 100) {
                active = links[index];
            }
        });

        checkSectionSelectionSize(getLinkFromSectionId(hoveredSectionId));
        activeSectionId = active.sectionId;
        setNavigationSelectionTo(active);
    };

    const getBoundingRect = (id) => {
        const element = document.getElementById(id);

        if (!element || !selectionRef) {
            return undefined;
        }

        const elementRect = element.getBoundingClientRect();
        return elementRect;
    }

    // Moves and resizes the selection line to match nav link
    const setNavigationSelectionTo = (linkObject) => {
        const linkRect = getBoundingRect(linkObject.linkId);
        if (!linkRect) {
            return;
        }

        const linkElement = document.getElementById(linkObject.linkId);

        const linkParentRect = linkElement.parentElement.getBoundingClientRect();
        let positionX = linkRect.left - linkParentRect.left;

        selectionRef.current.style.left = `${positionX}px`;
        selectionRef.current.style.width = `${linkRect.width - 7}px`;
    }

    // Tells the browser to scroll to a specific section of the page
    const scrollToSection = (linkObject) => {
        if (linkObject.sectionId === activeSectionId) {
            return;
        }

        const sectionElement = document.getElementById(linkObject.sectionId);
        window.scrollTo({
            top: sectionElement.offsetTop,
            behavior: 'smooth',
        })
    };

    // Slightly moves and expands the selection if hovered
    const checkSectionSelectionSize = (linkObject) => {
        if (hoveredSectionId === "") {
            return;
        }

        // Let's expand to both directions if hovering current one
        if (linkObject.sectionId === activeSectionId) {
            selectionRef.current.style.scale = `${1.1}`;
            selectionRef.current.style.marginLeft = "0px";
        } else {
            selectionRef.current.style.scale = `${1.0}`;

            const linkRect = getBoundingRect(linkObject.linkId);
            const selectionRect = selectionRef.current.getBoundingClientRect();

            let dir = (selectionRect.x < linkRect.x) ? 1 : -1;
            selectionRef.current.style.marginLeft = `${9 * dir}px`;
        }
    }

    const onSectionHover = (linkObject) => {
        hoveredSectionId = linkObject.sectionId;
        checkSectionSelectionSize(linkObject);
    }

    const onSectionUnHover = () => {
        selectionRef.current.style.scale = `${1}`;
        selectionRef.current.style.marginLeft = `0px`;
        hoveredSectionId = "";
    }

    // Add scroll event listener
    useEffect(() => {
        setTimeout(() => {
            checkSectionSelectionSize(links[0]);
            activeSectionId = links[0].sectionId;
            setNavigationSelectionTo(links[0]);

            onSectionUnHover();
        }, 4400)

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
                    {links.map((link, index) => <p className="link" id={link.linkId} style={{ animationDelay: (4.4 + 0.2 * index) + "s" }} onMouseLeave={onSectionUnHover} onMouseEnter={() => onSectionHover(link)} onClick={() => scrollToSection(link)} href={link.href} key={`link-${index}`}>{link.text}</p>)}
                </div>
            </div>
        </nav>
    )
}


export default Navigation;