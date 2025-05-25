import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import {
    Modal,
    Button,
    ListGroup,
    Badge
} from 'react-bootstrap';

const CartModal = ({ show, handleClose }) => {
    const { cart, removeFromCart } = useContext(StoreContext);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>🛒 Carrito de compras</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cart.length === 0 ? (
                    <p className="text-center">No hay productos en el carrito.</p>
                ) : (
                    <>
                        <ListGroup variant="flush">
                            {cart.map((item) => (
                                <ListGroup.Item key={item.id}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <strong>{item.title}</strong> <br />
                                            <small>{item.quantity} x ${item.price}</small>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <Badge bg="secondary">
                                                ${item.quantity * item.price}
                                            </Badge>
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Eliminar
                                            </Button>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        <hr />
                        <h5 className="text-end">Total: ${total.toFixed(2)}</h5>
                    </>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                {cart.length > 0 && (
                    <Button variant="success">
                        Finalizar compra
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default CartModal;