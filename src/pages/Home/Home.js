import React from "react";
import VectorImage from "../../assets/images/vector.svg";
import { Link } from "react-router-dom";

import "./Home.scss";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <Container>
    <NavBar  home={true}/>
      <Row className="justify-content-md-center">
       
          <div className="Home">
             <Col>
            <div className="Home__ContentContainer">
              <h1>
                A digital <span>resume</span> platform
              </h1>
              <h2>Craft a killer tech resume and cover letter</h2>
              <Link className="btn btn-danger" to="/create">
                Create resume
              </Link>
            </div></Col>
            <Col>
            <img
              className="Home__Vector-img"
              md={4}
              src={VectorImage}
              alt="logo"
            ></img></Col>
          </div>

      </Row>
      <Footer />
    </Container>
  );
}

export default Home;
