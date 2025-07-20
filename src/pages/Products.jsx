import '../styles/Products.css';
import { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import { Card, Spinner, Row, Col, Container, Button } from 'react-bootstrap';
import { BsCartPlus } from 'react-icons/bs';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fondoHome from '../assets/FondoHome.jpg';

const Products = () => {
    const { store, addToCart } = useContext(StoreContext);
    const productosPorPagina = 6; // Cantidad de productos a mostrar por página
    const [paginaActual, setPaginaActual] = useState(1);
    const indiceUltimoProducto = paginaActual * productosPorPagina;
    const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
    const productosActuales = store.slice(indicePrimerProducto, indiceUltimoProducto);
    const totalPaginas = Math.ceil(store.length / productosPorPagina);
    const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

    if (store.length === 0) {
        return (
            <div className="products-full-bg">
                <div className="products-bg-img d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${fondoHome})` }}>
                    <div className="d-flex justify-content-center mt-5 w-100">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </Spinner>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="products-full-bg">
            <div className="products-bg-img d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${fondoHome})` }}>
                <Container className="mt-5 flex-fill">
                    <Row xs={1} md={3} className="g-4">
                        {productosActuales.map((item) => (
                            <Col key={item.id}>
                                <Card>
                                    <Card.Img variant="top" src={item.image} style={{ height: '200px', objectFit: 'contain' }} />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>{item.description.substring(0, 80)}...</Card.Text>
                                        <Card.Text><strong>${item.price}</strong></Card.Text>
                                        <Button variant="primary" className="w-100" onClick={() => {
                                            addToCart(item);
                                            toast.success("Producto agregado al carrito!");
                                        }}>
                                            <BsCartPlus className="me-2" />
                                            Añadir al carrito
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <div className="d-flex justify-content-center my-4">
                        {Array.from({ length: totalPaginas }, (_, index) => (
                            <button key={index + 1} className={`btn mx-1 ${paginaActual === index + 1 ? "btn-primary" : "btn-outline-primary"}`} onClick={() => cambiarPagina(index + 1)}>
                                {index + 1}
                            </button>
                        ))}
                    </div>
                    <ToastContainer autoClose={1000} />
                </Container>
            </div>
        </div>
    );
};

export default Products;