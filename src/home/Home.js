import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="content-card">
                <h1 className="greeting">Hi, Nice to see you here</h1>
                <p className="intro">My name is</p>
                <h2 className="name">Sunil Poudel</h2>
                <h3 className="title">Senior Software Engineer</h3>
                <p className="skills-label">I can also do</p>
                <p className="skills">Frontend Development with React</p>
                <a
                    href="https://www.linkedin.com/in/sunilpoudel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                >
                    Connect with me on LinkedIn
                </a>
            </div>

            <div className="cards-container">
                <div className="about-card">
                    <h3 className="card-title">About Me</h3>
                    <p className="card-content">
                        Experienced Java Backend Developer and Technical Lead with over 6 years of experience in the
                        FinTech sector. Proficient in building scalable enterprise solutions such as Payment Aggregator
                        Systems (similar to PayPal Bill Pay), Agency Banking platforms, and SMS VAS Servers (comparable
                        to Twilio Messaging). Specialized in data-intensive applications using Java, Spring Boot,
                        Hibernate, and REST APIs, with hands-on expertise in cloud deployments and Agile methodologies.
                        Additional experience with front-end technologies like Angular and DevOps tools such as Docker,
                        Kubernetes, and Jenkins. Strong understanding of design patterns, object-oriented programming,
                        concurrency, and system architecture to develop efficient and maintainable solutions. Effective
                        communicator, collaborating with cross-functional teams across various company verticals.
                    </p>
                </div>
                <div className="skills-card">
                    <h3 className="card-title">Technical Skills</h3>
                    <ul className="skills-list">
                        <li><strong>Programming Languages:</strong> Java, JavaScript, SQL, TypeScript, HTML, CSS</li>
                        <li><strong>Frameworks:</strong> Spring, Spring MVC, Spring Boot, Spring Cloud, Java EE,
                            Hibernate, Junit, Angular (basic), EJB, React (Basic)
                        </li>
                        <li><strong>Developer Tools:</strong> Git, Docker, Maven, IntelliJ, Postman, Jira, Linux</li>
                        <li><strong>Web Services:</strong> RESTful Web Services (REST), SOAP, JSON, XML</li>
                        <li><strong>Web & Application Servers:</strong> Apache, Tomcat, GlassFish, WildFly</li>
                        <li><strong>SDLC & Agile Methodologies:</strong> Agile, Scrum, Kanban</li>
                        <li><strong>Cloud and DevOps:</strong> AWS (S3, EC2, RDS, Lambda, IAM, SNS, SQS, CloudWatch),
                            Jenkins, Docker, Kubernetes, Rancher, Harbor, Cloud Services
                        </li>
                        <li><strong>Data Processing & Machine Learning:</strong> Kafka, Apache Spark, Machine Learning
                        </li>
                        <li><strong>Backend Development:</strong> Microservices, Distributed System, Concurrency,
                            Multithreading
                        </li>
                        <li><strong>Database Technologies:</strong> RDBMS, NoSQL, Redis, Elasticsearch, MySQL,
                            PostgreSQL
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Home;