import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import Navbar from 'react-bootstrap/Navbar'; // Importa el componente Navbar de Bootstrap
import Nav from 'react-bootstrap/Nav'; // Importa el componente Nav de Bootstrap
import Offcanvas from 'react-bootstrap/Offcanvas'; // Importa el componente Offcanvas de Bootstrap
import Button from 'react-bootstrap/Button'; // Importa el componente Button de Bootstrap
import NavDropdown from 'react-bootstrap/NavDropdown'; // Importa el componente NavDropDown de Bootstrap
import Container from 'react-bootstrap/Container'; // Importa el componente Container de Bootstrap
import { Link } from 'react-router-dom';


function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      {/* Navbar principal */}
      <Navbar className="navbar-color" variant="dark" expand="md">
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

              <NavDropdown title="Marcas" id="marcas">
                <NavDropdown.Item>
                  <Link to="/marca" className="link-unstyled">Nueva Marca</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/actualizar-marca" className="link-unstyled">Listar Marcas</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Productos" id="productos">
                <NavDropdown.Item>
                  <Link to="/producto" className="link-unstyled">Nuevo Producto</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/actualizar-producto" className="link-unstyled">Listar Productos</Link>
                </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Servicios" id="servicios">
                <NavDropdown.Item>
                  <Link to="/servicio" className="link-unstyled">Nuevo Servicio</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/actualizar-servicio" className="link-unstyled">Listar Servicios</Link>
                </NavDropdown.Item>
                </NavDropdown>

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

      {/* Menú lateral (Offcanvas) */}
      <Offcanvas show={showMenu} onHide={toggleMenu} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">

          <Nav.Link>
                <Link to="/" className="link-unstyled">Inicio</Link>
              </Nav.Link>

              <NavDropdown title="Marcas" id="marcas">
                <NavDropdown.Item>
                  <Link to="/customer" className="link-unstyled">Registrar Marca</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/actualizar-marca" className="link-unstyled">Actualizar Marca</Link>
                </NavDropdown.Item>
              </NavDropdown>

          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Header;