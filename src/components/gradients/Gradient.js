import React from "react";
import { Col, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  downloadGradient,
  setGradient,
} from "../../redux/actions/gradientActions";
const Gradient = ({ gradient }) => {
  const { name, colors, downloads } = gradient;
  const dispatch = useDispatch();
  return (
    <Col xs={12} sm={12} md={6} lg={4}>
      <div className="shadow p-4 bg-light rounded">
        <div className="d-flex justify-content-between">
          <h5>{name}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <Badge bg="dark me-2 py-1 copy_badge">
              <CopyToClipboard
                text={`background-image: linear-gradient(${colors.direction}, ${colors.start}, ${colors.end})`}
              >
                <span className="material-icons">content_copy</span>
              </CopyToClipboard>
            </Badge>
            <button
              className="btn btn-warning text-light"
              onClick={() => dispatch(downloadGradient(name))}
            >
              Download
            </button>
          </div>
        </div>
        <div
          onClick={() => dispatch(setGradient(gradient))}
          className="gradient rounded mt-4"
          style={{
            backgroundImage: `linear-gradient(${colors.direction}, ${colors.start}, ${colors.end})`,
          }}
        ></div>
        <div className="mt-2 d-flex justify-content-between">
          <div>
            <Badge bg="dark me-2 py-2">{colors.start}</Badge>
            <Badge bg="dark py-2">{colors.end}</Badge>
          </div>
          <div>
            <Badge bg="dark py-2" className="fw-bold">
              {downloads} Downloads
            </Badge>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Gradient;
