import { StoreContext } from '../context/StoreContext';
import { useContext } from "react";
import { Carousel, Container, Spinner } from "react-bootstrap";

function CarruselBootstrap() {
    const { store } = useContext(StoreContext);

    if (!store || store.length === 0) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </div>
        );
    }

    const primerosTres = store.slice(0, 3);
    if (primerosTres.length === 0) return <p>No hay productos para mostrar.</p>;

    return (
        <Container className="my-4 d-flex justify-content-center">
            <div className="carousel-fixed-width">
                <Carousel className="custom-carousel-border">
                    {primerosTres.map((producto) => (
                        <Carousel.Item key={producto.id}>
                            <img
                                className="d-block w-100"
                                src={producto.image || producto.imagen}
                                alt={producto.name}
                                style={{ height: "250px", objectFit: "contain", background: '#fff' }}
                            />
                            <Carousel.Caption>
                                <h3 style={{ color: '#fff', textShadow: '2px 2px 8px #000, 0 0 10px #333' }}>{producto.name}</h3>
                                <p style={{ color: '#fff', textShadow: '2px 2px 8px #000, 0 0 10px #333' }}>{producto.title}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </Container>
    );
}

export default CarruselBootstrap;