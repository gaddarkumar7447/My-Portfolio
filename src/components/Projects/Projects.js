import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/w.jpg";
import emotion from "../../Assets/Projects/work6.jpg";
import editor from "../../Assets/Projects/qr.jpg";
import chatify from "../../Assets/Projects/noteapp.jpg";
import suicide from "../../Assets/Projects/work5.jpg";
import bitsOfCode from "../../Assets/Projects/newsapp.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Note App"
              description="Users can login with their separate accounts and can rely on the security of storing their personal notes without others getting it."
              ghLink="https://drive.google.com/file/d/1YVUQ7W8a4tjRCCPqAbOl1RUYcFxfVTwC/view?usp=share_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="News App"
              description="This Android App shows News in a RecyclerView fetching data from open-sourced APIs"
              ghLink="https://drive.google.com/file/d/1pZkrkOaLN8jWvhP2WGUybi1ecXqan_bl/view?usp=share_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="QR-App"
              description="Create QR Codes and Scan QR Codes"
              ghLink="https://drive.google.com/file/d/1mc6q9sXZVPp8Sw411DCEH9HrW6GLQR0M/view?usp=share_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Weather App"
              description="This application to fetch weather using city Name."
              ghLink="https://drive.google.com/file/d/108a89-WmqIribmAwsRTT_gu2cIVQXT4F/view?usp=share_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Chat App"
              description="Developed the application using Kotlin in Android Studio where the user can Authenticate their own email and can do private chat with anyone from the list of registered users."
              ghLink="https://drive.google.com/file/d/1_uHOJZn9bZkUys96RsMeMsMk9XIzQLnR/view?usp=share_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Quotes app"
              description="You can read the most popular Quotes and auther name"
              ghLink="https://drive.google.com/file/d/1AQM8zA2ROaG1ysWXccLGunFSikU4lKUd/view?usp=share_link"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
