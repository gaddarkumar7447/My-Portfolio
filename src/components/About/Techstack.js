import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiKotlin, SiAndroid, SiLinux, SiFastapi, SiDjango, SiOpenai, SiSpring } from "react-icons/si";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Node from "../../Assets/TechIcons/Node.svg";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="java" />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin fontSize={"24px"} />
        <div className="tech-icons-text">Kotlin</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAndroid fontSize={"24px"} />
        <div className="tech-icons-text">Android</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSpring fontSize={"24px"} />
        <div className="tech-icons-text">Spring Boot</div>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <SiDjango fontSize={"24px"} />
        <div className="tech-icons-text">Django</div>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi fontSize={"24px"} />
        <div className="tech-icons-text">FastAPI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="NodeJs" />
        <div className="tech-icons-text">NodeJs</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai fontSize={"24px"} />
        <div className="tech-icons-text">GenAI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLinux fontSize={"24px"} />
        <div className="tech-icons-text">Linux</div>
      </Col>

    </Row>
  );
}

export default Techstack;
