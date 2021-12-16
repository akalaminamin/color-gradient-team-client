import React, { useEffect } from "react";
import { Container, Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getGradient } from "../../redux/actions/gradientActions";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const dispatch = useDispatch();
  const gradients = useSelector((state) => state.gradients.gradients);
  useEffect(() => {
    dispatch(getGradient());
  }, [dispatch]);
  console.log(gradients.map((gradient) => gradient.downloads));
  return (
    <>
      <Container className="py-5">
        <Row className="shadow">
          <Col sm={12} md={4} className="py-4 px-3 bg-light rounded-sm">
            <Link to="/add_gradient" className="text-decoration-none">
              <div className=" d-flex justify-content-around align-items-center">
                <div>
                  <span class="material-icons dashboard-icon icon">
                    palette
                  </span>
                </div>
                <div className="text-center">
                  <h2>{gradients.length}</h2>
                  <h4 className="text-secondary">Gradients</h4>
                </div>
              </div>
            </Link>
          </Col>
          <Col
            sm={12}
            md={4}
            className="d-flex  justify-content-around align-items-center bg-light rounded-sm py-4 px-3"
          >
            <div className="">
              <span class="material-icons dashboard-icon icon">
                cloud_download
              </span>
            </div>
            <div className="text-center">
              <h2>
                {gradients
                  .map((gradient) => gradient.downloads)
                  .reduce((num, total) => num + total, 0)}
              </h2>
              <h4 className="text-secondary">Downloads</h4>
            </div>
          </Col>
          <Col
            sm={12}
            md={4}
            className="d-flex justify-content-around align-items-center bg-light rounded-sm py-4 px-3"
          >
            <div className="">
              <span class="material-icons dashboard-icon icon">face</span>
            </div>
            <div className="text-center">
              <h2>70k</h2>
              <h4 className="text-secondary">Visitors</h4>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm={12} md={6} className="shadow">
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Downloads</th>
                </tr>
              </thead>
              <tbody>
                {gradients.map(({ name, downloads }) => (
                  <tr>
                    <td>{name}</td>
                    <td>{downloads}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
