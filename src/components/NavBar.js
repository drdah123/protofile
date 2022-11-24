import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled ' : ''}>
      <Container>
        <Navbar.Brand>
          <h1>
            <Link href="/" className="nav.navbar navbar-brand">
              Abdalrahman
            </Link>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/skill"
              className={
                activeLink === 'Skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('Skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="/project"
              className={
                activeLink === 'Project' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('Project')}
            >
              Project
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <Link
                href="https://www.linkedin.com/in/abdlarahman-eid-778067235/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="" />
              </Link>
              <Link
                href="https://github.com/drdah123"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="" />
              </Link>
            </div>
            <Link className="vvd" href="/contact">
              <span>lets connect</span>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
