import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { BsCart, BsHouse } from 'react-icons/bs';
import { StoreContext } from '../context/StoreContext';
import CartModal from './CartModal';
const Navibar = () => {

  const isAuth = localStorage.getItem('auth') === 'true';
  const navigate = useNavigate();
  const { cart } = useContext(StoreContext);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [showCart, setShowCart] = useState(false);
  const handleShow = () => setShowCart(true);
  const handleClose = () => setShowCart(false);


  const CloseSession = () => {
    localStorage.removeItem('auth');
    navigate('/Login');
  };

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/"><BsHouse /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
            <Nav.Link as={Link} to="/" > Inicio </Nav.Link>
            <Nav.Link as={Link} to="/Productos" > Productos</Nav.Link>
            <Nav.Link as={Link} to="/Contacto" > Contacto </Nav.Link>
            <Nav.Link as={Link} to="/About" > Sobre Nosotros </Nav.Link>            
            {isAuth && (
              <>
                <Nav.Link as={Link} to="/Admin" > Admin </Nav.Link>
                <Nav.Link as={Link} to="/Perfil" > Perfil </Nav.Link>
              </>
            )}
          </Nav>
          <nav className="me-3">
            <Button onClick={handleShow}>  
              <BsCart className="me-1" />
              {cartCount > 0 && (
                <Badge bg="light" text="dark" className="ms-1">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </nav>
          <Nav className="d-flex">
            {!isAuth ? (
              <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            ) : (
              <Button variant="outline-dark" onClick={CloseSession}>Cerrar sesión</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <CartModal show={showCart} handleClose={handleClose} />
    </>
  );
}

export default Navibar;