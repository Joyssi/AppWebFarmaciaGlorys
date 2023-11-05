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
    const [IDCategoria, setIDCategoria] = useState(''); // Estado para el valor seleccionado

    //Variables de estado de marca
    const [marcas, setMarcas] = useState([]); // Estado para almacenar las marcas
    const [IDMarca, setIDMarca] = useState(''); // Estado para el valor seleccionado

    //Variables de estado de presentacion
    const [presentaciones, setPresentaciones] = useState([]); // Estado para almacenar las presentaciones
    const [IDPresentacion, setIDPresentacion] = useState(''); // Estado para el valor seleccionado
                


       //Variables de estado de una imagen
        const [imagen, setImagen] = useState('');

        const handleImagenChange = (event) => {
            const file = event.target.files[0]; // Obtener el primer archivo seleccionado
        
            const reader = new FileReader();
            reader.onload = () => {
              const base64String = reader.result; // Obtener la imagen en formato base64
              setImagen(base64String); // Puedes visualizar la imagen en base64 en la consola para asegurarte de que la conversión se hizo correctamente
            }; 
            if (file) {
              reader.readAsDataURL(file); // Lee el contenido del archivo como base64
            }
        };

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
    imagen,
    IDMarca,
    IDCategoria,
    IDPresentacion
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
        alert('Producto Registrado');
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
        alert('Error al registrar el producto');
    }
    } catch (error) {
    console.error('Error en la solicitud:', error);
    alert('Error en la solicitud al servidor');
    }
};


    //petición al servidor y almacenar los datos en la variable de estado de la tabla categoria
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

                    <Col sm="12" md="6" lg="6">
                    <Form.Group controlId="imagen" className="" >
                        <Form.Control 
                        type="file" 
                        accept=".jpg, .png, .jpeg"
                        size="lg"
                        onChange={handleImagenChange}
                        />
                    </Form.Group>
                    </Col>
                    
                    <Col sm="12" md="6" lg="4">
                    <FloatingLabel controlId="IDMarca" label="Marca">
                        <Form.Select
                        aria-label="Marca"
                        value={IDMarca}
                        onChange={(e) => setIDMarca(e.target.value)}
                        >
                        <option>Seleccione la marca</option>
                        {marcas.map((marca) => (
                            <option key={marca.IDMarca} value={marca.IDMarca}>
                            {marca.NombreMarca}
                            </option>
                        ))}
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
                        {categorias.map((categoria) => (
                            <option key={categoria.IDCategoria} value={categoria.IDCategoria}>
                            {categoria.NombreCategoria}
                            </option>
                        ))}
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
                        {presentaciones.map((presentacion) => (
                            <option key={presentacion.IDPresentacion} value={presentacion.IDPresentacion}>
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