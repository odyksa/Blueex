import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image, Jumbotron } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <hgroup>
                        <h1>Welcome</h1>
                        <h2>Subtitle</h2>
                    </hgroup>
                </Jumbotron>
                <Link to="/about">
                    <Button variant="primary">About</Button>
                </Link>
            </Container>
        );
    }
}

export default Home;