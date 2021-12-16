import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <Navbar bg="light shadow-sm" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://res.cloudinary.com/dxrbrkfvv/image/upload/v1592307492/react-original_gjlpfv.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <span className="text-uppercase ms-2 fw-bold mt-1 d-inline-block">Gradient</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/explore" className="btn btn-warning fw-bold me-2 text-light">
                Explore
              </Link>
              <Link to="/dashboard" className="btn btn-warning fw-bold text-light">
              Dashboard
              </Link>
              <Link to="/login" className="btn btn-warning fw-bold text-light">
              Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
