import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import FeedbacksCarousel from '../../components/FeedbacksCarousel';
import './News.css';

class News extends Component {
    render() {
        return (
            <main className="News" >
                <section className="section">
                    <h2 className="text-center section-title section-title-border">News</h2>
                    <Container>
                        <Row className="mb-5">
                            <Col lg={3}>
                                <Image src="assets/portfolio-item-1.jpg" className="img-fluid" />
                            </Col>
                            <Col lg={9}>
                                <h3>Lorem ipsum dolor sit amet.</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ratione dolor harum quis fugit. Recusandae beatae asperiores, nihil, dolorum repudiandae error qui, doloremque esse nulla ipsam minus. Eveniet vel magnam aspernatur similique neque veritatis facilis ipsam doloremque! At odit reiciendis aliquid voluptate in quasi, placeat nulla exercitationem veniam porro commodi.</p>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col lg={3}>
                                <Image src="assets/portfolio-item-2.jpg" className="img-fluid" />
                            </Col>
                            <Col lg={9}>
                                <h3>Lorem ipsum dolor sit amet.</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ratione dolor harum quis fugit. Recusandae beatae asperiores, nihil, dolorum repudiandae error qui, doloremque esse nulla ipsam minus. Eveniet vel magnam aspernatur similique neque veritatis facilis ipsam doloremque! At odit reiciendis aliquid voluptate in quasi, placeat nulla exercitationem veniam porro commodi.</p>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col lg={3}>
                                <Image src="assets/portfolio-item-3.jpg" className="img-fluid" />
                            </Col>
                            <Col lg={9}>
                                <h3>Lorem ipsum dolor sit amet.</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ratione dolor harum quis fugit. Recusandae beatae asperiores, nihil, dolorum repudiandae error qui, doloremque esse nulla ipsam minus. Eveniet vel magnam aspernatur similique neque veritatis facilis ipsam doloremque! At odit reiciendis aliquid voluptate in quasi, placeat nulla exercitationem veniam porro commodi.</p>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col lg={3}>
                                <Image src="assets/portfolio-item-4.jpg" className="img-fluid" />
                            </Col>
                            <Col lg={9}>
                                <h3>Lorem ipsum dolor sit amet.</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ratione dolor harum quis fugit. Recusandae beatae asperiores, nihil, dolorum repudiandae error qui, doloremque esse nulla ipsam minus. Eveniet vel magnam aspernatur similique neque veritatis facilis ipsam doloremque! At odit reiciendis aliquid voluptate in quasi, placeat nulla exercitationem veniam porro commodi.</p>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col lg={3}>
                                <Image src="assets/portfolio-item-1.jpg" className="img-fluid" />
                            </Col>
                            <Col lg={9}>
                                <h3>Lorem ipsum dolor sit amet.</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ratione dolor harum quis fugit. Recusandae beatae asperiores, nihil, dolorum repudiandae error qui, doloremque esse nulla ipsam minus. Eveniet vel magnam aspernatur similique neque veritatis facilis ipsam doloremque! At odit reiciendis aliquid voluptate in quasi, placeat nulla exercitationem veniam porro commodi.</p>
                            </Col>
                        </Row>

                        <Row className="mb-5">
                            <Col lg={3}>
                                <Image src="assets/portfolio-item-2.jpg" className="img-fluid" />
                            </Col>
                            <Col lg={9}>
                                <h3>Lorem ipsum dolor sit amet.</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ratione dolor harum quis fugit. Recusandae beatae asperiores, nihil, dolorum repudiandae error qui, doloremque esse nulla ipsam minus. Eveniet vel magnam aspernatur similique neque veritatis facilis ipsam doloremque! At odit reiciendis aliquid voluptate in quasi, placeat nulla exercitationem veniam porro commodi.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="section">
                    <h2 className="text-center section-title section-title-border">Feedbacks</h2>
                    <Container>
                        <Row>
                            <Col>
                                <FeedbacksCarousel />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        );
    }
}

export default News;