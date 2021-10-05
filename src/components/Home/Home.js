import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import SubHome from '../SubHome/SubHome';
import SubHomeTwo from '../SubHomeTwo/SubHomeTwo';
import './Home.css'


const Home = () => {
    return (
        // home area start 
        <>
            <div className="backgroundImage">
                <Container>
                    <Row className="d-flex align-items-center pt-5">
                        <div className="col col-md-7">
                            <h1 className="fw-bold text-light">
                                <span className="guitarSpan">EAT</span>  <br />
                                <span className="guitarSpan">SLEEP</span>  <br />
                                <span className="guitarSpan">CODE</span>  <br />
                                <span className="guitarSpan">REPEAT</span>  <br />

                            </h1>

                        </div>
                        <div className="col col-md-5 imgHover">
                            <img className="w-100" src="https://i.ibb.co/rvRjPtJ/robotic.jpg" alt="" />
                        </div>
                    </Row>
                </Container>
            </div>

            {/* sub heading start  */}
            <SubHomeTwo></SubHomeTwo>
            <SubHome></SubHome>
            {/* sub heading end  */}
        </>
        // home area end 
    );
};

export default Home;