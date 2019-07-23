import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ClientsCarousel from '../../components/ClientsCarousel';
import './About.css';

class About extends Component {
    render() {
        return (
            <main className="about" >
                <section className="section">
                    <h2 className="text-center section-title section-title-border">About</h2>
                    <Container>
                        <Row className="mb-5">
                            <Col lg={6}>
                                <Image src="assets/project-4.jpg" className="img-fluid" />
                            </Col>
                            <Col lg={6}>
                                <h3>Lorem ipsum dolor sit amet.</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ratione dolor harum quis fugit. Recusandae beatae asperiores, nihil, dolorum repudiandae error qui, doloremque esse nulla ipsam minus. Eveniet vel magnam aspernatur similique neque veritatis facilis ipsam doloremque! At odit reiciendis aliquid voluptate in quasi, placeat nulla exercitationem veniam porro commodi.</p>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col lg={6} className="order-lg-2">
                                <Image src="assets/project-3.jpg" className="img-fluid" />
                            </Col>
                            <Col lg={6} className="order-lg-1">
                                <h3>Lorem ipsum dolor sit amet.</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ratione dolor harum quis fugit. Recusandae beatae asperiores, nihil, dolorum repudiandae error qui, doloremque esse nulla ipsam minus. Eveniet vel magnam aspernatur similique neque veritatis facilis ipsam doloremque! At odit reiciendis aliquid voluptate in quasi, placeat nulla exercitationem veniam porro commodi.</p>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col lg={6}>
                                <Image src="assets/project-2.jpg" className="img-fluid" />
                            </Col>
                            <Col lg={6}>
                                <h3>Lorem ipsum dolor sit amet.</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ratione dolor harum quis fugit. Recusandae beatae asperiores, nihil, dolorum repudiandae error qui, doloremque esse nulla ipsam minus. Eveniet vel magnam aspernatur similique neque veritatis facilis ipsam doloremque! At odit reiciendis aliquid voluptate in quasi, placeat nulla exercitationem veniam porro commodi.</p>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col lg={6} className="order-lg-2">
                                <Image src="assets/project-1.jpg" className="img-fluid" />
                            </Col>
                            <Col lg={6} className="order-lg-1">
                                <h3>Lorem ipsum dolor sit amet.</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ratione dolor harum quis fugit. Recusandae beatae asperiores, nihil, dolorum repudiandae error qui, doloremque esse nulla ipsam minus. Eveniet vel magnam aspernatur similique neque veritatis facilis ipsam doloremque! At odit reiciendis aliquid voluptate in quasi, placeat nulla exercitationem veniam porro commodi.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="section">
                    <h2 className="text-center section-title section-title-border">Clients</h2>
                    <Container>
                        <Row>
                            <Col>
                                <ClientsCarousel />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        );
    }
}

export default About;