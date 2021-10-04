import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './SubHomeTwo.css'


const SubHomeTwo = () => {
    return (
        <div className="text-center">
            <h1>How we care about leaners</h1>
            <Container>
            <Row xs={1} md={2} className="g-4">
                {/* single card start  */}
                        <Col>
                            <div className="carD">
                                <Card.Body>
                                <Card.Title>Basic theory Knowledge</Card.Title>
                                <Card.Text>
                                    First we teach about the theory about the topic of music.and we justify their capacity.Then we approach forward according their capability.
                                </Card.Text>
                                </Card.Body>
                            </div>
                        </Col>
                        <Col>
                            <div className="carD">
                                <Card.Body>
                                <Card.Title>Practical Music</Card.Title>
                                <Card.Text>
                                    After finishing first stage, learners are ready to handle practical knowledge.we provide all the practical based on theory at first stage.
                                </Card.Text>
                                </Card.Body>
                            </div>
                        </Col>
                        <Col>
                            <div className="carD">
                                <Card.Body>
                                <Card.Title>Professional training</Card.Title>
                                <Card.Text>
                                    In this stage,all the learners gain much experience about theory and practical knowledge.So now this is the time to go deep on music
                                </Card.Text>
                                </Card.Body>
                            </div>
                        </Col>
                        <Col>
                            <div className="carD">
                                <Card.Body>
                                <Card.Title>Exam and test</Card.Title>
                                <Card.Text>
                                    In the last stage we judge everyone by having a test and competetion.for winner,have some attractive prize and certificates.
                                </Card.Text>
                                </Card.Body>
                            </div>
                        </Col>
                    {/* single card end  */}
                </Row>
            </Container>
        </div>
    );
};

export default SubHomeTwo;