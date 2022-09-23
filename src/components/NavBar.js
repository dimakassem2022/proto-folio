
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LogoIcon } from "./LogoIcon";
import { SocialIcon } from "./SocialIcon";


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const onUpdateActiveClass = (value) => {
        return activeLink === value ? 'active navbar-link' : 'navbar-link'
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand>
                   <LogoIcon/> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className='navbar-toggle-icon'>
                    </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={onUpdateActiveClass('home')} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={onUpdateActiveClass('skills')} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={onUpdateActiveClass('projects')} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <SocialIcon />
                        <button className="vvd"><a href="#connect" className={onUpdateActiveClass('connect')}>Let’s Connect</a></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}