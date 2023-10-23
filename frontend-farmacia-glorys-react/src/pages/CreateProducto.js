import React, { useState, useEffect } from 'react';
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

    //Variables de estado de categoria
    const [categorias, setCategorias] = useState([]); // Estado para almacenar las categorias
    const [Categoria, setCategoria] = useState(''); // Estado para el valor seleccionado

    //Variables de estado de marca
    const [marcas, setMarcas] = useState([]); // Estado para almacenar las marcas
    const [Marca, setMarca] = useState(''); // Estado para el valor seleccionado

    //Variables de estado de presentacion
    const [presentaciones, setPresentaciones] = useState([]); // Estado para almacenar las presentaciones
    const [Presentacion, setPresentacion] = useState(''); // Estado para el valor seleccionado

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
        Marca,
        Categoria,
        Presentacion,
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
            setMarca('');
            setCategoria('');
            setPresentacion('');
        } else {
            alert('Error al registrar el Producto');
        }
        } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Error en la solicitud al servidor');
        }
    };

    //petición al servidor y almacenar los daros en la variable de estado de la tabla categoria
    useEffect(() => {
        // Realiza una solicitud a tu ruta para obtener las categorias
        fetch('http://localhost:5000/crud/readCategoria')
            .then(response => response.json())
            .then(data => {
            // Actualiza el estado con las categorias obtenidas
            setCategorias(data);
            })
            .catch(error => {
            console.error('Error al obtener las categorias', error);
            });
        }, []);

        //petición al servidor y almacenar los daros en la variable de estado de la tabla marca
    useEffect(() => {
        // Realiza una solicitud a tu ruta para obtener las marcas
        fetch('http://localhost:5000/crud/readMarca')
            .then(response => response.json())
            .then(data => {
            // Actualiza el estado con las marcas obtenidas
            setMarcas(data);
            })
            .catch(error => {
            console.error('Error al obtener las marcas', error);
            });
        }, []);

        //petición al servidor y almacenar los daros en la variable de estado de la tabla presentacion
    useEffect(() => {
        // Realiza una solicitud a tu ruta para obtener las presentaciones
        fetch('http://localhost:5000/crud/readPresentacion')
            .then(response => response.json())
            .then(data => {
            // Actualiza el estado con las presentaciones obtenidas
            setPresentaciones(data);
            })
            .catch(error => {
            console.error('Error al obtener las presentaciones', error);
            });
        }, []);


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
                        type="number"
                        placeholder="Ingrese el precio del producto"
                        value={PrecioProducto}
                        onChange={(e) => setPrecioProducto(e.target.value)}
                        />
                    </FloatingLabel>
                    </Col>

                    <Col sm="6" md="6" lg="6">
                    <FloatingLabel controlId="CantProducto" label="Cantidad">
                        <Form.Control
                        type="number"
                        placeholder="Escriba aquí"
                        value={CantProducto}
                        onChange={(e) => setCantProducto(e.target.value)}
                        />
                    </FloatingLabel>
                    </Col>
                    
                    <Col sm="12" md="6" lg="4">
                    <FloatingLabel controlId="Marca" label="Marca">
                        <Form.Select
                        aria-label="Marca"
                        value={Marca}
                        onChange={(e) => setMarca(e.target.value)}
                        >
                        <option>Seleccione la marca</option>
                        {marcas.map((marca) => (
                            <option key={marca.IDMarca} value={marca.NombreMarca}>
                            {marca.NombreMarca}
                            </option>
                        ))}
                        </Form.Select>
                    </FloatingLabel>
                    </Col>

                    <Col sm="12" md="6" lg="4">
                    <FloatingLabel controlId="Categoria" label="Categoria">
                        <Form.Select
                        aria-label="Categoria"
                        value={Categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        >
                        <option>Seleccione la categoria</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.IDCategoria} value={categoria.NombreCategoria}>
                            {categoria.NombreCategoria}
                            </option>
                        ))}
                        </Form.Select>
                    </FloatingLabel>
                    </Col>

                    <Col sm="12" md="6" lg="4">
                    <FloatingLabel controlId="Presentacion" label="Presentacion">
                        <Form.Select
                        aria-label="Presentacion"
                        value={Presentacion}
                        onChange={(e) => setPresentacion(e.target.value)}
                        >
                        <option>Seleccione la presentacion</option>
                        {presentaciones.map((presentacion) => (
                            <option key={presentacion.IDPresentacion} value={presentacion.NombrePresentacion}>
                            {presentacion.NombrePresentacion}
                            </option>
                        ))}
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