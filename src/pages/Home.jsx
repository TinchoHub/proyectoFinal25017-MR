
import { Container, Row, Col, Button } from 'react-bootstrap';
import CarruselBootstrap from '../components/CarruselBootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../styles/Home.css';
import fondoHome from '../assets/FondoHome.jpg';

const Home = () => {
    return (
        <div className="home-full-bg">
            <div
                className="home-bg-img position-relative d-flex flex-column align-items-center justify-content-center text-center"
                style={{ backgroundImage: `url(${fondoHome})` }}
            >
                <div className="home-blur-overlay" />
                <Helmet>
                    <title>Home | Mi Tienda</title>
                    <meta name="description" content="Bienvenidos a StarShop, tu tienda de confianza." />
                </Helmet>
                <Container fluid>
                    <Row className="mb-4">
                        <Col>
                            <h1 className="display-4 home-text-shadow">Bienvenido a StarShop</h1>
                            <p className="lead home-text-shadow">
                                Descubrí una selección única de productos de calidad. <br />
                                Ofrecemos moda, tecnología y mucho más, con envíos a todo el país.
                            </p>
                            <Link to="/Productos">
                                <Button variant="primary" size="lg">Explorar Productos</Button>
                            </Link>
                        </Col>
                    </Row>    
                    <Row className="mb-4">
                        <Col>
                            <CarruselBootstrap />
                            <h1>Nuevos Ingresos</h1>
                        </Col>
                    </Row>

                </Container>

            </div>
        </div>
    );
};

export default Home;