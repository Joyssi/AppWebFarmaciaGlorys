import React from 'react';
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
import ListEmpleado from './pages/EmpleadoList';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/marca" element={<Marca />} />
      <Route path="/actualizar-marca" element={<ListMarca />} />
      <Route path="/categoria" element={<Categoria />} />
      <Route path="/actualizar-categoria" element={<ListCategoria />} />
      <Route path="/presentacion" element={<Presentacion />} />
      <Route path="/actualizar-presentacion" element={<ListPresentacion />} />
      <Route path="/producto" element={<Producto />} />
      <Route path="/actualizar-producto" element={<ListProducto />} />
      <Route path="/servicio" element={<Servicio />} />
      <Route path="/actualizar-servicio" element={<ListaServicio />} />
      <Route path="/cliente" element={<Cliente />} />
      <Route path="/actualizar-cliente" element={<ListCliente />} />
      <Route path="/empleado" element={<Empleado />} />
      <Route path="/actualizar-empleado" element={<ListEmpleado />} />
    </Routes>
  </Router>
  );
}

export default App;
