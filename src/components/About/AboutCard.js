import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Gaddar Kumar Chaudhary</span>, a <span className="purple">Computer Science graduate</span> from <span className="purple">Siliguri Institute of Technology</span>.
            <br />
            <br />
            I am an <span className="purple">Software Developer</span> at <span className="purple">Devkraft Technologies</span> with <span className="purple">2 years of experience</span> in <span className="purple">Android</span> and <span className="purple">Java backend development</span>.
            <br />
            <br />
            I am proficient in <span className="purple">Spring Boot</span> and <span className="purple">Python frameworks (Django, FastAPI, Flask)</span>, allowing me to seamlessly switch between mobile and backend tasks.
            <br />
            <br />
            I also have a deep interest in <span className="purple">Generative AI</span> and have hands-on experience building intelligent applications using <span className="purple">LLMs</span>.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Scrolling instagram reels
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling in sleep
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life would be so much easier if I had the source code.😎"{" "}
          </p>
          <footer className="blockquote-footer">Gaddar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
