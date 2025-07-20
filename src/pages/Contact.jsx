

import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Helmet } from "react-helmet-async";
import ContactImg from "../assets/Contact.JPG";
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-full-bg">
            <Helmet>
                <title>Contacto | Mi Tienda</title>
                <meta name="description" content="Explora nuestra variedad de productos." />
            </Helmet>
            <div
                className="contact-bg-img position-relative d-flex align-items-center justify-content-center"
                style={{ backgroundImage: `url(${ContactImg})` }}
            >
                <div className="contact-overlay" />
                <div className="contact-content w-100">
                    <Row className="mb-5">
                        <Col md={12} className="text-center">
                            <h2>Contáctanos</h2>
                            <p className="lead">
                                En <strong>StarShop</strong> nos apasiona ofrecer productos de calidad con atención personalizada.
                                Somos un equipo comprometido con brindarte la mejor experiencia de compra, desde la selección hasta la entrega.
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <Card className="p-4 shadow-sm">
                                <h4 className="mb-3">Contáctanos</h4>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" placeholder="Tu nombre" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="tucorreo@ejemplo.com" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formMessage">
                                        <Form.Label>Mensaje</Form.Label>
                                        <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje aquí..." required />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Enviar mensaje
                                    </Button>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Contact;