import React, { useEffect, useRef } from "react";
import VectorImage from "../../assets/images/vector.svg";
import { Link } from "react-router-dom";

import {TweenMax, Power3} from 'gsap';

import "./Home.scss";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";

function Home() {

  let heroImage = useRef(null);
  let mainHeading = useRef(null);
  let subHeading = useRef(null);
  let button = useRef(null);

  useEffect(() => {
    TweenMax.to(
      heroImage,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
      }
    )
   TweenMax.to(
      mainHeading,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: .2,
      }
    )
   TweenMax.to(
      subHeading,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: .4,
      }
    )
   TweenMax.to(
      button,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: .6,
      }
    )

  }, [])

  return (
    <Container>
    <NavBar  home={true}/>
      <Row className="justify-content-md-center">
       
          <div className="Home">
             <Col>
            <div className="Home__ContentContainer">
              <h1 className="Home__Heading" ref={el => {mainHeading = el}}> 
                A digital <span>resume</span> platform
              </h1>
              <h2 className="Home__SubHeading" ref={el => {subHeading = el}}>Craft a killer tech resume and cover letter</h2>
              <Link className="btn btn-danger Home__Button" to="/create" ref={el => {button = el}}>
                Create resume
              </Link>
            </div></Col>
            <Col>
            <img
              ref={el => {heroImage = el}}
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
