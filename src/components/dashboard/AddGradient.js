import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";

import {
  getGradient,
  createGradient,
  deleteGradient,
  updateGradient,
} from "../../redux/actions/gradientActions";
import Styled from "styled-components";
import Loader from "./Loader";
const GradientChips = Styled.div`
    width:100%,;
    height:150px;
    border-radius:5px;
    background-image:linear-gradient(
        ${(props) => props.direction}, 
        ${(props) => props.start}, 
        ${(props) => props.end});
    & div{
        display:none
    }
    &:hover div{
        display:block
    }
`;
const GradientDirection = Styled.div`
    width:100%;
    height:50px;
    cursor:pointer;
    background-image:linear-gradient(
        ${(props) => props.direction}, 
        ${(props) => props.firstColor}, 
        ${(props) => props.lastColor});
`;
const AddGradient = () => {
  const dispatch = useDispatch();
  const gradients = useSelector((state) => state.gradients.gradients);
  const [name, setName] = useState("");
  const [firstColor, setFirstColor] = useState("");
  const [lastColor, setLastColor] = useState("");
  const [directions, setDirections] = useState("");
  const [isDelete, setDelete] = useState(false);
  const [currentGradient, setCurrentGradient] = useState(null);
  const [positions, setPositions] = useState([
    "to top",
    "to bottom",
    "to left",
    "to right",
    "to top right",
    "to top left",
    "to bottom left",
    "to bottom right",
  ]);
  useEffect(() => {
    dispatch(getGradient());
  }, [isDelete]);

  // handle delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Delete your gradient.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deleted!",
          "Your Gradient has been deleted.",
          "success",
          isDelete
        );
        setDelete(!isDelete);
        dispatch(deleteGradient(id));
      }
    });
  };

  //   handle create gradient
  const handleSubmit = (e) => {
    e.preventDefault();
    const gradient = {
      name: name,
      colors: {
        start: firstColor,
        end: lastColor,
        direction: directions,
      },
    };
    if (currentGradient === null) {
      if (!name || !firstColor || !lastColor || !positions) {
        Swal.fire({
          icon: "warning",
          title: "Please field the input box",
        });
        return;
      }
      dispatch(createGradient(gradient));
      setName("");
      setFirstColor("");
      setLastColor("");
      setDirections("");
    } else {
      dispatch(updateGradient(Object.assign(currentGradient, gradient)));
    }
    setCurrentGradient(null);
  };

  //   handle cancle or edit
  useEffect(() => {
    if (currentGradient !== null) {
      setName(currentGradient.name);
      setFirstColor(currentGradient.colors.start);
      setLastColor(currentGradient.colors.end);
    } else {
      setName("");
      setFirstColor("");
      setDirections("");
      setLastColor("");
    }
  }, [currentGradient]);
  return (
    <>
      <Container>
        <Row className="mt-3">
          <Col xs={12} md={6} lg={8}>
            {gradients ? (
              <Row className="g-3">
                {gradients.map((gradient) => (
                  <Col xs={12} md={6} lg={4} key={gradient._id}>
                    <GradientChips
                      className="d-flex align-items-center justify-content-center"
                      direction={gradient.colors.direction}
                      start={gradient.colors.start}
                      end={gradient.colors.end}
                    >
                      <div className="btns">
                        <Button
                          variant="light me-2"
                          onClick={() => setCurrentGradient(gradient)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="light"
                          onClick={() => handleDelete(gradient._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </GradientChips>
                  </Col>
                ))}
              </Row>
            ) : (
              <Loader />
            )}
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="bg-white shadow p-4">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2">
                  <Form.Label className="fw-bold">Gradient Name</Form.Label>
                  <Form.Control
                    placeholder="Text Input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label className="fw-bold">First Color</Form.Label>
                  <Form.Control
                    placeholder="Ex #000000"
                    value={firstColor}
                    onChange={(e) => setFirstColor(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label className="fw-bold">Last Color</Form.Label>
                  <Form.Control
                    placeholder="Ex #434343"
                    value={lastColor}
                    onChange={(e) => setLastColor(e.target.value)}
                  />
                </Form.Group>
                <Row className="mb-2 g-3">
                  {firstColor &&
                    lastColor &&
                    positions.map((position, index) => (
                      <Col sm={6} key={index}>
                        <GradientDirection
                          className="d-flex align-items-center justify-content-center text-light rounded"
                          direction={position}
                          firstColor={firstColor}
                          lastColor={lastColor}
                          onClick={() => setDirections(position)}
                        >
                          {position}
                        </GradientDirection>
                      </Col>
                    ))}
                </Row>
                {!currentGradient ? (
                  <Button variant="dark" className="w-100 mt-2" type="submit">
                    Create a Gradient
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="warning"
                      className="w-100 mt-2 text-light"
                      type="submit"
                    >
                      Update Gradient
                    </Button>
                    <Button
                      variant="danger"
                      className="w-100 mt-2"
                      onClick={() => setCurrentGradient(null)}
                      type="submit"
                    >
                      Cancle
                    </Button>
                  </>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AddGradient;
