import React from 'react';
import { Accordion, Container, Nav } from 'react-bootstrap';
import './About.css'
const About = () => {
    return (
        <>
        {/* about page heading start */}

        <div className="aboutBackdround">
            <h1 className="mb-1 text-light text-center pt-5 fw-bold"><span style={{fontSize:'5rem'}}>BS Guitar academy</span></h1>
        </div>

        {/* about page heading end */}

        <Container className="text-center">
            <h1 className="mb-3">About Us</h1>
            <ul>
                <li>Goal</li>
                <li>Achievement</li>
                <li>Location</li>
                <li>Contact</li>
            </ul>

            
        {/* Accordion from react bootstrap components start */}

            <Accordion className="my-5" defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Goal</Accordion.Header>
                    <Accordion.Body>
                    There are different ways people have tried and failed to learn guitar. In-person instructors and YouTube seem like great options at first, but they usually lead to slow progress and staggered results.It’s impossible to achieve your guitar goals with wannabe celebrity instructors, or searching through hundreds of broken lesson videos. At Guitar Tricks®, we’ll give you all the guitar knowledge you need to succeed with our award-winning, step-by-step curriculum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Achievement</Accordion.Header>
                    <Accordion.Body>Guitar Tricks® invented online guitar lessons in 1998, and has grown its comprehensive lesson library to over 11,000 lessons, and over 1,000+ songs, with top-notch instructors from all over the world.At Guitar Tricks® you can jump right into playing your favorite songs by artists like The Beatles, The Rolling Stones, Eagles and tons of other popular artists.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Location</Accordion.Header>
                    <Accordion.Body>Details from Google Maps <br />
                            KN 5 Rd, Kigali, Rwanda <br />
                        +250 724 123 139
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        {/* Accordion from react bootstrap components end */}

        </Container>
        </>
    );
};

export default About;