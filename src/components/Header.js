import React from 'react'
import {Container,Nav,Navbar, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from '../img/logo-04.jpg';

const Header = () => {
  return (
    <div id="header">
        <div className="top-sec">
            <div className="social-icons">
                <a href="https://www.facebook.com/rathinamcollege/about/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://twitter.com/rathinamgroups" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/rathinam_rsa/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
            </div>
        </div>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <Link to="/"><img src={Logo} alt=""/></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/awards">Award & Fees</Nav.Link>
                        <Nav.Link as={Link} to="/events">Events</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                    <Button className="topbar-btn">Register</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header
