import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import './Header.css'
const Header = () => {

    // hooks and buton handler 
    const history = useHistory()
    const signIn = () => {
        history.push('/sign')
    }
    const logIn = () => {
        history.push('/log')
    }
    return (

        // nav bar start 
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">Coding-Heros</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className="text-decoration-none mx-3 text-light" to="/home">Home</NavLink>
                        <NavLink className="text-decoration-none mx-3 text-light" to="/services">Services</NavLink>
                        <NavLink className="text-decoration-none mx-3 text-light" to="/about">About Us</NavLink>

                    </Nav>
                    <Button onClick={logIn} className="mx-1" variant="danger fw-bold">Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // nav bar end 
    );
};

export default Header;