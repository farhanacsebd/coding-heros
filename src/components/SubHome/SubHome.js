import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Cards from '../Cards/Cards';

const SubHome = () => {
    // react hooks start
    const [cards,setCards] = useState([])
    useEffect(()=>{
        fetch('./home.json')
        .then(res=>res.json())
        .then(data=> setCards(data))
    },[])
    // react hooks end

    
    return (
        <Container>
            <h1 className="text-center mt-5">Our Syllabus</h1>
            <Row xs={1} md={4} className="g-4 mt-3 pb-5">
                {
                    cards.map(card => <Cards key={card.id} card={card}></Cards>)
                }
            </Row>
        </Container>
    );
};

export default SubHome;