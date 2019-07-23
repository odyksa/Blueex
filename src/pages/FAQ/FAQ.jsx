import React, { Component } from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import './FAQ.css';

class FAQ extends Component {
    render() {
        return (
            <main className="FAQ" >
                <section className="section">
                    <h2 className="text-center section-title section-title-border">FAQ</h2>
                    <Container>
                        <Row>
                            <Col>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            Ex nisi laboriosam cum ipsum temporibus quae?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                Aamet consectetur adipisicing elit. Tempore tenetur quasi nihil reprehenderit et sapiente sit tempora error cupiditate officia in magnam libero voluptas odit, fuga aspernatur quam voluptate totam rem? Laboriosam quam nostrum aut, deserunt placeat asperiores eum tempore et delectus eius commodi quae explicabo harum ipsum corrupti tenetur, quas id quis voluptatum autem voluptate vel laudantium? Nobis unde inventore ad, beatae sint laudantium eos quaerat suscipit, rem ab minus praesentium iusto fugit sunt.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                           Xolor sit amet consectetur adipisicing elit. Animi, error?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                Dsum dolor sit amet consectetur adipisicing elit. Provident nemo ipsam nulla incidunt quos rem, est minima laudantium, sed corporis cumque eius quidem nihil dolore. Ratione fugit laboriosam quis nam distinctio itaque, voluptate dolore quisquam perspiciatis pariatur dolorem a aut consequuntur illo? Modi ex error nostrum facilis animi ipsam quo vero ut consequatur enim voluptatibus, recusandae, tempora eveniet, optio repellat?
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="2">
                                            Porro magnam vitae aliquid asperiores doloribus ex, dolores placeat nihil pariatur?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                Aamet consectetur adipisicing elit. Tempore tenetur quasi nihil reprehenderit et sapiente sit tempora error cupiditate officia in magnam libero voluptas odit, fuga aspernatur quam voluptate totam rem? Laboriosam quam nostrum aut, deserunt placeat asperiores eum tempore et delectus eius commodi quae explicabo harum ipsum corrupti tenetur, quas id quis voluptatum autem voluptate vel laudantium? Nobis unde inventore ad, beatae sint laudantium eos quaerat suscipit, rem ab minus praesentium iusto fugit sunt.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="3">
                                           Xlaudantium, sed corporis cumque eius quidem nihil dolore. Ratione?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                                Dsum dolor sit amet consectetur adipisicing elit. Provident nemo ipsam nulla incidunt quos rem, est minima laudantium, sed corporis cumque eius quidem nihil dolore. Ratione fugit laboriosam quis nam distinctio itaque, voluptate dolore quisquam perspiciatis pariatur dolorem a aut consequuntur illo? Modi ex error nostrum facilis animi ipsam quo vero ut consequatur enim voluptatibus, recusandae, tempora eveniet, optio repellat?
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="4">
                                        Et sapiente sit tempora error cupiditate officia in magnam libero?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body>
                                                Aamet consectetur adipisicing elit. Tempore tenetur quasi nihil reprehenderit et sapiente sit tempora error cupiditate officia in magnam libero voluptas odit, fuga aspernatur quam voluptate totam rem? Laboriosam quam nostrum aut, deserunt placeat asperiores eum tempore et delectus eius commodi quae explicabo harum ipsum corrupti tenetur, quas id quis voluptatum autem voluptate vel laudantium? Nobis unde inventore ad, beatae sint laudantium eos quaerat suscipit, rem ab minus praesentium iusto fugit sunt.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="5">
                                        Minima laudantium, sed corporis cumque eius?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="5">
                                            <Card.Body>
                                                Dsum dolor sit amet consectetur adipisicing elit. Provident nemo ipsam nulla incidunt quos rem, est minima laudantium, sed corporis cumque eius quidem nihil dolore. Ratione fugit laboriosam quis nam distinctio itaque, voluptate dolore quisquam perspiciatis pariatur dolorem a aut consequuntur illo? Modi ex error nostrum facilis animi ipsam quo vero ut consequatur enim voluptatibus, recusandae, tempora eveniet, optio repellat?
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        );
    }
}

export default FAQ;