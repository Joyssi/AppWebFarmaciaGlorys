import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Marca from './pages/CreateMarca';
import Producto from './pages/CreateProducto';
import Servicio from './pages/CreateServicio';
import ListaServicio from './pages/ServicioList';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/marca" element={<Marca />} />
      <Route path="/producto" element={<Producto />} />
      <Route path="/servicio" element={<Servicio />} />
      <Route path="/actualizar-servicio" element={<ListaServicio />} />
    </Routes>
  </Router>
  );
}

export default App;
