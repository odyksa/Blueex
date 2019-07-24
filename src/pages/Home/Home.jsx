import React, { Component } from 'react';
import { Container, Row, Col, Button, Image, Carousel } from 'react-bootstrap';
import WOW from 'wowjs';
import scrollToComponent from 'react-scroll-to-component';
import FeedbacksCarousel from '../../components/FeedbacksCarousel';
import ClientsCarousel from '../../components/ClientsCarousel';

import './Home.css';

class Home extends Component {
    componentDidMount() {
        // init WOW.JS
        new WOW.WOW().init();
    }

    render() {
        return (
            <main className="home" >
                {/* intro */}
                <section className="section section-no-mt intro parallax wow fadeIn">
                    <Container>
                        <Row>
                            <Col lg={{ span: 8, offset: 2 }} className="text-center">
                                <div className="intro-inner">
                                    <h1 className="intro-title text-uppercase mb-4">Welcome to <span>BlueEx</span></h1>
                                    <h2>Corporis molestias illo incidunt deleniti nostrum neque</h2>
                                    <div className="intro-btn-block">
                                        <Button
                                            className="intro-btn-default"
                                            onClick={() => scrollToComponent(this.odio, { offset: 0, align: 'top', duration: 2000, ease: 'inOutExpo' })}
                                        >
                                            Get Started
                                        </Button>
                                        <Button
                                            className="intro-btn-default intro-btn-transparent"
                                            onClick={() => scrollToComponent(this.contact, { offset: 0, align: 'top', duration: 1000, ease: 'inOutExpo' })}
                                        >
                                            Contact Us
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* /intro */}

                {/* odio */}
                < section className="section odio" ref={section => { this.odio = section }}>
                    <h3 className="text-center section-title section-title-border">Odio sed id eos</h3>
                    <Container>
                        <Row className="wow bounceInUp" data-wow-offset="200" data-wow-duration="1.5s">
                            <Col lg={5} md={6} className="mb-4">
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
                                    <a href="/">
                                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="/" className="ml-2 mr-2">
                                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="/">
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
                                    <a href="/">
                                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="/" className="ml-2 mr-2">
                                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="/">
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
                                    <a href="/">
                                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="/" className="ml-2 mr-2">
                                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="/">
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
                                <p>Nulla vitae elit libero, a pharetra augue</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="assets/carousel-2.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h4>Consectetur adipiscing</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="assets/carousel-3.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h4>Vel scelerisque nisl</h4>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl</p>
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

                {/* action */}
                < section className="section action" >
                    <Container>
                        <Row>
                            <Col xs={12} lg={9}>
                                <h3 className="action-title">Necessitatibus enim sequi quasi aperiam</h3>
                                <p className="action-text">Velit facilis obcaecati sequi nemo labore? Blanditiis possimus odio assumenda est voluptate placeat fugit repellat necessitatibus enim sequi quasi aperiam, sunt non, vitae dolor commodi cupiditate rem. Laborum, asperiores. Autem nostrum quas pariatur architecto tempora consequuntur ipsa totam.</p>
                            </Col>
                            <Col xs={12} lg={3} className="d-flex justify-content-center justify-content-lg-end align-items-center">
                                <a href="/" className="action-btn">Call To Action</a>
                            </Col>
                        </Row>
                    </Container>
                </section >
                {/* /action */}

                {/* clients */}
                <section className="section clients">
                    <h3 className="text-center section-title section-title-border">Clients</h3>
                    <Container>
                        <Row>
                            <Col>
                                <ClientsCarousel />
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* /clients */}

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

