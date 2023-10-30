import React, { useState } from 'react';
import { Form, Row, Col, Container, FloatingLabel, Card, Button } from 'react-bootstrap';
import Header from '../components/Header';
import '../styles/App.css';

function CreateEmpleado() {

  // Crear un estado para cada campo del formulario
    const [NombreUsuario, setNombreUsuario] = useState('');
    const [Contraseña, setContraseña] = useState('');
    const [Correo, setCorreo] = useState('');   
    const [Telefono, setTelefono] = useState('');

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Crear un objeto con los datos del formulario
        const formData = {
        NombreUsuario,
        Contraseña,
        Correo,
        Telefono,
        };

        try {
        // Realizar una solicitud HTTP al backend para enviar los datos
        const response = await fetch('http://localhost:5000/crud/createEmpleado', {
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
            setNombreUsuario('');
            setContraseña('');
            setCorreo('');
            setTelefono('');
        } else {
            alert('Error al registrar el Empleado');
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
                <Card.Title>Nuevo Empleado</Card.Title>
                <Form className="mt-3" onSubmit={handleSubmit}>
                <Row className="g-3">

                    <Col sm="6" md="6" lg="6">
                    <FloatingLabel controlId="NombreUsuario" label="Nombre de Usuario">
                        <Form.Control
                        type="text"
                        placeholder="Ingrese el nombre de usuario"
                        value={NombreUsuario}
                        onChange={(e) => setNombreUsuario(e.target.value)}
                        />
                    </FloatingLabel>
                    </Col>

                    <Col sm="6" md="6" lg="6">
                    <FloatingLabel controlId="Contraseña" label="Contraseña de Usuario">
                        <Form.Control
                        type="text"
                        placeholder="Ingrese su contraseña"
                        value={Contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        />
                    </FloatingLabel>
                    </Col>

                    <Col sm="6" md="6" lg="8">
                    <FloatingLabel controlId="Correo" label="Correo">
                        <Form.Control
                        type="text"
                        placeholder="Ingrese su correo"
                        value={Correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        />
                    </FloatingLabel>
                    </Col>

                    <Col sm="6" md="6" lg="4">
                    <FloatingLabel controlId="Telefono" label="Telefono">
                        <Form.Control
                        type="number"
                        placeholder="Ingrese su número de teléfono"
                        value={Telefono}
                        onChange={(e) => setTelefono(e.target.value)}
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

export default CreateEmpleado;