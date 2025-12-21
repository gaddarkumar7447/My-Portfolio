import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

const SkillsDisplay = ({ skills, initialCount = 3 }) => {
    const [showMore, setShowMore] = useState(false);

    const displayedSkills = showMore ? skills : skills.slice(0, initialCount);
    const remainingCount = skills.length - initialCount;

    return (
        <span className="skills-display">
            {displayedSkills.join(", ")}
            {!showMore && remainingCount > 0 && (
                <>
                    {", and "}
                    <span className="more-skills" onClick={() => setShowMore(true)}>
                        +{remainingCount} skills
                    </span>
                </>
            )}
            {showMore && (
                <>
                    {" "}
                    <span className="more-skills" onClick={() => setShowMore(false)}>
                        Show Less
                    </span>
                </>
            )}
        </span>
    );
};

function Experience() {
    const devkraftSkills = [
        "Java", "Kotlin", "Python",
        "Android Development", "Spring Boot", "FastAPI", "Django Rest Framework", "GenAI",
        "PostgreSQL", "MongoDB", "Microservices",
        "Hibernate", "JIRA", "Postman", "Spring Framework", "Data Structures"
    ];

    const glassfrogSdeSkills = [
        "Spring Framework", "Core Java", "Android Development", "Kotlin",
        "MVVM Architecture", "Retrofit", "Room Database", "Git", "XML", "Jetpack Compose"
    ];

    const glassfrogInternSkills = [
        "REST APIs", "Core Java", "Android SDK", "Kotlin", "XML", "Firebase",
        "Material Design", "Git", "JIRA", "Agile Methodologies", "Unit Testing",
        "SQLite", "Gradle", "Android Studio", "JSON Parsing", "OOP Concepts",
        "Data Structures", "Algorithms"
    ];

    return (
        <Container fluid className="experience-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Experience</strong>
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                    <Col md={12} className="experience-card">
                        <div className="experience-item">
                            <div className="experience-header">
                                <h3 className="company-name">Devkraft Technologies</h3>
                                <h5 className="role-title">Associate Software Engineer</h5>
                                <p className="duration">Oct 2024 - Present</p>
                            </div>
                            <div className="experience-details">
                                <p className="location">Gurugram, Haryana, India · On-site</p>
                                <p className="skills">
                                    <strong className="purple">Skills: </strong>
                                    <SkillsDisplay skills={devkraftSkills} initialCount={3} />
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col md={12} className="experience-card">
                        <div className="experience-item">
                            <div className="experience-header">
                                <h3 className="company-name">GlassFrog Technologies</h3>
                                <p className="total-duration">1 yr 4 mos</p>
                            </div>

                            <div className="sub-experience">
                                <div className="timeline-dot"></div>
                                <div className="sub-experience-content">
                                    <h5 className="role-title">SDE (Android)</h5>
                                    <p className="type">Full-time</p>
                                    <p className="duration">Feb 2024 - Oct 2024 · 9 mos</p>
                                    <p className="location">Remote</p>
                                    <p className="skills">
                                        <strong className="purple">Skills: </strong>
                                        <SkillsDisplay skills={glassfrogSdeSkills} initialCount={3} />
                                    </p>
                                </div>
                            </div>

                            <div className="sub-experience">
                                <div className="timeline-dot"></div>
                                <div className="sub-experience-content">
                                    <h5 className="role-title">Android Developer</h5>
                                    <p className="type">Internship</p>
                                    <p className="duration">Jul 2023 - Feb 2024 · 8 mos</p>
                                    <p className="location">Dehradun, Uttarakhand, India · Hybrid</p>
                                    <p className="skills">
                                        <strong className="purple">Skills: </strong>
                                        <SkillsDisplay skills={glassfrogInternSkills} initialCount={3} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Experience;