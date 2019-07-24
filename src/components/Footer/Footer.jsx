import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Image, Col } from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-top">
                    <Container>
                        <Row>
                            <Col lg={4} sm={6} className="footer-top-col">
                                <Link to="/" className="footer-top-logo">
                                    <Image src="assets/logo.png" className="img-fluid" />
                                </Link>
                                <p className="mt-4">Beatae tenetur, hic eum a nulla amet sequi, dolorum, reiciendis optio maiores modi tempora. Consequatur, ipsam id recusandae magni est nesciunt quae!</p>
                            </Col>
                            <Col lg={2} sm={6} className="footer-top-col">
                                <h4 className="footer-top-title">Navigation</h4>
                                <ul className="footer-top-list">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/news">News</Link>
                                    </li>
                                    <li>
                                        <Link to="/faq">FAQ</Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={3} sm={6} className="footer-top-col">
                                <h4 className="footer-top-title">Contact Us</h4>
                                <address>A108 Adam Street, <br />NY 535022, <br />United States</address>
                                <p><strong>Phone number:</strong>+1 5589 55488 55</p>
                                <p><strong>Email:</strong>office@blueex.com</p>
                            </Col>
                            <Col lg={3} sm={6} className="footer-top-col">
                                <h4 className="footer-top-title">Subscribe to our news</h4>
                                <p>Subscribe to the newsletter for more updates</p>
                                <form action="" className="footer-top-form">
                                    <input type="email" name="email" placeholder="Your email adress" className="" />
                                    <button type="submit" className="">Send</button>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="footer-bottom">
                    <Container>
                        <Row>
                            <Col>
                                <p>Made with <span className="fa fa-heart" aria-hidden="true"></span> by Alex Dyksa</p>
                                <p>© All Rights Reserved</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        );
    }
}

export default Footer;