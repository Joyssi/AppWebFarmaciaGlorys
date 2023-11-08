import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import Navbar from 'react-bootstrap/Navbar'; // Importa el componente Navbar de Bootstrap
import Nav from 'react-bootstrap/Nav'; // Importa el componente Nav de Bootstrap
import Button from 'react-bootstrap/Button'; // Importa el componente Button de Bootstrap
import Container from 'react-bootstrap/Container'; // Importa el componente Container de Bootstrap
import { Link } from 'react-router-dom';
import { BiUserCircle} from 'react-icons/fa6';


function Inicio() {
    const [showMenu, setShowMenu] = useState(false);

const toggleMenu = () => {
    setShowMenu(!showMenu);
};

    return (

    <div>
    {/* Navbar principal */}
    <Navbar className="navbar-color" variant="dark" expand="md" fixed='top'>
    <Container>
        <Navbar.Brand href="#home">Farmacia Glorys</Navbar.Brand>
        <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ display: 'none' }}
        className="d-sm-none d-xs-none"
        />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">

                <Nav.Link>
                <Link to="/" className="link-unstyled">Inicio</Link>
                </Nav.Link>

                <Nav.Link>
                <Link to="/inicio" className="link-unstyled">Iniciar Sesión</Link>
                </Nav.Link>

                <Nav.Link>
                <Link to="/registrarse" className="link-unstyled">Registrarse</Link>
                </Nav.Link>

                </Nav>
            </Navbar.Collapse>
            <Button
                variant="outline-light"
                onClick={toggleMenu}
                className="d-md-none d-block"
                aria-controls="basic-navbar-nav"
                aria-expanded={showMenu ? 'true' : 'false'}
            >
                Menú
            </Button>
            </Container>
        </Navbar>
    </div>

    );
}
    
    export default  Inicio;  
    