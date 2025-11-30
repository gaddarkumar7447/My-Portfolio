import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAndroidstudio,
  SiIntellijidea,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiGithub,
  SiPycharm,
  SiMongodb,
  SiNeovim,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio fontSize={"24px"} />
        <div className="tech-icons-text">Android Studio</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea fontSize={"24px"} />
        <div className="tech-icons-text">IntelliJ IDEA</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm fontSize={"24px"} />
        <div className="tech-icons-text">PyCharm</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode fontSize={"24px"} />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNeovim fontSize={"24px"} />
        <div className="tech-icons-text">Neovim</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman fontSize={"24px"} />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit fontSize={"24px"} />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbDatabase fontSize={"24px"} />
        <div className="tech-icons-text">DBeaver</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb fontSize={"24px"} />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub fontSize={"24px"} />
        <div className="tech-icons-text">GitHub</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
