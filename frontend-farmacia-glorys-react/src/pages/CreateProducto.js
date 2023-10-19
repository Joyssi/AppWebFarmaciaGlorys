import React, { useState } from 'react';
import { Form, Row, Col, Container, FloatingLabel, Card, Button } from 'react-bootstrap';
import Header from '../components/Header';
import '../styles/App.css';

function CreateProducto() {

  // Crear un estado para cada campo del formulario
    const [NomProducto, setNomProducto] = useState('');
    const [DescripProducto, setDescripProducto] = useState('');
    const [PrecioProducto, setPrecioProducto] = useState('');
    const [Estado, setEstado] = useState('');
    const [CantProducto, setCantProducto] = useState('');
    const [IDMarca, setIDMarca] = useState('');
    const [IDCategoria, setIDCategoria] = useState('');
    const [IDPresentacion, setIDPresentacion] = useState('');

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Crear un objeto con los datos del formulario
        const formData = {
        NomProducto,
        DescripProducto,
        PrecioProducto,
        Estado,
        CantProducto,
        IDMarca,
        IDCategoria,
        IDPresentacion,
        };

        try {
        // Realizar una solicitud HTTP al backend para enviar los datos
        const response = await fetch('http://localhost:5000/crud/createProducto', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            // El registro se creó exitosamente
            alert('Registro exitoso');
            // Reiniciar los campos del formulario
            setNomProducto('');
            setDescripProducto('');
            setPrecioProducto('');
            setEstado('');
            setCantProducto('');
            setIDMarca('');
            setIDCategoria('');
            setIDPresentacion('');
        } else {
            alert('Error al registrar el Producto');
        }
        } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Error en la solicitud al servidor');
        }
    };

    return(
        <div>
        <Header />
        
        <Container>
            <Card className="mt-3">
            <Card.Body>
                <Card.Title>Nuevo Producto</Card.Title>
                <Form className="mt-3" onSubmit={handleSubmit}>
                <Row className="g-3">

                    <Col sm="6" md="6" lg="8">
                    <FloatingLabel controlId="NomProducto" label="Nombre del producto">
                        <Form.Control
                        type="text"
                        placeholder="Ingrese el nombre del producto"
                        value={NomProducto}
                        onChange={(e) => setNomProducto(e.target.value)}
                        />
                    </FloatingLabel>
                    </Col>

                    <Col sm="12" md="6" lg="4">
                    <FloatingLabel controlId="Estado" label="Estado">
                        <Form.Select 
                        aria-label="Estado"
                        value={Estado}
                        onChange={(e) => setEstado(e.target.value)}
                        >
                        <option>Seleccione el estado</option>
                        <option value="DISPONIBLE">DISPONIBLE</option>
                        <option value="AGOTADO">AGOTADO</option>
                        </Form.Select>
                    </FloatingLabel>
                    </Col>

                    <Col sm="6" md="6" lg="12">
                    <FloatingLabel controlId="DescripProducto" label="Descripción del producto">
                        <Form.Control
                        type="text"
                        placeholder="Escriba aquí"
                        value={DescripProducto}
                        onChange={(e) => setDescripProducto(e.target.value)}
                        />
                    </FloatingLabel>
                    </Col>

                    <Col sm="6" md="6" lg="6">
                    <FloatingLabel controlId="PrecioProducto" label="Precio del producto">
                        <Form.Control
                        type="text"
                        placeholder="Ingrese el precio del producto"
                        value={PrecioProducto}
                        onChange={(e) => setPrecioProducto(e.target.value)}
                        />
                    </FloatingLabel>
                    </Col>

                    <Col sm="6" md="6" lg="6">
                    <FloatingLabel controlId="CantProducto" label="Cantidad">
                        <Form.Control
                        type="text"
                        placeholder="Escriba aquí"
                        value={CantProducto}
                        onChange={(e) => setCantProducto(e.target.value)}
                        />
                    </FloatingLabel>
                    </Col>
                    
                    <Col sm="12" md="6" lg="4">
                    <FloatingLabel controlId="IDMarca" label="Marca">
                        <Form.Select 
                        aria-label="Marca"
                        value={IDMarca}
                        onChange={(e) => setIDMarca(e.target.value)}
                        >
                        <option>Seleccione la marca</option>
                        <option value="RAMOS">RAMOS</option>
                        <option value="PASHA S.A">PASHA S.A</option>
                        </Form.Select>
                    </FloatingLabel>
                    </Col>

                    <Col sm="12" md="6" lg="4">
                    <FloatingLabel controlId="IDCategoria" label="Categoria">
                        <Form.Select 
                        aria-label="Categoria"
                        value={IDCategoria}
                        onChange={(e) => setIDCategoria(e.target.value)}
                        >
                        <option>Seleccione la categoria</option>
                        <option value="Fitofármaco">Fitofármaco</option>
                        <option value="Biológico">Biológico</option>
                        </Form.Select>
                    </FloatingLabel>
                    </Col>

                    <Col sm="12" md="6" lg="4">
                    <FloatingLabel controlId="IDPresentacion" label="Presentacion">
                        <Form.Select 
                        aria-label="Presentacion"
                        value={IDPresentacion}
                        onChange={(e) => setIDPresentacion(e.target.value)}
                        >
                        <option>Seleccione la presentacion</option>
                        <option value="Tableta">Tableta</option>
                        <option value="Jarabe">Jarabe</option>
                        </Form.Select>
                    </FloatingLabel>
                    </Col>

                </Row>
                <div className="center-button">
                    <Button variant="primary" type="submit" className="mt-3" size="lg">
                    Registrar
                    </Button>
                </div>
                </Form>
            </Card.Body>
            </Card>
        </Container>

        </div>
    );
}

export default CreateProducto;