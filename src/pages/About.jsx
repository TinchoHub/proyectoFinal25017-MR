import { Helmet } from "react-helmet-async";
import aboutImg from "../assets/About.JPG";
import '../styles/About.css';

function About() {

    return (
        <div className="about-full-bg">
            <Helmet>
                <title>Sobre Nosotros | Mi Tienda</title>
                <meta name="description" content="Conoce más sobre nuestra tienda y nuestro compromiso con la calidad." />
            </Helmet>
            <div
                className="about-bg-img position-relative d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url(${aboutImg})`
                }}
            >
                <div className="about-overlay" />
                <div className="about-content">
                        <h1>SOBRE NOSOTROS</h1>
                        <h3>Misión</h3>
                        <p>
                            Ofrecer una plataforma de comercio electrónico confiable, rápida y accesible, donde nuestros clientes puedan
                            encontrar productos de calidad en distintas categorías —como moda, tecnología y hogar— con una atención cercana
                            y eficiente.
                        </p>

                        <h3>Visión</h3>
                        <p>
                            Ser una tienda online líder en Latinoamérica, reconocida por su innovación, compromiso con el cliente y capacidad
                            para adaptarse a las nuevas tendencias de consumo.
                        </p>

                        <h3>Valores</h3>
                        <ul>
                            <li><strong>Compromiso con el cliente:</strong> Cada experiencia de compra importa. Nos esforzamos por brindar atención personalizada, envíos rápidos y soluciones efectivas.</li>
                            <li><strong>Calidad y variedad:</strong> Trabajamos con marcas y proveedores de confianza para ofrecer productos duraderos y actualizados.</li>
                            <li><strong>Transparencia:</strong> Información clara, precios justos y políticas honestas.</li>
                            <li><strong>Innovación constante:</strong> Nos actualizamos todo el tiempo para ofrecerte una experiencia simple, rápida y segura.</li>
                            <li><strong>Sustentabilidad:</strong> Promovemos prácticas responsables con el medio ambiente en nuestros procesos y logística.</li>
                        </ul>

                </div>
            </div>
        </div>
    );
}

export default About;