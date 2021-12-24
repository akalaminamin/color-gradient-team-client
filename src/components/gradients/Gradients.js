import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getGradient } from "../../redux/actions/gradientActions";
import Loader from "../dashboard/Loader";
import FullGradient from "./FullGradient";
import Gradient from "./Gradient";

const Gradients = () => {
  const dispatch = useDispatch();
  const gradients = useSelector((state) => state.gradients.gradients);
  const gradient = useSelector((state) => state.gradients.gradient);

  useEffect(() => {
    dispatch(getGradient());
  }, [dispatch]);

  return (
    <>
      {gradient && <FullGradient />}
      <Container>
        <Row className="g-3">
          {gradients.map((gradient) => (
            <Gradient gradient={gradient} key={gradient._id} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Gradients;
