import React, { useState, useEffect } from 'react';
import { Table, Button, Card, Row, Col, Form, Modal, FloatingLabel  } from 'react-bootstrap';
import Header from '../components/Header';

function ServicioList() {
    const [servicios, setServicios] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedServicio, setSelectedServicio] = useState({});
    const [formData, setFormData] = useState({
        NombreS: '',
        EstadoS: '',
        Descripcion: '',
    });

    // Función para abrir el modal y pasar los datos del servicio seleccionado
    const openModal = (servicio) => {
        setSelectedServicio(servicio);

        setFormData({
        NombreS: servicio.NombreS,
        EstadoS: servicio.EstadoS,
        Descripcion: servicio.Descripcion,
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

    const loadServicios = () => {
        fetch('http://localhost:5000/crud/readServicio')
        .then((response) => response.json())
        .then((data) => setServicios(data))
        .catch((error) => console.error('Error al obtener los servicios:', error));
    };


    // Función para enviar el formulario de actualización
    const handleUpdate = () => {
        // Realiza la solicitud PUT al servidor para actualizar el registro
        fetch(`http://localhost:5000/crud/updateServicio/${selectedServicio.IDServicio}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        })
        .then((response) => {
            if (response.ok) {
            // La actualización fue exitosa, puedes cerrar el modal y refrescar la lista de servicios
            setShowModal(false);
            loadServicios(); // Cargar la lista de servicios actualizada
            }
        })
        .catch((error) => console.error('Error al actualizar el registro:', error));
    };

    // Función para eliminar un servicio
    const handleDelete = (idServicio) => {
        const confirmation = window.confirm('¿Seguro que deseas eliminar este servicio?');
        if (confirmation) {
        // Realiza la solicitud DELETE al servidor para eliminar el servicio
        fetch(`http://localhost:5000/crud/deleteServicio/${idServicio}`, {
            method: 'DELETE',
        })
            .then((response) => {
            if (response.ok) {
                // La eliminación fue exitosa, refresca la lista de servicios
                loadServicios();
            }
            })
            .catch((error) => console.error('Error al eliminar el servicio:', error));
        }
    };

    // Realiza una solicitud GET al servidor para obtener los servicios
    useEffect(() => {
        fetch('http://localhost:5000/crud/readServicio')
        .then((response) => response.json())
        .then((data) => setServicios(data))
        .catch((error) => console.error('Error al obtener los servicios:', error));
    }, []);

    return (
        <div>
        <Header />

        <Card className="m-3">
            <Card.Body>
            <Card.Title className="mb-3">Servicios</Card.Title>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre del Servicio</th>
                    <th>Estado</th>
                    <th>Descripción</th>
                </tr>
                </thead>
                <tbody>
                {servicios.map((servicio) => (
                    <tr key={servicio.IDServicio}>
                    <td>{servicio.IDServicio}</td>
                    <td>{servicio.NombreS}</td>
                    <td>{servicio.EstadoS}</td>
                    <td>{servicio.Descripcion}</td>
                    <td>
                        <Button variant="primary" onClick={() => openModal(servicio)}>Actualizar</Button>
                        <Button variant="danger" onClick={() => handleDelete(servicio.IDServicio)}>Eliminar</Button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            </Card.Body>
        </Card>

        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
            <Modal.Header closeButton>
            <Modal.Title>Actualizar Servicio</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Card className="mt-3">
                <Card.Body>
                <Card.Title>Registro de Servicio</Card.Title>
                <Form className="mt-3">
                    <Row className="g-3">

                    <Col sm="6" md="6" lg="8">
                        <FloatingLabel controlId="NombreS" label="Nombre">
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el nombre del servicio"
                            name="NombreS"
                            value={formData.NombreS}
                            onChange={handleFormChange}
                        />
                        </FloatingLabel>
                    </Col>

                    <Col sm="12" md="6" lg="4">
                        <FloatingLabel controlId="EstadoS" label="Estado">
                        <Form.Select 
                            aria-label="Estado"
                            name="EstadoS"
                            value={formData.EstadoS}
                            onChange={handleFormChange}
                        >
                            <option>Seleccione el estado</option>
                            <option value="DISPONIBLE">DISPONIBLE</option>
                            <option value="EN ESPERA">EN ESPERA</option>
                        </Form.Select>
                        </FloatingLabel>
                    </Col>

                    <Col sm="6" md="6" lg="8">
                        <FloatingLabel controlId="Descripcion" label="Descripción">
                        <Form.Control
                            type="text"
                            placeholder="Escriba aquí"
                            name="Descripcion"
                            value={formData.Descripcion}
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

export default ServicioList;
