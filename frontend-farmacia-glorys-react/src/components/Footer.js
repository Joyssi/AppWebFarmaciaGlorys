import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import '../styles/App.css'; 

const Footer = () => {
    return (
        <footer className="footer" responsive>
        <Container>
            <Row>
            <Col md={4} className="social-icon">
                <a href="https://www.facebook.com/profile.php?id=100067549332444&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
                </a>
            </Col>
            <Col md={4} className="social-icon">
                <a href="https://api.whatsapp.com/send?phone=+50584367816" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
                </a>
            </Col>
            <Col md={4} className="social-icon">
                <a href="https://www.instagram.com/farmaciaglorys/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
                </a>
            </Col>
            </Row>
        </Container>
        </footer>
    );
};

export default Footer;