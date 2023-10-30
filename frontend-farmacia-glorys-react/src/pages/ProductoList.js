import React, { useState, useEffect } from 'react';
import { Table, Button, Card, Row, Col, Form, Modal, FloatingLabel  } from 'react-bootstrap';
import Header from '../components/Header';

function ProductoList() {
    const [productos, setProductos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedProducto, setSelectedProducto] = useState({});
    const [formData, setFormData] = useState({
        NomProducto: '',
        DescripProducto: '',
        PrecioProducto: '',
        Estado: '',
        CantProducto: '',
        IDMarca: '',
        IDCategoria: '',
        IDPresentacion: '',
    });

     //Variables de estado de marca
     const [marcas, setMarcas] = useState([]); // Estado para almacenar las marcas

       //Variables de estado de categoria
    const [categorias, setCategorias] = useState([]); // Estado para almacenar las categorias

    //Variables de estado de presentacion
    const [presentaciones, setPresentaciones] = useState([]); // Estado para almacenar las presentaciones

    const [searchQuery, setSearchQuery] = useState('');
    
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredProductos = productos.filter((producto) => {
        // Convierte los valores de los campos a minúsculas para realizar una búsqueda insensible a mayúsculas y minúsculas
        const nomproducto = producto.NomProducto.toLowerCase();
        const descripproducto = producto.DescripProducto.toLowerCase();
        const estado = producto.Estado.toLowerCase();
        const search = searchQuery.toLowerCase();
    
        // Verifica si la cadena de búsqueda se encuentra en algún campo
        return (
        nomproducto.includes(search) ||
        descripproducto.includes(search) ||
        estado.includes(search) 
        );
    });

    // Función para abrir el modal y pasar los datos del producto seleccionado
    const openModal = (producto) => {
        setSelectedProducto(producto);

        setFormData({
        NomProducto: producto.NomProducto,
        DescripProducto: producto.DescripProducto,
        PrecioProducto: producto.PrecioProducto,
        Estado: producto.Estado,
        CantProducto: producto.CantProducto,
        IDMarca: producto.IDMarca,
        IDCategoria: producto.IDCategoria,
        IDPresentacion: producto.IDPresentacion,
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

    const loadProductos = () => {
        fetch('http://localhost:5000/crud/readProducto')
        .then((response) => response.json())
        .then((data) => setProductos(data))
        .catch((error) => console.error('Error al obtener los productos:', error));
    };

    //petición al servidor y almacenar los datos en la variable de estado de la tabla marca
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


    // Función para enviar el formulario de actualización
    const handleUpdate = () => {
        // Realiza la solicitud PUT al servidor para actualizar el registro
        fetch(`http://localhost:5000/crud/updateProducto/${selectedProducto.IDProducto}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        })
        .then((response) => {
            if (response.ok) {
            // La actualización fue exitosa, puedes cerrar el modal y refrescar la lista de productos
            setShowModal(false);
            loadProductos(); // Cargar la lista de productos actualizada
            }
        })
        .catch((error) => console.error('Error al actualizar el registro:', error));
    };

    // Función para eliminar un producto
    const handleDelete = (idProducto) => {
        const confirmation = window.confirm('¿Seguro que deseas eliminar esta producto?');
        if (confirmation) {
        // Realiza la solicitud DELETE al servidor para eliminar el producto
        fetch(`http://localhost:5000/crud/deleteProducto/${idProducto}`, {
            method: 'DELETE',
        })
            .then((response) => {
            if (response.ok) {
                // La eliminación fue exitosa, refresca la lista de marcas
                loadProductos();
            }
            })
            .catch((error) => console.error('Error al eliminar el producto:', error));
        }
    };

    // Realiza una solicitud GET al servidor para obtener los productos
    useEffect(() => {
        fetch('http://localhost:5000/crud/readProducto')
        .then((response) => response.json())
        .then((data) => setProductos(data))
        .catch((error) => console.error('Error al obtener los productos:', error));
    }, []);


    return (
        <div>
        <Header />

        <Card className="m-3">
            <Card.Body>
            <Card.Title className="mb-3">Productos</Card.Title>
            
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
                    <th>Nombre de Producto</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Estado</th>
                    <th>Cantidad</th>
                    <th>Marca</th>
                    <th>Categoria</th>
                    <th>Presentación</th>
                </tr>
                </thead>
                <tbody>
                {filteredProductos.map((producto) => (
                    <tr key={producto.IDProducto}>
                    <td>{producto.IDProducto}</td>
                    <td>{producto.NomProducto}</td>
                    <td>{producto.DescripProducto}</td>
                    <td>{producto.PrecioProducto}</td>
                    <td>{producto.Estado}</td>
                    <td>{producto.CantProducto}</td>
                    <td>{producto.NombreMarca}</td>
                    <td>{producto.NombreCategoria}</td>
                    <td>{producto.NombrePresentacion}</td>
                    <td>
                        <Button variant="primary" onClick={() => openModal(producto)}>Actualizar</Button>
                        <Button variant="danger" onClick={() => handleDelete(producto.IDProducto)}>Eliminar</Button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            </Card.Body>
        </Card>

        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
            <Modal.Header closeButton>
            <Modal.Title>Actualizar Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Card className="mt-3">
                <Card.Body>
                <Card.Title>Registro de Producto</Card.Title>
                <Form className="mt-3">
                    <Row className="g-3">

                    <Col sm="6" md="6" lg="8">
                        <FloatingLabel controlId="NomProducto" label="Nombre de Producto">
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el nombre del producto"
                            name="NomProducto"
                            value={formData.NomProducto}
                            onChange={handleFormChange}
                        />
                        </FloatingLabel>
                    </Col>

                    <Col sm="12" md="6" lg="4">
                    <FloatingLabel controlId="Estado" label="Estado">
                        <Form.Select 
                            aria-label="Estado"
                            name="Estado"
                            value={formData.Estado}
                            onChange={handleFormChange}
                        >
                            <option>Seleccione el estado</option>
                            <option value="DISPONIBLE">DISPONIBLE</option>
                            <option value="AGOTADO">AGOTADO</option>
                        </Form.Select>
                        </FloatingLabel>
                    </Col>

                    <Col sm="6" md="6" lg="12">
                        <FloatingLabel controlId="DescripProducto" label="Descripción de Producto">
                        <Form.Control
                            type="text"
                            placeholder="Escriba aquí"
                            name="DescripProducto"
                            value={formData.DescripProducto}
                            onChange={handleFormChange}
                        />
                        </FloatingLabel>
                    </Col>

                    <Col sm="6" md="6" lg="6">
                        <FloatingLabel controlId="PrecioProducto" label="Precio de Producto">
                        <Form.Control
                            type="number"
                            placeholder="Escriba aquí"
                            name="PrecioProducto"
                            value={formData.PrecioProducto}
                            onChange={handleFormChange}
                        />
                        </FloatingLabel>
                    </Col>

                    <Col sm="6" md="6" lg="6">
                        <FloatingLabel controlId="CantProducto" label="Cantidad de Producto">
                        <Form.Control
                            type="number"
                            placeholder="Escriba aquí"
                            name="CantProducto"
                            value={formData.CantProducto}
                            onChange={handleFormChange}
                        />
                        </FloatingLabel>
                    </Col>

                    <Col sm="12" md="6" lg="4">
                    <FloatingLabel controlId="IDMarca" label="Marca">
                        <Form.Select 
                            aria-label="Marca"
                            value={formData.IDMarca}
                            onChange={handleFormChange}
                            name="Marca"
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
                            value={formData.IDCategoria}
                            onChange={handleFormChange}
                            name="Categoria"
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
                            value={formData.IDPresentacion}
                            onChange={handleFormChange}
                            name="Presentacion"
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

export default ProductoList;
