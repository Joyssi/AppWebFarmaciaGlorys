import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Marca from './pages/CreateMarca';
import ListMarca from './pages/MarcaList';
import Categoria from './pages/CreateCategoria';
import ListCategoria from './pages/CategoriaList';
import Presentacion from './pages/CreatePresentacion';
import ListPresentacion from './pages/PresentacionList';
import Producto from './pages/CreateProducto';
import ListProducto from './pages/ProductoList';
import Servicio from './pages/CreateServicio';
import ListaServicio from './pages/ServicioList';
import Cliente from './pages/CreateCliente';
import ListCliente from './pages/ClienteList';
import Empleado from './pages/CreateEmpleado';
import Login from './pages/Login';

function App() {

  const [userRol, setUserRol] = useState('');

  return (
    <Router>
    <Routes>
    <Route path="/" element={<Login rol={userRol} setRol={setUserRol} />} />
    <Route path="/home" element={<Home rol={userRol} />} />
      <Route path="/marca" element={<Marca rol={userRol} />} />
      <Route path="/actualizar-marca" element={<ListMarca rol={userRol} />} />
      <Route path="/categoria" element={<Categoria rol={userRol}/>} />
      <Route path="/actualizar-categoria" element={<ListCategoria rol={userRol} />} />
      <Route path="/presentacion" element={<Presentacion rol={userRol} />} />
      <Route path="/actualizar-presentacion" element={<ListPresentacion rol={userRol} />} />
      <Route path="/producto" element={<Producto rol={userRol} />} />
      <Route path="/actualizar-producto" element={<ListProducto rol={userRol} />} />
      <Route path="/servicio" element={<Servicio rol={userRol} />} />
      <Route path="/actualizar-servicio" element={<ListaServicio rol={userRol} />} />
      <Route path="/cliente" element={<Cliente rol={userRol} />} />
      <Route path="/actualizar-cliente" element={<ListCliente rol={userRol} />} />
      <Route path="/empleado" element={<Empleado rol={userRol} />} />
    </Routes>
  </Router>
  );
}

export default App;
