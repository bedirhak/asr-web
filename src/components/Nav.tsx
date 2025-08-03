import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from 'react-i18next';
import Logo from "../assets/images/logoWhite.png";
// import Language from "./Language";

const ContraNavBar = () => {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <Navbar expand="lg" className={`cg-navbar ${isScrolled ? 'scrolled' : ''} ${isNavOpen ? 'mobile-menu-open' : ''}`}>
                <Container className="cg-navbar-container">
                    <Navbar.Brand href="/">
                        <div className="cg-logo">
                            <img src={Logo} alt="Contra Group Logo" />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        onClick={handleNavToggle}
                        className={isNavOpen ? 'open' : ''}
                    />
                    <Navbar.Collapse id="basic-navbar-nav" className="cg-navbar-link">
                        <Nav className="me-auto">
                            <Nav.Link className="cg-nav-link" href="/">
                                {t('menu-home')}
                            </Nav.Link>
                            <Nav.Link className="cg-nav-link" href="/about">
                                {t('menu-about')}
                            </Nav.Link>
                            <Nav.Link className="cg-nav-link" href="capabilities">
                                {t('menu-capabilities')}
                            </Nav.Link>
                            {/* <Nav.Link className="cg-nav-link" href="innovation">
              Arge İnovasyon
            </Nav.Link> */}
                            <Nav.Link className="cg-nav-link" href="contact">
                                {t('menu-contact')}
                            </Nav.Link>
                            {/* <Nav.Link className="cg-nav-link" href="home">
              Medya
            </Nav.Link> */}
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                    {/* <Language /> */}

                </Container>
            </Navbar>

        </>

    );
};

export default ContraNavBar;
