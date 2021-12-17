import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { email, password } = user;
  const { signIn,handleGoogleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signIn(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err.message);
      setLoading(false);
      setError("Failed to login");
    }
  };
  return (
    <>
      <Container>
        <Row className="flex align-items-center justify-content-center login">
          <Col xs={12} md={6}>
            <Form className="shadow bg-light p-4" onSubmit={handleSubmit}>
              <div className="text-center mb-3">
                <Button variant="danger me-2" onClick={handleGoogleSignIn}>
                  Sign in with Google
                </Button>
                <Button variant="danger" >
                  Sign in with Facebook
                </Button>
              </div>
              <Form.Group className="mb-3" controlId="formGroupEmail">
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
              <Form.Group className="mb-3" controlId="formGroupPassword">
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
              <Link to="/register" className="text-secondary">
                Create an Account
              </Link>
              {error && <Alert variant="danger mb-2">{error}</Alert>}
              <Button type="submit" variant="dark w-100" className="mt-3" disabled={loading}>
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
