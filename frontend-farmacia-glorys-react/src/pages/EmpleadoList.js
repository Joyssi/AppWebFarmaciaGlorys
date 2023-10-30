import React, { useState, useEffect } from 'react';
import { Table, Button, Card, Row, Col, Form, Modal, FloatingLabel  } from 'react-bootstrap';
import Header from '../components/Header';

function EmpleadoList() {
    const [empleados, setEmpleados] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedEmpleado, setSelectedEmpleado] = useState({});
    const [formData, setFormData] = useState({
        NombreUsuario: '',
        Contraseña: '',
        Correo: '',
        Telefono: '',
    });

    const [searchQuery, setSearchQuery] = useState('');
    
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredEmpleados = empleados.filter((empleado) => {
        // Convierte los valores de los campos a minúsculas para realizar una búsqueda insensible a mayúsculas y minúsculas
        const nombreusuario = empleado.NombreUsuario.toLowerCase();
        const correo = empleado.Correo.toLowerCase();
        const telefono = empleado.Telefono.toLowerCase();
        const search = searchQuery.toLowerCase();
    
        // Verifica si la cadena de búsqueda se encuentra en algún campo
        return (
        nombreusuario.includes(search) ||
        correo.includes(search) ||
        telefono.includes(search) 
        );
    });

    // Función para abrir el modal y pasar los datos del empleado seleccionada
    const openModal = (empleado) => {
        setSelectedEmpleado(empleado);

        setFormData({
        NombreUsuario: empleado.NombreUsuario,
        Contraseña: empleado.Contraseña,
        Correo: empleado.Correo,
        Telefono: empleado.Telefono,
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

    const loadEmpleados = () => {
        fetch('http://localhost:5000/crud/readEmpleado')
        .then((response) => response.json())
        .then((data) => setEmpleados(data))
        .catch((error) => console.error('Error al obtener los empleados:', error));
    };


    // Función para enviar el formulario de actualización
    const handleUpdate = () => {
        // Realiza la solicitud PUT al servidor para actualizar el registro
        fetch(`http://localhost:5000/crud/updateEmpleado/${selectedEmpleado.IDEmpleado}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        })
        .then((response) => {
            if (response.ok) {
            // La actualización fue exitosa, puedes cerrar el modal y refrescar la lista de empleados
            setShowModal(false);
            loadEmpleados(); // Cargar la lista de empleados actualizada
            }
        })
        .catch((error) => console.error('Error al actualizar el registro:', error));
    };

    // Función para eliminar un servicio
    const handleDelete = (idEmpleado) => {
        const confirmation = window.confirm('¿Seguro que deseas eliminar este empleado?');
        if (confirmation) {
        // Realiza la solicitud DELETE al servidor para eliminar el cliente
        fetch(`http://localhost:5000/crud/deleteEmpleado/${idEmpleado}`, {
            method: 'DELETE',
        })
            .then((response) => {
            if (response.ok) {
                // La eliminación fue exitosa, refresca la lista de clientes
                loadEmpleados();
            }
            })
            .catch((error) => console.error('Error al eliminar el empleado:', error));
        }
    };

    // Realiza una solicitud GET al servidor para obtener los empleados
    useEffect(() => {
        fetch('http://localhost:5000/crud/readEmpleado')
        .then((response) => response.json())
        .then((data) => setEmpleados(data))
        .catch((error) => console.error('Error al obtener los empleados:', error));
    }, []);

    return (
        <div>
        <Header />

        <Card className="m-3">
            <Card.Body>
            <Card.Title className="mb-3">Empleados</Card.Title>

            <Row className="mb-3">
            <Col sm="6" md="6" lg="12">
                <FloatingLabel controlId="search" label="Buscar">
                    <Form.Control
                    type="text"
                    placeholder="Buscar"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    />
                </FloatingLabel>
                </Col>
            </Row>

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
                {filteredEmpleados.map((empleado) => (
                    <tr key={empleado.IDEmpleado}>
                    <td>{empleado.IDEmpleado}</td>
                    <td>{empleado.NombreUsuario}</td>
                    <td>{empleado.Contraseña}</td>
                    <td>{empleado.Correo}</td>
                    <td>{empleado.Telefono}</td>
                    <td>
                        <Button variant="primary" onClick={() => openModal(empleado)}>Actualizar</Button>
                        <Button variant="danger" onClick={() => handleDelete(empleado.IDEmpleado)}>Eliminar</Button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            </Card.Body>
        </Card>

        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
            <Modal.Header closeButton>
            <Modal.Title>Actualizar Empleado</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Card className="mt-3">
                <Card.Body>
                <Card.Title>Registro de Empleado</Card.Title>
                <Form className="mt-3">
                    <Row className="g-3">

                    <Col sm="6" md="6" lg="12">
                        <FloatingLabel controlId="NombreUsuario" label="Nombre de Usuario">
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el nombre de usuario"
                            name="NombreUsuario"
                            value={formData.NombreUsuario}
                            onChange={handleFormChange}
                        />
                        </FloatingLabel>
                    </Col>

                    <Col sm="6" md="6" lg="12">
                        <FloatingLabel controlId="Contraseña" label="Contraseña de Usuario">
                        <Form.Control
                            type="text"
                            placeholder="Ingrese su contraseña"
                            name="Contraseña"
                            value={formData.Contraseña}
                            onChange={handleFormChange}
                        />
                        </FloatingLabel>
                    </Col>

                    <Col sm="6" md="6" lg="12">
                        <FloatingLabel controlId="Correo" label="Correo">
                        <Form.Control
                            type="text"
                            placeholder="Ingrese su correo"
                            name="Correo"
                            value={formData.Correo}
                            onChange={handleFormChange}
                        />
                        </FloatingLabel>
                    </Col>

                    <Col sm="6" md="6" lg="12">
                        <FloatingLabel controlId="Telefono" label="Número de teléfono">
                        <Form.Control
                            type="number"
                            placeholder="Ingrese su teléfono"
                            name="Telefono"
                            value={formData.Telefono}
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

export default EmpleadoList;
