import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (

        // footer start 
        <div className="bg-custom text-light text-center pt-5 cusFooter">
            <Container className="footerGrid">
                <div>
                    <h3 className="text-start">Use full links</h3>
                    <ul className="d-block p-0 m-0">
                        <li>You can join course now</li>
                        <li>Contact with us</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-start">Course Outline</h3>
                    <ul className="d-block p-0 m-0">
                        <li>Mentor Details</li>
                        <li>Duration - 3 months</li>

                    </ul>
                </div>

                <div>
                    <h3 className="text-start">Course details</h3>
                    <ul className="d-block p-0 m-0">
                        <li>Course fee - no</li>
                        <li>Course exams - yes</li>

                    </ul>
                </div>
            </Container>
            <p className="p-2 m-0">allrights reserved by Farhana Binte Hasan</p>
        </div>

        // footer end 
    );
};

export default Footer;