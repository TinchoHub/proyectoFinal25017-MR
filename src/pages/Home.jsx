
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container className="mt-5 text-center flex-fill">
            <Row className="align-items-center">
                <Col md={6} className="mb-4 mb-md-0">
                    <h1 className="display-4">Bienvenido a Mi Tienda</h1>
                    <p className="lead">
                        Descubrí una selección única de productos de calidad. <br />
                        Ofrecemos moda, tecnología y mucho más, con envíos a todo el país.
                    </p>
                    <Link to="/Productos">
                        <Button variant="primary" size="lg">Explorar Productos</Button>
                    </Link>
                </Col>
                <Col md={6}>
                    <img
                        src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
                        alt="Presentación"
                        className="img-fluid rounded shadow"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;