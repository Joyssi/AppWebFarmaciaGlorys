import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, FloatingLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ setRol }) => {
    const navigate = useNavigate();

    const [NombreUsuario, setNombreUsuario] = useState('');
    const [Contraseña, setContraseña] = useState('');

    const handleSubmit = async event => {
        event.preventDefault(); 

        // Objeto con los datos del formulario
        const formData = {
        NombreUsuario,
        Contraseña
        };

        try {
        const response = await fetch('http://localhost:5000/crud/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
    
        if (response.ok) {
            const { rol } = await response.json();
    
            setRol(rol); // Actualiza el estado del rol solo si las credenciales son correctas
            navigate('/home');
        } else {
            console.log('Credenciales incorrectas');
            alert('¡Credenciales incorrectas!');
        }
        } catch (error) {
        console.error('Error en la solicitud: ', error);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Row className="justify-content-md-center">
            <Col md={12}>
            <Card>
                <Card.Body>
                <Card.Title className="mb-3">Incio de Sesión</Card.Title>
                <Form onSubmit={handleSubmit}>

                    <Row>
                    <Col sm="12" md="12" lg="12" className="mb-3">
                        <FloatingLabel controlId="NombreUsuario" label="Ingrese su usuario">
                        <Form.Control
                            placeholder="Ingrese su usuario"
                            type="text"
                            value={NombreUsuario}
                            onChange={(e) => setNombreUsuario(e.target.value)}
                        />
                        </FloatingLabel>
                    </Col>
                    <Col sm="12" md="12" lg="12">
                        <FloatingLabel controlId="Contraseña" label="Ingrese su contraseña">
                        <Form.Control
                            placeholder="Ingrese su contraseña"
                            type="password"
                            value={Contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                        />
                        </FloatingLabel>
                    </Col>
                    </Row>

                    <div className="center-button">
                    <Button variant="primary" type="submit" block className="mt-3">
                        Iniciar Sesión
                    </Button>
                    </div>
                </Form>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
    );
};

export default Login;
