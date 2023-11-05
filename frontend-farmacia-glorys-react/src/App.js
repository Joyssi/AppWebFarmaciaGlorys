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
import Login from './pages/Login';

function App() {

  const [userRol, setUserRol] = useState('');

  return (
    <Router>
    <Routes>
    <Route path="/" element={<Login Rol={userRol} setRol={setUserRol} />} />
    <Route path="/home" element={<Home Rol={userRol} />} />
      <Route path="/marca" element={<Marca Rol={userRol} />} />
      <Route path="/actualizar-marca" element={<ListMarca Rol={userRol} />} />
      <Route path="/categoria" element={<Categoria Rol={userRol}/>} />
      <Route path="/actualizar-categoria" element={<ListCategoria Rol={userRol} />} />
      <Route path="/presentacion" element={<Presentacion Rol={userRol} />} />
      <Route path="/actualizar-presentacion" element={<ListPresentacion Rol={userRol} />} />
      <Route path="/producto" element={<Producto Rol={userRol} />} />
      <Route path="/actualizar-producto" element={<ListProducto Rol={userRol} />} />
      <Route path="/servicio" element={<Servicio Rol={userRol} />} />
      <Route path="/actualizar-servicio" element={<ListaServicio Rol={userRol} />} />
      <Route path="/cliente" element={<Cliente Rol={userRol} />} />
      <Route path="/actualizar-cliente" element={<ListCliente Rol={userRol} />} />
    </Routes>
  </Router>
  );
}

export default App;
