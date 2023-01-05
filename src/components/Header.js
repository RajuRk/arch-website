import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from '../img/logo-04.jpg';

const Header = () => {
  return (
    <div id="header">
        <div className="top-sec">
            <div className="social-icons">
                <Link to=""><i className="fa-brands fa-facebook-f"></i></Link>
                <Link to=""><i className="fab fa-twitter"></i></Link>
                <Link to=""><i className="fa fa-instagram"></i></Link>
                <Link to=""><i className="fa fa-linkedin"></i></Link>
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
                        <Nav.Link as={Link} to="">About</Nav.Link>
                        <Nav.Link as={Link} to="">Award & Fees</Nav.Link>
                        <Nav.Link as={Link} to="">Partners</Nav.Link>
                        <Nav.Link as={Link} to="/events">Events</Nav.Link>
                        <Nav.Link as={Link} to="">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header
