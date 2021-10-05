import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AllService from '../AllService/AllService';
import './Service.css'


const Service = () => {
    // react hooks 
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./details.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        // Service area start 
        <>
            <div className="serviceBackdround">
                <h1 className="text-center text-light"><span style={{ fontSize: '5rem' }}>Our All Courses</span></h1>

            </div>
            <Container>
                <Row xs={1} md={3} className="g-4 pb-5">
                    {/* dynamically load card start  */}
                    {
                        services.map(service => <AllService key={service.id} service={service}></AllService>)
                    }
                    {/* dynamically load card start  */}
                </Row>
            </Container>
        </>
        // Service area end 
    );
};

export default Service;