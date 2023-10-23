import React, { useState, useEffect } from 'react';
import { Table, Button, Card, Row, Col, Form, Modal, FloatingLabel  } from 'react-bootstrap';
import Header from '../components/Header';

function ClienteList() {
    const [clientes, setClientes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCliente, setSelectedCliente] = useState({});
    const [formData, setFormData] = useState({
        NombreUsuarioC: '',
        ContraseñaC: '',
        CorreoC: '',
        TelefonoC: '',
    });

    // Función para abrir el modal y pasar los datos de la marca seleccionada
    const openModal = (cliente) => {
        setSelectedCliente(cliente);

        setFormData({
        NombreUsuarioC: cliente.NombreUsuarioC,
        ContraseñaC: cliente.ContraseñaC,
        CorreoC: cliente.CorreoC,
        TelefonoC: cliente.TelefonoC,
        });
        setShowModal(true);
    };

    // Función para manejar cambios en el formulario
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const loadClientes = () => {
        fetch('http://localhost:5000/crud/readCliente')
        .then((response) => response.json())
        .then((data) => setClientes(data))
        .catch((error) => console.error('Error al obtener los clientes:', error));
    };


    // Función para enviar el formulario de actualización
    const handleUpdate = () => {
        // Realiza la solicitud PUT al servidor para actualizar el registro
        fetch(`http://localhost:5000/crud/updateCliente/${selectedCliente.IDCliente}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        })
        .then((response) => {
            if (response.ok) {
            // La actualización fue exitosa, puedes cerrar el modal y refrescar la lista de clientes
            setShowModal(false);
            loadClientes(); // Cargar la lista de clientes actualizada
            }
        })
        .catch((error) => console.error('Error al actualizar el registro:', error));
    };

    // Función para eliminar un servicio
    const handleDelete = (idCliente) => {
        const confirmation = window.confirm('¿Seguro que deseas eliminar este cliente?');
        if (confirmation) {
        // Realiza la solicitud DELETE al servidor para eliminar el cliente
        fetch(`http://localhost:5000/crud/deleteCliente/${idCliente}`, {
            method: 'DELETE',
        })
            .then((response) => {
            if (response.ok) {
                // La eliminación fue exitosa, refresca la lista de clientes
                loadClientes();
            }
            })
            .catch((error) => console.error('Error al eliminar el cliente:', error));
        }
    };

    // Realiza una solicitud GET al servidor para obtener los clientes
    useEffect(() => {
        fetch('http://localhost:5000/crud/readCliente')
        .then((response) => response.json())
        .then((data) => setClientes(data))
        .catch((error) => console.error('Error al obtener los clientes:', error));
    }, []);

    return (
        <div>
        <Header />

        <Card className="m-3">
            <Card.Body>
            <Card.Title className="mb-3">Clientes</Card.Title>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre de Usuario</th>
                    <th>Contraseña de usuario</th>
                    <th>Correo</th>
                    <th>Teléfono</th>
                </tr>
                </thead>
                <tbody>
                {clientes.map((cliente) => (
                    <tr key={cliente.IDCliente}>
                    <td>{cliente.IDCliente}</td>
                    <td>{cliente.NombreUsuarioC}</td>
                    <td>{cliente.ContraseñaC}</td>
                    <td>{cliente.CorreoC}</td>
                    <td>{cliente.TelefonoC}</td>
                    <td>
                        <Button variant="primary" onClick={() => openModal(cliente)}>Actualizar</Button>
                        <Button variant="danger" onClick={() => handleDelete(cliente.IDMarca)}>Eliminar</Button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            </Card.Body>
        </Card>

        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
            <Modal.Header closeButton>
            <Modal.Title>Actualizar Cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Card className="mt-3">
                <Card.Body>
                <Card.Title>Registro de Cliente</Card.Title>
                <Form className="mt-3">
                    <Row className="g-3">

                    <Col sm="6" md="6" lg="12">
                        <FloatingLabel controlId="NombreUsuarioC" label="Nombre de Usuario">
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el nombre de usuario"
                            name="NombreUsuarioC"
                            value={formData.NombreUsuarioC}
                            onChange={handleFormChange}
                        />
                        </FloatingLabel>
                    </Col>

                    <Col sm="6" md="6" lg="12">
                        <FloatingLabel controlId="ContraseñaC" label="Contraseña de Usuario">
                        <Form.Control
                            type="text"
                            placeholder="Ingrese su contraseña"
                            name="ContraseñaC"
                            value={formData.ContraseñaC}
                            onChange={handleFormChange}
                        />
                        </FloatingLabel>
                    </Col>

                    <Col sm="6" md="6" lg="12">
                        <FloatingLabel controlId="CorreoC" label="Correo">
                        <Form.Control
                            type="text"
                            placeholder="Ingrese su correo"
                            name="CorreoC"
                            value={formData.CorreoC}
                            onChange={handleFormChange}
                        />
                        </FloatingLabel>
                    </Col>

                    <Col sm="6" md="6" lg="12">
                        <FloatingLabel controlId="TelefonoC" label="Número de teléfono">
                        <Form.Control
                            type="number"
                            placeholder="Ingrese su teléfono"
                            name="TelefonoC"
                            value={formData.TelefonoC}
                            onChange={handleFormChange}
                        />
                        </FloatingLabel>
                    </Col>

                    </Row>
                </Form>
                </Card.Body>
            </Card>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={handleUpdate}>
                Actualizar
            </Button>
            </Modal.Footer>
        </Modal>

        </div>
    );
}

export default ClienteList;
