import React from "react";
import CustomButton from "../../components/Button/Button";
import VectorImage from "../../assets/images/vector.svg";
import { Link } from 'react-router-dom';

import "./Home.scss";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <Container fluid>
      <Row classname="justify-content-md-center">
        <Col>
          <div className="home-container">
            <img
              className="vector-img"
              md={4}
              src={VectorImage}
              alt="vector image"
            ></img>
            <h1>
              A digital <span>resume</span> platform
            </h1>
            <h2>Craft a killer tech resume and cover letter</h2>
            <Link className="btn btn-danger" to="/create">Create a resume</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
