import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import './CustomNavbar.css';

class CustomNavbar extends Component {
    render() {
        return (
            <header className="header">
                <Navbar collapseOnSelect expand="lg" bg="light">
                    <Container>
                        <Link to="/" className="logo">
                            <Image src="assets/logo.png" />
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse>
                            <Nav className="ml-auto">
                                <Nav.Link to="/" as={Link} className="text-uppercase">Home</Nav.Link>
                                <Nav.Link to="/about" as={Link} className="text-uppercase">About</Nav.Link>
                                <Nav.Link to="/news" as={Link} className="text-uppercase">News</Nav.Link>
                                <Nav.Link to="/faq" as={Link} className="text-uppercase">FAQ</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}

export default CustomNavbar;