import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/w.jpg";
import editor from "../../Assets/Projects/qr.jpg";
import chatify from "../../Assets/Projects/noteapp.jpg";
import suicide from "../../Assets/Projects/work5.jpg";
import bitsOfCode from "../../Assets/Projects/newsapp.jpg";
import dekoder from "../../Assets/Projects/dekoder.webp";
import beezap from "../../Assets/Projects/beezap.webp";
import gist from "../../Assets/Projects/gist.webp";

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      imgPath: dekoder,
      title: "DeKoder",
      description: "An AI-driven platform for election analysis and forecasting. Features include 'Make Your Own Forecast', AI opinion sliders, and multi-language support. Provides deep insights into Indian and global elections, along with environmental coverage.",
      demoLink: "https://play.google.com/store/apps/details?id=com.ikroya.dekoder"
    },
    {
      imgPath: gist,
      title: "GIST",
      description: "Advanced LLM and RAG-based app similar to ChatGPT. Uses PGVector for efficient retrieval. Upload documents like DOC, PPT, or TXT and ask context-aware questions to get precise, data-driven answers instantly.",
    },

    {
      imgPath: beezap,
      title: "Beezap",
      description: "A comprehensive doctor booking Android app. Users can book appointments, schedule in-hospital visits, and consult via high-quality video calls. Streamlines the healthcare experience by connecting patients with doctors efficiently.",
      demoLink: "https://play.google.com/store/apps/details?id=com.android.beezap"
    },

    {
      imgPath: chatify,
      title: "Note App",
      description: "A secure personal note-taking application. Users can create private accounts to store and manage their notes safely. Ensures data privacy and easy access to personal information across devices.",
      ghLink: "https://github.com/gaddarkumar7447/Note-App"
    },
    {
      imgPath: bitsOfCode,
      title: "News App",
      description: "A dynamic Android news application that fetches real-time headlines from open-source APIs. Displays news in a clean RecyclerView interface, allowing users to stay updated with the latest events globally.",
      ghLink: "https://github.com/gaddarkumar7447/News-App"
    },
    {
      imgPath: editor,
      title: "QR-App",
      description: "A versatile QR code tool for Android. Allows users to generate custom QR codes for various data types and scan existing codes instantly. Simple, efficient, and essential for daily utility.",
      ghLink: "https://github.com/gaddarkumar7447/QR-App"
    },
    {
      imgPath: leaf,
      title: "Weather App",
      description: "A user-friendly weather forecast application. Fetches real-time weather data by city name. Provides accurate temperature, humidity, and conditions, helping users plan their day with reliable meteorological information.",
      ghLink: "https://github.com/gaddarkumar7447/WeatherApp"
    },
    {
      imgPath: suicide,
      title: "Chat App",
      description: "A real-time chat application built with Kotlin. Features secure email authentication and private messaging. Users can connect and chat privately with registered users in a secure and responsive environment.",
      ghLink: "https://github.com/gaddarkumar7447/Chat-App"
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{ position: "relative", zIndex: 100 }}>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {visibleProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px", position: "relative", zIndex: 1 }}>
          <Button
            variant="primary"
            onClick={() => setShowAll(!showAll)}
            style={{ maxWidth: "150px" }}
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
