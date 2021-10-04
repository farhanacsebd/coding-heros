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
                    <h1 className="fw-bold text-light">LEARN TO PLAY <br /><span className="guitarSpan">GUITAR</span>  THE EASY <br /> FAST FUN WAY!</h1>
                    <Button variant="primary">Learn Form Today</Button>
                    </div>
                    <div className="col col-md-5 imgHover">
                        <img className="w-100" src="https://cdn.mos.cms.futurecdn.net/qyGvJqQU7imtvpX7Chckc7.jpg" alt="" />
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