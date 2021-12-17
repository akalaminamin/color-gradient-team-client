import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Avatar from "react-avatar";
const NavBar = () => {
  const { currentUser, logOut } = useAuth();
  return (
    <>
      <Navbar bg="light shadow-sm" expand="md">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://res.cloudinary.com/dxrbrkfvv/image/upload/v1592307492/react-original_gjlpfv.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <span className="text-uppercase ms-2 fw-bold mt-1 d-inline-block">
              Gradient
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="/explore"
                className="btn btn-warning fw-bold me-2 text-light mb-2 mb-md-0"
              >
                Explore
              </Link>
              {currentUser ? (
                <>
                  <Link
                    to="/add_gradient"
                    className="btn btn-warning fw-bold mb-2 mb-md-0 me-2 text-light"
                  >
                    Add Gradient
                  </Link>
                  <Link
                    to="/dashboard"
                    className="btn btn-warning fw-bold text-light me-2 mb-2 mb-md-0"
                  >
                    Dashboard
                  </Link>
                  <>
                    <Button
                      variant="warning"
                      className="text-light fw-bold me-2 mb-2 mb-md-0"
                      onClick={logOut}
                    >
                      Log out
                    </Button>
                    <Avatar
                      name={currentUser.displayName}
                      color="blue"
                      size="40"
                      round={true}
                      className="d-none d-sm-block"
                    />
                  </>
                </>
              ) : (
                <Link
                  to="/login"
                  className="btn btn-warning fw-bold text-light mb-2 mb-md-0"
                >
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
