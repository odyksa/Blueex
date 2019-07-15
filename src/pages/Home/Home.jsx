import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image, Jumbotron } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <main className="home">
                <Container>
                    <Jumbotron>
                        <hgroup>
                            <h1>Welcome</h1>
                            <h2>Subtitle</h2>
                        </hgroup>
                        <Link to="/about">
                        <Button variant="primary">About</Button>
                    </Link>
                    </Jumbotron> 
                    <Row className="text-center">
                        <Col xs={12} sm={4} className="person">
                            <Image roundedCircle src="assets/person-1.jpg" fluid />
                            <h3 className="person-name">Frank Duval</h3>
                            <p className="person-text">Nam accumsan malesuada odio id suscipit. Aliquam aliquet interdum elit, quis convallis sem finibus ac. Mauris ullamcorper placerat dui, in fringilla dui tincidunt et.</p>
                        </Col>
                        <Col xs={12} sm={4} className="person">
                            <Image roundedCircle src="assets/person-2.jpg" fluid />
                            <h3 className="person-name">Oswald Retenburg</h3>
                            <p className="person-text">Mauris et quam dolor. Nulla ut posuere metus. Aenean id nisl eu velit semper accumsan. In nec varius leo. Praesent aliquet turpis vitae tortor lobortis pretium.</p>
                        </Col>
                        <Col xs={12} sm={4} className="person">
                            <Image roundedCircle src="assets/person-3.jpg" fluid />
                            <h3 className="person-name">Peter Jackson</h3>
                            <p className="person-text">Aliquam erat volutpat. Suspendisse vehicula a purus vel blandit. Sed erat nulla, eleifend in sem nec, luctus commodo dolor. Nunc finibus, turpis non bibendum iaculis.</p>
                        </Col>
                    </Row>                   
                </Container>
            </main>
        );
    }
}

export default Home;