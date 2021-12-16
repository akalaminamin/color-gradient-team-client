import React from "react";
import { Container, Row, Button,Form } from "react-bootstrap";

const Register = () => {
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
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

export default Register;
