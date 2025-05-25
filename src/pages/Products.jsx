import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { Card, Spinner, Row, Col, Container, Button } from 'react-bootstrap';
import { BsCartPlus } from 'react-icons/bs';

const Products = () => {
    const { store, addToCart } = useContext(StoreContext);

    if (store.length === 0) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <Container className="mt-4 flex-fill">
            <Row xs={1} md={3} className="g-4">
                {store.map((item) => (
                    <Col key={item.id}>
                        <Card>
                            <Card.Img variant="top" src={item.images[0]} style={{ height: '200px', objectFit: 'cover' }} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.description.substring(0, 80)}...</Card.Text>
                                <Card.Text><strong>${item.price}</strong></Card.Text>
                                <Button variant="primary" className="w-100" onClick={() => addToCart(item)}>
                                    <BsCartPlus className="me-2" />
                                    Añadir al carrito
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;