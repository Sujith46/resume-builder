import React from "react";
import NavBar from '../../components/Navbar/NavBar'
// import "./Home.scss";
import { Container, Row, Col } from "react-bootstrap";

function CreateResume() {
  return (
    <Container fluid>
      <NavBar title="Create your resume"/>
      <Row classname="justify-content-md-center">
        <Col>
          <div className="home-container">
            
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateResume;