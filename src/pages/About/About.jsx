import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image, Jumbotron } from 'react-bootstrap';
import './About.css';
import FeedbacksCarousel from '../../components/FeedbacksCarousel';

class About extends Component {
    render() {
        return (
            <main className="about">
                <Container>
                    <Row>
                        <Col>
                        <FeedbacksCarousel />
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default About;