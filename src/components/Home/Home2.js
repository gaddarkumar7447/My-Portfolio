import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/gaddar.png.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a versatile developer with a passion for building end-to-end solutions.
              <br />
              <br />I started my journey mastering
              <i>
                <b className="purple"> Java </b>
              </i>
              and
              <i>
                <b className="purple"> Android Development</b>
              </i>
              , creating intuitive mobile experiences.
              <br />
              <br />
              Expanding my horizons, I delved into backend engineering with
              <i>
                <b className="purple"> Python </b>
              </i>
              , leveraging powerful frameworks like
              <i>
                <b className="purple"> Django and FastAPI </b>
              </i>
              to build scalable APIs and microservices.
              <br />
              <br />
              Currently, I am deeply invested in the world of
              <i>
                <b className="purple"> Generative AI </b>
              </i>
              and
              <i>
                <b className="purple"> Large Language Models (LLMs)</b>
              </i>
              , exploring how to integrate intelligent agents into modern web and mobile applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
