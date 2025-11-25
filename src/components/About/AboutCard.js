import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Gaddar Kumar Chaudhary</span>{" "}
            from <span className="purple"> India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Android Developer</span>.
            <br />I have completed my graduation in{" "}
            <span className="purple">Computer Science</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Gaddar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
