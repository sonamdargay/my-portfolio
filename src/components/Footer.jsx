import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Footer component
const Footer = () => {
    return (
        <footer className="bg-light py-4">
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>Bio</h5>
                        <p>Full-stack developer with experience in Spring MVC & Spring Boot frameworks for the backend and Angular for
                            the front end. Demonstrated project management skills in enhancing the interoperable payment system of Bhutan
                            using ISO 8583 messaging standards.</p>
                    </Col>
                    <Col md={3}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="/src/components/Contact">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Contact Me</h5>
                        <ul className="list-unstyled">
                            <li>Email: sonamdargay167@gmail.com</li>
                            <li>Phone: +61 433 500 752</li>
                            <li>Address: QUT, Queensland AUSTRALIA</li>
                        </ul>
                    </Col>
                </Row>
                <hr className="bg-light" />
                <Row>
                    <Col>
                        <p className="text-center mb-0">&copy; {new Date().getFullYear()} Sonam Dargay</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
