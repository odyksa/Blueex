import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image, Jumbotron, Carousel } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <main className="home">
                <Image src="assets/home-bg.jpg" fluid className="mb-4" />
                <Container>
                    <Jumbotron>
                        <hgroup>
                            <h1 className="text-uppercase mb-4">Welcome to Altmetric Co</h1>
                            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore excepturi nesciunt repellat, atque at tenetur.</h2>
                        </hgroup>
                        <Link to="/about">
                            <Button variant="primary" className="mt-2">About</Button>
                        </Link>
                    </Jumbotron>
                    <section className="section">
                        <h3 className="text-center section-title">Our team</h3>
                        <Row className="text-center">
                            <Col xs={12} sm={4} className="person">
                                <Image roundedCircle src="assets/person-1.jpg" fluid />
                                <h4 className="person-name mt-3">Frank Duval</h4>
                                <p className="person-text">Nam accumsan malesuada odio id suscipit. Aliquam aliquet interdum elit, quis convallis sem finibus ac. Mauris ullamcorper placerat dui, in fringilla dui tincidunt et.</p>
                            </Col>
                            <Col xs={12} sm={4} className="person">
                                <Image roundedCircle src="assets/person-2.jpg" fluid />
                                <h4 className="person-name mt-3">Oswald Retenburg</h4>
                                <p className="person-text">Mauris et quam dolor. Nulla ut posuere metus. Aenean id nisl eu velit semper accumsan. In nec varius leo. Praesent aliquet turpis vitae tortor lobortis pretium.</p>
                            </Col>
                            <Col xs={12} sm={4} className="person">
                                <Image roundedCircle src="assets/person-3.jpg" fluid />
                                <h4 className="person-name mt-3">Peter Jackson</h4>
                                <p className="person-text">Aliquam erat volutpat. Suspendisse vehicula a purus vel blandit. Sed erat nulla, eleifend in sem nec, luctus commodo dolor. Nunc finibus, turpis non bibendum iaculis.</p>
                            </Col>
                        </Row>
                    </section>
                </Container>
                
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="assets/carousel-1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h4>A pharetra augue mollis</h4>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="assets/carousel-2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h4>Consectetur adipiscing elit</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="assets/carousel-3.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h4>Vel scelerisque nisl consectetur</h4>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <Container>
                <section className="section">
                        <h3 className="text-center section-title mb-4">Our advanteges</h3>
                        <Row className="text-center">
                            <Col xs={12} sm={3} className="person">
                                <Image roundedCircle src="assets/person-1.jpg" fluid />
                                <h4 className="person-name mt-3">Frank Duval</h4>
                                <p className="person-text">Nam accumsan malesuada odio id suscipit. Aliquam aliquet interdum elit, quis convallis sem finibus ac. Mauris ullamcorper placerat dui, in fringilla dui tincidunt et.</p>
                            </Col>
                            <Col xs={12} sm={3} className="person">
                                <Image roundedCircle src="assets/person-2.jpg" fluid />
                                <h4 className="person-name mt-3">Oswald Retenburg</h4>
                                <p className="person-text">Mauris et quam dolor. Nulla ut posuere metus. Aenean id nisl eu velit semper accumsan. In nec varius leo. Praesent aliquet turpis vitae tortor lobortis pretium.</p>
                            </Col>
                            <Col xs={12} sm={3} className="person">
                                <Image roundedCircle src="assets/person-3.jpg" fluid />
                                <h4 className="person-name mt-3">Peter Jackson</h4>
                                <p className="person-text">Aliquam erat volutpat. Suspendisse vehicula a purus vel blandit. Sed erat nulla, eleifend in sem nec, luctus commodo dolor. Nunc finibus, turpis non bibendum iaculis.</p>
                            </Col>
                            <Col xs={12} sm={3} className="person">
                                <Image roundedCircle src="assets/person-3.jpg" fluid />
                                <h4 className="person-name mt-3">Peter Jackson</h4>
                                <p className="person-text">Aliquam erat volutpat. Suspendisse vehicula a purus vel blandit. Sed erat nulla, eleifend in sem nec, luctus commodo dolor. Nunc finibus, turpis non bibendum iaculis.</p>
                            </Col>
                        </Row>
                    </section>
                </Container>
                <p><i className="fab fa-airbnb"></i></p>
            </main>
        );
    }
}

export default Home;