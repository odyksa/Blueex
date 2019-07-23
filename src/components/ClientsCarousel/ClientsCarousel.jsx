import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./ClientsCarousel.css";

class ClientsCarousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 6000,
            cssEase: "ease-in-out",
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Container>
                <Row>
                    <Col>
                        <Slider {...settings} className="wow slideInLeft">
                            <div className="client-item">
                                <a href="https://www.youtube.com" target="_blank">
                                    <Image src="assets/clients/client-1.png" className="client-item-img"/>
                                </a>
                            </div>

                            <div className="client-item">
                                <a href="https://www.youtube.com" target="_blank">
                                    <Image src="assets/clients/client-2.png" className="client-item-img"/>
                                </a>
                            </div>

                            <div className="client-item">
                                <a href="https://www.youtube.com" target="_blank">
                                    <Image src="assets/clients/client-3.png" className="client-item-img"/>
                                </a>
                            </div>

                            <div className="client-item">
                                <a href="https://www.youtube.com" target="_blank">
                                    <Image src="assets/clients/client-4.png" className="client-item-img"/>
                                </a>
                            </div>

                            <div className="client-item">
                                <a href="https://www.youtube.com" target="_blank">
                                    <Image src="assets/clients/client-5.png" className="client-item-img"/>
                                </a>
                            </div>

                            <div className="client-item">
                                <a href="https://www.youtube.com" target="_blank">
                                    <Image src="assets/clients/client-6.png" className="client-item-img"/>
                                </a>
                            </div>

                            <div className="client-item">
                                <a href="https://www.youtube.com" target="_blank">
                                    <Image src="assets/clients/client-7.png" className="client-item-img"/>
                                </a>
                            </div>

                            <div className="client-item">
                                <a href="https://www.youtube.com" target="_blank">
                                    <Image src="assets/clients/client-8.png" className="client-item-img"/>
                                </a>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ClientsCarousel;