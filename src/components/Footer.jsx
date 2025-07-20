import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3 w-100 m-0 p-0" style={{ position: 'relative', left: 0, right: 0 }}>
            <Container fluid className="p-0 m-0 w-100">
                <Row className="m-0 p-0 w-100">
                    <Col className="m-0 p-0 w-100">
                        <p className="m-0">© Todos los derechos reservados</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;