import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image, Jumbotron, Carousel } from 'react-bootstrap';
import WOW from 'wowjs';
import './Home.css';

class Home extends Component {
    state = {
        isCount: false
    };

    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {
        return (
            <main className="home" >
                {/* intro */}
                <section className="section intro">

                </section>
                {/* /intro */}

                {/* jumbotron */}
                <section className="section jumbotron-wrap" >
                    <Container>
                        <Jumbotron>
                            <hgroup>
                                <h1 className="text-uppercase mb-4">Welcome to Altmetric Co</h1>
                                <h2 className="jumbotron-subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore excepturi nesciunt repellat, atque at tenetur.</h2>
                            </hgroup>
                            <Link to="/about">
                                <Button variant="primary" className="mt-2">About</Button>
                            </Link>
                        </Jumbotron>
                    </Container>
                </section>
                {/* /jumbotron */}

                {/* team */}
                < section className="section team" >
                    <h3 className="text-center section-title section-title-border">Our team</h3>
                    <Container>
                        <Row className="text-center">
                            <Col xs={12} sm={4} className="person wow slideInUp" data-wow-offset="200">
                                <Image roundedCircle src="assets/person-1.jpg" fluid />
                                <h4 className="person-name mt-3">Frank Duval</h4>
                                <p className="person-position font-italic">Chief Executive Officer</p>
                                <p className="person-text">Nam accumsan malesuada odio id suscipit. Aliquam aliquet interdum elit, quis convallis sem finibus ac. Mauris ullamcorper placerat dui, in fringilla dui tincidunt et.</p>
                                <div className="person-social-links text-center">
                                    <a href="#">
                                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" className="ml-2 mr-2">
                                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-twitter-square" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </Col>
                            <Col xs={12} sm={4} className="person wow slideInUp" data-wow-offset="200" data-wow-delay=".3s">
                                <Image roundedCircle src="assets/person-2.jpg" fluid />
                                <h4 className="person-name mt-3">Oswald Retenburg</h4>
                                <p className="person-position font-italic">CTO</p>
                                <p className="person-text">Mauris et quam dolor. Nulla ut posuere metus. Aenean id nisl eu velit semper accumsan. In nec varius leo. Praesent aliquet turpis vitae tortor lobortis pretium.</p>
                                <div className="person-social-links text-center">
                                    <a href="#">
                                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" className="ml-2 mr-2">
                                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-twitter-square" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </Col>
                            <Col xs={12} sm={4} className="person wow slideInUp" data-wow-offset="200" data-wow-delay="0.6s">
                                <Image roundedCircle src="assets/person-3.jpg" fluid />
                                <h4 className="person-name mt-3">Peter Jackson</h4>
                                <p className="person-position font-italic">Accountant</p>
                                <p className="person-text">Aliquam erat volutpat. Suspendisse vehicula a purus vel blandit. Sed erat nulla, eleifend in sem nec, luctus commodo dolor. Nunc finibus, turpis non bibendum iaculis.</p>
                                <div className="person-social-links text-center">
                                    <a href="#">
                                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" className="ml-2 mr-2">
                                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-twitter-square" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section >
                {/* /team */}

                {/* carousel */}
                < section className="section carousel-wrap" >
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
                </section >
                {/* /carousel */}

                {/* advantages */}
                < section className="section advantages" >
                    <h3 className="text-center section-title section-title-border">Our advantages</h3>
                    <Container>
                        <Row className="text-center">
                            <Col xs={12} sm={6} lg={3} className="advantage-item text-center wow slideInLeft" data-wow-offset="300">
                                <div className="advantage-item-icon">
                                    <i className="fa fa-credit-card-alt" aria-hidden="true"></i>
                                </div>
                                <h4 className="advantage-name mt-3">Quis convallis</h4>
                                <p className="advantage-text">Nam accumsan malesuada odio id suscipit. Aliquam aliquet interdum elit, quis convallis sem finibus ac. Mauris ullamcorper placerat dui, in fringilla dui tincidunt et.</p>
                            </Col>
                            <Col xs={12} sm={6} lg={3} className="advantage-item text-center wow slideInLeft" data-wow-offset="300">
                                <div className="advantage-item-icon">
                                    <i className="fa fa-caret-square-o-down" aria-hidden="true"></i>
                                </div>
                                <h4 className="advantage-name mt-3">Amet consectetur adipisicing</h4>
                                <p className="advantage-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa earum repellendus molestias esse labore rem sequi. Ab, quos itaque!</p>
                            </Col>
                            <Col xs={12} sm={6} lg={3} className="advantage-item text-center wow slideInRight" data-wow-offset="300">
                                <div className="advantage-item-icon">
                                    <i className="fa fa-tachometer" aria-hidden="true"></i>
                                </div>
                                <h4 className="advantage-name mt-3">Molestiae non officiis</h4>
                                <p className="advantage-text">Quod magni at corporis molestiae non officiis commodi dignissimos odit obcaecati consectetur a dicta sequi. Qui ad repudiandae, architecto libero optio deleniti?</p>
                            </Col>
                            <Col xs={12} sm={6} lg={3} className="advantage-item text-center wow slideInRight" data-wow-offset="300">
                                <div className="advantage-item-icon">
                                    <i className="fa fa-calendar-minus-o" aria-hidden="true"></i>
                                </div>
                                <h4 className="advantage-name mt-3">Repudidae velit nulla</h4>
                                <p className="advantage-text">Placeat vel cum nisi dignissimos repudiandae velit nulla aperiam praesentium, nostrum vero exercitationem. Quaerat eveniet facere doloremque, quam mollitia maiores!</p>
                            </Col>
                        </Row>
                    </Container>
                </section >
                {/* /advantages */}

                {/* subscribe */}
                < section className="section subscribe" >
                    <h3 className="text-center section-title">Subscribe to the newsletter for more updates</h3>
                    <Container>
                        <Row>
                            <Col lg={{ span: 8, offset: 2 }} >
                                <form action="" className="subscribe-form d-flex justify-content-center lg-10">
                                    <input type="email" name="email" placeholder="Your email adress" className="subscribe-form-email" />
                                    <button type="submit" className="subscribe-form-btn">Send</button>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </section >
                {/* /subscribe */}

                {/* odio */}
                < section className="section odio" >
                    <h3 className="text-center section-title section-title-border">Odio sed id eos</h3>
                    <Container>
                        <Row className="wow bounceInUp" data-wow-offset="200" data-wow-duration="1.5s">
                            <Col lg={5} md={6}>
                                <div className="odio-img">
                                    <Image src="assets/odio.jpg" />
                                </div>
                            </Col>
                            <Col lg={7} md={6}>
                                <h4 className="odio-title">Odio sed id eos et laboriosam consequatur eos earum soluta</h4>
                                <p className="mt-4">Recusandae atque et quod obcaecati consectetur commodi minus nam quidem voluptatem exercitationem corporis molestias illo incidunt deleniti nostrum neque veniam, magni nesciunt quisquam sapiente iste explicabo quis quae officia.</p>
                                <p className="mt-4"> Incidunt eveniet, labore quas adipisicing elit. Accusantium ex provident sed ad molestiae esse alias, fugiat explicabo laudantium odio cumque quidem tempora deleniti cum!</p>
                                <ul>
                                    <li className="mt-3">
                                        <i className="fa fa-check-square-o mr-2" aria-hidden="true"></i>
                                        Curabitur feugiat ut risus eget condimentum. Etiam quis diam et metus aliquam euismod.
                                    </li>
                                    <li className="mt-3">
                                        <i className="fa fa-check-square-o mr-2" aria-hidden="true"></i>
                                        Suspendisse ac dui sem. Duis tempor elit ante, sed euismod nisl ultrices eget. Orci varius natoque penatibus et magnis dis parturient montes.
                                    </li>
                                    <li className="mt-3">
                                        <i className="fa fa-check-square-o mr-2" aria-hidden="true"></i>
                                        Ut euismod blandit metus nec semper. In dapibus, odio eu eleifend finibus, nunc lacus tristique eros, vitae imperdiet nisi nunc nec lectus. Fusce malesuada congue dictum.
                                    </li>
                                    <li className="mt-3">
                                        <i className="fa fa-check-square-o mr-2" aria-hidden="true"></i>
                                        Nulla sit amet nulla hendrerit, tristique risus quis, maximus enim. Fusce malesuada, dui et dapibus rutrum, nibh enim tristique leo, eu molestie metus odio at ante.
                                    </li>
                                    <li className="mt-3">
                                        <i className="fa fa-check-square-o mr-2" aria-hidden="true"></i>
                                        Suspendisse ac dui sem. Duis tempor elit ante, sed euismod nisl ultrices eget. Orci varius natoque penatibus et magnis dis parturient montes.
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section >
                {/* /odio */}

                {/* action */}
                < section className="section action" >
                    <Container>
                        <Row>
                            <Col xs={12} lg={9}>
                                <h3 className="action-title">Necessitatibus enim sequi quasi aperiam</h3>
                                <p className="action-text">Velit facilis obcaecati sequi nemo labore? Blanditiis possimus odio assumenda est voluptate placeat fugit repellat necessitatibus enim sequi quasi aperiam, sunt non, vitae dolor commodi cupiditate rem. Laborum, asperiores. Autem nostrum quas pariatur architecto tempora consequuntur ipsa totam.</p>
                            </Col>
                            <Col xs={12} lg={3} className="d-flex justify-content-center justify-content-lg-end align-items-center">
                                <a href="#" className="action-btn wow shake">Call To Action</a>
                            </Col>
                        </Row>
                    </Container>
                </section >
                {/* /action */}

                {/* projects */}
                < section className="section projects" >
                    <h3 className="text-center section-title section-title-border">Recently Projects</h3>
                    <Container>
                        <Row className="wow zoomIn" data-wow-offset="200">
                            <Col lg={6}>
                                <Image src="assets/project-1.jpg" className="img-fluid projects-img" />
                            </Col>
                            <Col lg={6}>
                                <h4 className="projects-title mt-4 mt-lg-0">Sed id eos et laboriosam consequatur</h4>
                                <p className="mt-4">Recusandae atque et quod obcaecati consectetur commodi minus nam quidem voluptatem exercitationem corporis molestias illo incidunt deleniti nostrum neque veniam, magni nesciunt quisquam sapiente iste explicabo quis quae officia.</p>
                                <p className="mt-4"> Incidunt eveniet, labore quas adipisicing elit. Accusantium ex provident sed ad molestiae esse alias, fugiat explicabo laudantium odio cumque quidem tempora deleniti cum!</p>
                            </Col>
                        </Row>
                        <Row className="wow zoomIn mt-lg-5" data-wow-offset="200">
                            <Col lg={6} className="order-lg-2">
                                <Image src="assets/project-2.jpg" className="img-fluid projects-img" />
                            </Col>
                            <Col lg={6} className="order-lg-1">
                                <h4 className="projects-title mt-4 mt-lg-0">Molestias illo incidunt deleniti nostrum neque</h4>
                                <p className="mt-4">Incidunt eveniet, labore quas adipisicing elit. Accusantium ex provident sed ad molestiae esse alias, fugiat explicabo laudantium odio cumque quidem tempora deleniti cum!</p>
                                <p className="mt-4">Recusandae atque et quod obcaecati consectetur commodi minus nam quidem voluptatem exercitationem corporis molestias illo incidunt deleniti nostrum neque veniam, magni nesciunt quisquam sapiente iste explicabo quis quae officia.</p>
                            </Col>
                        </Row>
                    </Container>
                </section >
                {/* /projects */}

                {/* facts */}
                <section className="section facts">
                    <h3 className="text-center section-title section-title-border">Facts about us</h3>
                    <Container>
                        <Row className="wow heartBeat" data-wow-offset="100">
                            <Col lg={3} xs={6} className="text-center facts-item">
                                <span className="facts-value">340</span>
                                <p>Clients</p>
                            </Col>
                            <Col lg={3} xs={6} className="text-center facts-item">
                                <span className="facts-value">75</span>
                                <p>Projects</p>
                            </Col>
                            <Col lg={3} xs={6} className="text-center facts-item">
                                <span className="facts-value">6</span>
                                <p>Offices</p>
                            </Col>
                            <Col lg={3} xs={6} className="text-center facts-item">
                                <span className="facts-value">140</span>
                                <p>Workers</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* /facts */}

                {/* portfolio */}
                <section className="section portfolio">
                    <h3 className="text-center section-title section-title-border">Our portfolio</h3>
                    <Row className="no-gutters">
                        <Col lg={3} sm={6} xs={12}>
                            <div className="portfolio-item wow rollIn" data-wow-offset="300">
                                <a href="" className="portfolio-link">
                                    <Image src="assets/portfolio-item-1.jpg" className="img-fluid" />
                                    <div className="portfolio-description text-center">
                                        <h4 className="portfolio-title text-uppercase">Esse sint doloribus</h4>
                                        <p className="portfolio-text">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} xs={12}>
                            <div className="portfolio-item wow rollIn" data-wow-offset="300">
                                <a href="" className="portfolio-link">
                                    <Image src="assets/portfolio-item-2.jpg" className="img-fluid" />
                                    <div className="portfolio-description text-center">
                                        <h4 className="portfolio-title text-uppercase">Morbi in pellentesque nisi</h4>
                                        <p className="portfolio-text">Quisque magna arcu, elementum convallis maximus ac</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} xs={12}>
                            <div className="portfolio-item wow rollIn" data-wow-offset="300">
                                <a href="" className="portfolio-link">
                                    <Image src="assets/portfolio-item-3.jpg" className="img-fluid" />
                                    <div className="portfolio-description text-center">
                                        <h4 className="portfolio-title text-uppercase">Ut nunc felis, sagittis ac</h4>
                                        <p className="portfolio-text">Phasellus laoreet, justo eu ultricies lacinia</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} xs={12}>
                            <div className="portfolio-item wow rollIn" data-wow-offset="300">
                                <a href="" className="portfolio-link">
                                    <Image src="assets/portfolio-item-4.jpg" className="img-fluid" />
                                    <div className="portfolio-description text-center">
                                        <h4 className="portfolio-title text-uppercase">Suspendisse scelerisque</h4>
                                        <p className="portfolio-text">Nulla auctor sodales augue a posuere</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} xs={12}>
                            <div className="portfolio-item wow rollIn" data-wow-offset="300">
                                <a href="" className="portfolio-link">
                                    <Image src="assets/portfolio-item-5.jpg" className="img-fluid" />
                                    <div className="portfolio-description text-center">
                                        <h4 className="portfolio-title text-uppercase">Donec bibendum leo non enim congue</h4>
                                        <p className="portfolio-text">Donec bibendum leo non enim congue finibus</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} xs={12}>
                            <div className="portfolio-item wow rollIn" data-wow-offset="300">
                                <a href="" className="portfolio-link">
                                    <Image src="assets/portfolio-item-6.jpg" className="img-fluid" />
                                    <div className="portfolio-description text-center">
                                        <h4 className="portfolio-title text-uppercase">Duis justo lectus, euismod vel</h4>
                                        <p className="portfolio-text">Nam turpis neque, iaculis in nisl vel, malesuada facilisis purus</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} xs={12}>
                            <div className="portfolio-item wow rollIn" data-wow-offset="300">
                                <a href="" className="portfolio-link">
                                    <Image src="assets/portfolio-item-7.jpg" className="img-fluid" />
                                    <div className="portfolio-description text-center">
                                        <h4 className="portfolio-title text-uppercase">Esse sint doloribus</h4>
                                        <p className="portfolio-text">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} xs={12}>
                            <div className="portfolio-item wow rollIn" data-wow-offset="300">
                                <a href="" className="portfolio-link">
                                    <Image src="assets/portfolio-item-8.jpg" className="img-fluid" />
                                    <div className="portfolio-description text-center">
                                        <h4 className="portfolio-title text-uppercase">Quisque magna arcu, elementum convallis</h4>
                                        <p className="portfolio-text">Phasellus laoreet, justo eu ultricies lacinia</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </section>
                {/* /portfolio */}


            </main >
        );
    }
}

export default Home;