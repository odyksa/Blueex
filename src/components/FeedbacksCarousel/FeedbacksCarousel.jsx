import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./FeedbacksCarousel.css";

class FeedbacksCarousel extends Component {
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
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <Slider {...settings} className="wow slideInUp">
                            <div className="feedbacks-carousel-item">
                                <div className="feedbacks-carousel-item-img">
                                    <Image roundedCircle src="assets/feedbacks/feedback-1.jpg" className="img-fluid" />
                                </div>
                                <div className="feedbacks-carousel-item-text text-center">
                                    <h4 className="mt-3">Saul Goodman</h4>
                                    <p className="font-italic">Ceo &amp; Founder</p>
                                    <p><i className="fa fa-quote-left" aria-hidden="true"></i>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.<i className="fa fa-quote-right" aria-hidden="true"></i></p>
                                </div>
                            </div>

                            <div className="feedbacks-carousel-item">
                                <div className="feedbacks-carousel-item-img">
                                    <Image roundedCircle src="assets/feedbacks/feedback-2.jpg" className="img-fluid" />
                                </div>
                                <div className="feedbacks-carousel-item-text text-center">
                                    <h4 className="mt-3">Sara Wilsson</h4>
                                    <p className="font-italic">Designer</p>
                                    <p><i className="fa fa-quote-left" aria-hidden="true"></i>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.<i className="fa fa-quote-right" aria-hidden="true"></i></p>
                                </div>
                            </div>

                            <div className="feedbacks-carousel-item">
                                <div className="feedbacks-carousel-item-img">
                                    <Image roundedCircle src="assets/feedbacks/feedback-3.jpg" className="img-fluid" />
                                </div>
                                <div className="feedbacks-carousel-item-text text-center">
                                    <h4 className="mt-3">Matt Brandon</h4>
                                    <p className="font-italic">Freelancer</p>
                                    <p><i className="fa fa-quote-left" aria-hidden="true"></i>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.<i className="fa fa-quote-right" aria-hidden="true"></i></p>
                                </div>
                            </div>

                            <div className="feedbacks-carousel-item">
                                <div className="feedbacks-carousel-item-img">
                                    <Image roundedCircle src="assets/feedbacks/feedback-4.jpg" className="img-fluid" />
                                </div>
                                <div className="feedbacks-carousel-item-text text-center">
                                    <h4 className="mt-3">John Larson</h4>
                                    <p className="font-italic">Entrepreneur</p>
                                    <p><i className="fa fa-quote-left" aria-hidden="true"></i>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.<i className="fa fa-quote-right" aria-hidden="true"></i></p>
                                </div>
                            </div>

                            <div className="feedbacks-carousel-item">
                                <div className="feedbacks-carousel-item-img">
                                    <Image roundedCircle src="assets/feedbacks/feedback-5.jpg" className="img-fluid" />
                                </div>
                                <div className="feedbacks-carousel-item-text text-center">
                                    <h4 className="mt-3">Phill Collins</h4>
                                    <p className="font-italic">CTO</p>
                                    <p><i className="fa fa-quote-left" aria-hidden="true"></i>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.<i className="fa fa-quote-right" aria-hidden="true"></i></p>
                                </div>
                            </div>

                            <div className="feedbacks-carousel-item">
                                <div className="feedbacks-carousel-item-img">
                                    <Image roundedCircle src="assets/feedbacks/feedback-6.jpg" className="img-fluid" />
                                </div>
                                <div className="feedbacks-carousel-item-text text-center">
                                    <h4 className="mt-3">Endy Garfild</h4>
                                    <p className="font-italic">CEO</p>
                                    <p><i className="fa fa-quote-left" aria-hidden="true"></i>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.<i className="fa fa-quote-right" aria-hidden="true"></i></p>
                                </div>
                            </div>

                            <div className="feedbacks-carousel-item">
                                <div className="feedbacks-carousel-item-img">
                                    <Image roundedCircle src="assets/feedbacks/feedback-7.jpg" className="img-fluid" />
                                </div>
                                <div className="feedbacks-carousel-item-text text-center">
                                    <h4 className="mt-3">John Nash</h4>
                                    <p className="font-italic">Accountant</p>
                                    <p><i className="fa fa-quote-left" aria-hidden="true"></i>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.<i className="fa fa-quote-right" aria-hidden="true"></i></p>
                                </div>
                            </div>

                            <div className="feedbacks-carousel-item">
                                <div className="feedbacks-carousel-item-img">
                                    <Image roundedCircle src="assets/feedbacks/feedback-8.jpg" className="img-fluid" />
                                </div>
                                <div className="feedbacks-carousel-item-text text-center">
                                    <h4 className="mt-3">Endy Fregman</h4>
                                    <p className="font-italic">CEO</p>
                                    <p><i className="fa fa-quote-left" aria-hidden="true"></i>Proin eget odio eu nisi tincidunt finibus at vitae tortor. Aliquam quis vestibulum sem. Morbi porttitor mollis bibendum. Vestibulum diam metus, malesuada et tempor imperdiet, faucibus vel justo. !<i className="fa fa-quote-right" aria-hidden="true"></i></p>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FeedbacksCarousel;