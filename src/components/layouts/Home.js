import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home d-flex align-items-center">
        <Container>
          <Row className="d-flex align-items-center justify-content-center h-100">
            <Col sm={12} md={6} className="text-center ">
              <img
                src="https://res.cloudinary.com/dxrbrkfvv/image/upload/v1592307492/react-original_gjlpfv.png"
                alt="logo"
                className="w-50"
              />
              <h1 className="fs-1 fw-bold my-3">React Gradient</h1>
              <h2 className="fs-4 fw-normal mb-2">
                explore all beautiful handcrafted gradients
              </h2>
              <Link to="/explore" className="btn btn-dark">
                Explore gradients
              </Link>
            </Col>
            <Col sm={12} md={6} className="shadow">
              <img
                className="w-100"
                src="https://res.cloudinary.com/dxrbrkfvv/image/upload/v1592380277/hero_anim_ca2hdg.gif"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
