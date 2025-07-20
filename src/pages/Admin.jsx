import { useEffect, useState } from 'react';
import { Container, Table, Button, Form, Modal, Spinner, Card } from 'react-bootstrap';
import '../styles/Admin.css';
import FondoAdmin from '../assets/FondoAdmin.jpg';

const API_URL = 'https://687bee50b4bc7cfbda87c22c.mockapi.io/api/v1/users';

function Admin() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [form, setForm] = useState({ name: '', email: '' });
    const [saving, setSaving] = useState(false);
    const usuariosPorPagina = 6;
    const [paginaActual, setPaginaActual] = useState(1);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setUsers(data);
        } catch (e) {
            alert('Error al cargar usuarios');
        }
        setLoading(false);
        setPaginaActual(1); 
    };

    const handleShowModal = (user = null) => {
        setEditingUser(user);
        setForm(user ? { name: user.name, email: user.email } : { name: '', email: '' });
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingUser(null);
        setForm({ name: '', email: '' });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            if (editingUser) {                
                await fetch(`${API_URL}/${editingUser.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(form),
                });
            } else {
                await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(form),
                });
            }
            fetchUsers();
            handleCloseModal();
        } catch (e) {
            alert('Error al guardar usuario');
        }
        setSaving(false);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('¿Eliminar usuario?')) return;
        try {
            await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            fetchUsers();
        } catch (e) {
            alert('Error al eliminar usuario');
        }
    };

    // Paginación
    const indiceUltimoUsuario = paginaActual * usuariosPorPagina;
    const indicePrimerUsuario = indiceUltimoUsuario - usuariosPorPagina;
    const usuariosActuales = users.slice(indicePrimerUsuario, indiceUltimoUsuario);
    const totalPaginas = Math.ceil(users.length / usuariosPorPagina);
    const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

    return (
        <div className="admin-full-bg">
            <div
                className="admin-bg-img position-relative d-flex align-items-center justify-content-center"
                style={{ backgroundImage: `url(${FondoAdmin})` }}
            >
                <div className="admin-overlay" />
                <Container className="flex-fill position-relative" style={{ zIndex: 2 }}>
                    <Card className="admin-card">
                    <h2 className="mb-4 text-center">Administrar Usuarios</h2>
                    <Button variant="primary" className="mb-3" onClick={() => handleShowModal()}>Agregar Usuario</Button>
                    {loading ? (
                        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 200 }}>
                            <Spinner animation="border" />
                        </div>
                    ) : (
                        <>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Avatar</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuariosActuales.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>
                                            <img src={user.avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.name)} alt={user.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} />
                                        </td>
                                        <td>
                                            <Button size="sm" variant="warning" className="me-2" onClick={() => handleShowModal(user)}>Editar</Button>
                                            <Button size="sm" variant="danger" onClick={() => handleDelete(user.id)}>Eliminar</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <div className="d-flex justify-content-center my-4">
                            {Array.from({ length: totalPaginas }, (_, index) => (
                                <button key={index + 1} className={`btn mx-1 ${paginaActual === index + 1 ? "btn-primary" : "btn-outline-primary"}`} onClick={() => cambiarPagina(index + 1)}>
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                        </>
                    )}
                    </Card>
                    <Modal show={showModal} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>{editingUser ? 'Editar Usuario' : 'Agregar Usuario'}</Modal.Title>
                        </Modal.Header>
                        <Form onSubmit={handleSubmit}>
                            <Modal.Body>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseModal} disabled={saving}>Cancelar</Button>
                                <Button variant="primary" type="submit" disabled={saving}>
                                    {saving ? 'Guardando...' : 'Guardar'}
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal>
                </Container>
            </div>
        </div>
    );
}

export default Admin;