                {/* portfolio */}
                <section className="section portfolio">
                    <h3 className="text-center section-title section-title-border">Our portfolio</h3>
                    <Row className="no-gutters">
                        <Col lg={3} sm={6} xs={12}>
                            <div className="portfolio-item wow rollIn" data-wow-offset="200">
                                <a href="/" className="portfolio-link">
                                    <Image src="assets/portfolio-item-1.jpg" className="img-fluid" />
                                    <div className="portfolio-description text-center">
                                        <h4 className="portfolio-title text-uppercase">Esse sint doloribus</h4>
                                        <p className="portfolio-text">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} xs={12}>
                            <div className="portfolio-item wow rollIn" data-wow-offset="200">
                                <a href="/" className="portfolio-link">
                                    <Image src="assets/portfolio-item-2.jpg" className="img-fluid" />
                                    <div className="portfolio-description text-center">
                                        <h4 className="portfolio-title text-uppercase">Morbi in pellentesque nisi</h4>
                                        <p className="portfolio-text">Quisque magna arcu, elementum convallis maximus ac</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} xs={12}>
                            <div className="portfolio-item wow rollIn" data-wow-offset="200">
                                <a href="/" className="portfolio-link">
                                    <Image src="assets/portfolio-item-3.jpg" className="img-fluid" />
                                    <div className="portfolio-description text-center">
                                        <h4 className="portfolio-title text-uppercase">Ut nunc felis, sagittis ac</h4>
                                        <p className="portfolio-text">Phasellus laoreet, justo eu ultricies lacinia</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} xs={12}>
                            <div className="portfolio-item wow rollIn" data-wow-offset="200">
                                <a href="/" className="portfolio-link">
                                    <Image src="assets/portfolio-item-4.jpg" className="img-fluid" />
                                    <div className="portfolio-description text-center">
                                        <h4 className="portfolio-title text-uppercase">Suspendisse scelerisque</h4>
                                        <p className="portfolio-text">Nulla auctor sodales augue a posuere</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} xs={12}>
                            <div className="portfolio-item wow rollIn" data-wow-offset="200">
                                <a href="/" className="portfolio-link">
                                    <Image src="assets/portfolio-item-5.jpg" className="img-fluid" />
                                    <div className="portfolio-description text-center">
                                        <h4 className="portfolio-title text-uppercase">Donec bibendum leo non enim congue</h4>
                                        <p className="portfolio-text">Donec bibendum leo non enim congue finibus</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} xs={12}>
                            <div className="portfolio-item wow rollIn" data-wow-offset="200">
                                <a href="/" className="portfolio-link">
                                    <Image src="assets/portfolio-item-6.jpg" className="img-fluid" />
                                    <div className="portfolio-description text-center">
                                        <h4 className="portfolio-title text-uppercase">Duis justo lectus, euismod vel</h4>
                                        <p className="portfolio-text">Nam turpis neque, iaculis in nisl vel, malesuada facilisis purus</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} xs={12}>
                            <div className="portfolio-item wow rollIn" data-wow-offset="200">
                                <a href="/" className="portfolio-link">
                                    <Image src="assets/portfolio-item-7.jpg" className="img-fluid" />
                                    <div className="portfolio-description text-center">
                                        <h4 className="portfolio-title text-uppercase">Esse sint doloribus</h4>
                                        <p className="portfolio-text">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} xs={12}>
                            <div className="portfolio-item wow rollIn" data-wow-offset="200">
                                <a href="/" className="portfolio-link">
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

                {/* facts */}
                <section className="section facts">
                    <h3 className="text-center section-title section-title-border">Facts about us</h3>
                    <Container>
                        <Row className="wow heartBeat" data-wow-offset="300">
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

                {/* feedbacks */}
                <section className="section feedbacks">
                    <h3 className="text-center section-title section-title-border">Feedbacks</h3>
                    <Container>
                        <Row>
                            <Col>
                                <FeedbacksCarousel />
                            </Col>
                        </Row>
                    </Container>
                    
                </section>
                {/* /feedbacks */}

                {/* contact */}
                <section className="section contact" ref={section => { this.contact = section }}>
                    <h3 className="text-center section-title section-title-border">Contact us</h3>
                    <Container>
                        <Row>
                            <Col md={4} xs={12}>
                                <div className="contact-item text-center wow slideInUp">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <p className="contact-title text-uppercase mt-3">ADDRESS</p>
                                    <p className="contact-text">A108 Adam Street, NY 535022, US</p>
                                </div>
                            </Col>
                            <Col md={4} xs={12}>
                                <div className="contact-item contact-item-phone text-center wow slideInUp">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <p className="contact-title text-uppercase mt-3">Phone Number</p>
                                    <p className="contact-text">+1 5589 55488 55</p>
                                </div>
                            </Col>
                            <Col md={4} xs={12}>
                                <div className="contact-item contact-item-email text-center wow slideInUp">
                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                    <p className="contact-title text-uppercase mt-3">Email</p>
                                    <p className="contact-text">
                                        <a href="mailto:blueex.com">office@blueex.com</a>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col className="wow slideInUp">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.896430877538!2d-73.99079092136607!3d40.69827857701043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x62e24eacc2d0fc67!2svcaqua!5e0!3m2!1sru!2sua!4v1563540883707!5m2!1sru!2sua" style={{ width: '100%', height: '450px', frameBorder: '0px', border: '0px' }} allowFullScreen title="google map"></iframe>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* /contact */}
            </main >
        );
    }
}

export default Home;