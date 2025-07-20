import '../styles/Profile.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import FondoPerfil from '../assets/FondoPerfil.jpg';

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            navigate('/Login');
        } else {
            setUser(JSON.parse(storedUser));
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('auth');
        localStorage.removeItem('user');
        navigate('/Login');
    };

    if (!user) return null;

    return (
        <div className="profile-full-bg">
            <div
                className="profile-bg-img position-relative d-flex align-items-center justify-content-center"
                style={{ backgroundImage: `url(${FondoPerfil})` }}
            >
                <div className="profile-overlay" />
                <Container className="d-flex justify-content-center align-items-top position-relative" style={{ zIndex: 2 }}>
                    <Card style={{ width: '100%', maxWidth: '500px' }} className="p-4 shadow mt-3">
                        <h3 className="text-center mb-4">Mi Perfil</h3>
                        <p><strong>Correo:</strong> {user.email}</p>
                        <Button variant="danger" onClick={handleLogout} className="mt-3">
                            Cerrar sesión
                        </Button>
                    </Card>
                </Container>
            </div>
        </div>
    );
};

export default Profile;