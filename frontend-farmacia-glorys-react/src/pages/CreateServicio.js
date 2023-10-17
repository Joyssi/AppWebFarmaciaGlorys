import React, { useState } from 'react';
import { Form, Row, Col, Container, FloatingLabel, Card, Button } from 'react-bootstrap';
import Header from '../components/Header';
import '../styles/App.css';

function CreateServicio() {

  // Crear un estado para cada campo del formulario
    const [NombreS, setNombreS] = useState('');
    const [EstadoS, setEstadoS] = useState('');
    const [Descripcion, setDescripcion] = useState('');

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Crear un objeto con los datos del formulario
        const formData = {
        NombreS,
        EstadoS,
        Descripcion,
        };

        try {
        // Realizar una solicitud HTTP al backend para enviar los datos
        const response = await fetch('http://localhost:5000/crud/createServicio', {
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
            setNombreS('');
            setEstadoS('');
            setDescripcion('');
        } else {
            alert('Error al registrar el Servicio');
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
                <Card.Title>Nuevo Servicio</Card.Title>
                <Form className="mt-3" onSubmit={handleSubmit}>
                <Row className="g-3">

                    <Col sm="6" md="6" lg="8">
                    <FloatingLabel controlId="NombreS" label="Nombre de Servicio">
                        <Form.Control
                        type="text"
                        placeholder="Ingrese el nombre del Servicio"
                        value={NombreS}
                        onChange={(e) => setNombreS(e.target.value)}
                        />
                    </FloatingLabel>
                    </Col>

                    <Col sm="12" md="6" lg="4">
                    <FloatingLabel controlId="EstadoS" label="Estado">
                        <Form.Select 
                        aria-label="Estado"
                        value={EstadoS}
                        onChange={(e) => setEstadoS(e.target.value)}
                        >
                        <option>Seleccione el estado</option>
                        <option value="DISPONIBLE">DISPONIBLE</option>
                        <option value="EN ESPERA">EN ESPERA</option>
                        </Form.Select>
                    </FloatingLabel>
                    </Col>

                    <Col sm="6" md="6" lg="12">
                    <FloatingLabel controlId="Descripcion" label="Descripción">
                        <Form.Control
                        type="text"
                        placeholder="Escriba aquí"
                        value={Descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        />
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

export default CreateServicio;