import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useFirebase } from "react-redux-firebase";
import { useNavigate, useLocation } from "react-router-dom";
const Login = () => {
  const [user, setUser] =useState({
    email:"",
    password:""
  })
  const {email, password} = user;
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <>
      <Container>
        <Row className="flex align-items-center justify-content-center login">
          <Col xs={12} md={6}>
            <Form className="shadow bg-light p-4" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="fw-bold">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                />
              </Form.Group>
              <Button type="submit" variant="dark w-100">
                Sign In to Dashboard
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
