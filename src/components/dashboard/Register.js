import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
const Login = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { name, email, password, confirmPassword } = user;
  const { signUp } = useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password don't Match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(email, password, name);
      navigate("/")
    } catch (error){
      setLoading(false);
      console.log(error.message);
      setError("Failed to signup");
    }

    setUser({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <>
      <Container>
        <Row className="flex align-items-center justify-content-center login">
          <Col xs={12} md={6}>
            <Form className="shadow bg-light p-4" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  name="name"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  name="email"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  name="password"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  name="confirmPassword"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Link to="/login" className="text-secondary">
                Already have an account
              </Link>
              {error && <Alert variant="danger mb-2">{error}</Alert>}

              <Button type="submit" variant="dark w-100 mt-2" className="mt-3" disabled={loading}>
                Sign Up to Dashboard
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
