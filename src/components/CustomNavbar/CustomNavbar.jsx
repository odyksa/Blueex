import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './CustomNavbar.css';

class CustomNavbar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="light" className="mb-3">
                <Container>
                    <Link to="/">
                        <Navbar.Brand>CodeLife</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                            <Nav.Link to="/" as={Link}>Home</Nav.Link>
                            <Nav.Link to="/about" as={Link}>About</Nav.Link>
                            <Nav.Link to="/news" as={Link}>News</Nav.Link>
                            <Nav.Link to="/faq" as={Link}>FAQ</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default CustomNavbar;