import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        // login page start 
        <div>
            <div className="signDiv">
                <h2 className="text-center mt-5">LOGIN IN HERE</h2>

            </div>
            <Container>
                {/* form from react bootstrap components  */}
                <Form className="px-5 py-5 w-50 mx-auto">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="save password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                    <Link to="/sign">
                        <p>new user</p>
                    </Link>
                </Form>
                {/* form from react bootstrap components  */}

            </Container>
        </div>
        // login page end
    );
};

export default Login;