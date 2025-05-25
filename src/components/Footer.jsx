import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <Container>
                <Row>
                    <Col>
                        <p className="m-0">Todos los derechos reservados</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;