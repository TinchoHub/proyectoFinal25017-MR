
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className="mt-5 flex-fill">
            <Row className="mb-5">
                <Col md={12} className="text-center">
                    <h2>Sobre Nosotros</h2>
                    <p className="lead">
                        En <strong>Mi Tienda</strong> nos apasiona ofrecer productos de calidad con atención personalizada.
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
        </Container>
    );
};

export default Contact;