import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-light py-4">
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>About Us</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Col>
                    <Col md={3}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>Email: info@example.com</li>
                            <li>Phone: +1 234 567 890</li>
                            <li>Address: 123 Street, City, Country</li>
                        </ul>
                    </Col>
                </Row>
                <hr className="bg-light" />
                <Row>
                    <Col>
                        <p className="text-center mb-0">&copy; {new Date().getFullYear()} Your Portfolio</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
