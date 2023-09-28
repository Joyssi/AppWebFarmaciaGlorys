const express = require('express');
const router = express.Router();

module.exports = (db) => {
  
  // Ruta para leer registros
  //Ruta para leer la tabla Categoria de la Base de Datos--------------------------------
  router.get('/readCategoria', (req, res) => {
    // Utiliza la instancia de la base de datos pasada como parámetro
    // Realizar una consulta SQL para seleccionar todos los registros
    const sql = 'SELECT * FROM categoria';

    // Ejecutar la consulta
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al leer registros:', err);
        res.status(500).json({ error: 'Error al leer registros' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla Categoria------------
  router.post('/createCategoria', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const { idCategoria, nombreCategoria } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!idCategoria || !nombreCategoria) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO categoria (IDCategoria, NombreCategoria) VALUES (?, ?)`;
    const values = [idCategoria, nombreCategoria];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar registro:', err);
        res.status(500).json({ error: 'Error al insertar registro' });
      } else {
        // Devuelve el ID del nuevo registro como respuesta
        res.status(201).json({ idCategoria });
      }
    });
  });
  //----------------------------------------------------------------------------------------

    // Ruta para actualizar un registro existente por ID en la tabla Categoria--------------
  router.put('/updateCategoria/:idCategoria', (req, res) => {
    // Obtén el ID del registro a actualizar desde los parámetros de la URL
    const idCategoria = req.params.idCategoria;

    // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
    const { nombreCategoria } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!nombreCategoria) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para actualizar el registro por ID
    const sql = `
      UPDATE categoria
      SET NombreCategoria = ?
      WHERE IDCategoria = ?
    `;

    const values = [nombreCategoria, idCategoria];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al actualizar el registro:', err);
        res.status(500).json({ error: 'Error al actualizar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado con éxito' });
      }
    });
  });
  //-------------------------------------------------------------------------------------

  // Ruta para eliminar un registro existente por ID en la tabla Categoria---------------
  router.delete('/deleteCategoria/:idCategoria', (req, res) => {
    // Obtén el ID del registro a eliminar desde los parámetros de la URL
    const idCategoria = req.params.idCategoria;

    // Realiza la consulta SQL para eliminar el registro por ID
    const sql = 'DELETE FROM categoria WHERE IDCategoria = ?';

    // Ejecuta la consulta
    db.query(sql, [idCategoria], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).json({ error: 'Error al eliminar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado con éxito' });
      }
    });
  });
  //---------------------------------------------------------------------------------------

  // Ruta para leer registros
  //Ruta para leer la tabla Marca de la Base de Datos--------------------------------
  router.get('/readMarca', (req, res) => {
    // Utiliza la instancia de la base de datos pasada como parámetro
    // Realizar una consulta SQL para seleccionar todos los registros
    const sql = 'SELECT * FROM marca';

    // Ejecutar la consulta
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al leer registros:', err);
        res.status(500).json({ error: 'Error al leer registros' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla Marca------------
  router.post('/createMarca', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const { idMarca, nombreMarca } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!idMarca || !nombreMarca) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO marca (IDMarca, NombreMarca) VALUES (?, ?)`;
    const values = [idMarca, nombreMarca];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar registro:', err);
        res.status(500).json({ error: 'Error al insertar registro' });
      } else {
        // Devuelve el ID del nuevo registro como respuesta
        res.status(201).json({ idMarca });
      }
    });
  });
  //----------------------------------------------------------------------------------------

  // Ruta para actualizar un registro existente por ID en la tabla Marca--------------------
  router.put('/updateMarca/:idMarca', (req, res) => {
    // Obtén el ID del registro a actualizar desde los parámetros de la URL
    const idMarca = req.params.idMarca;

    // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
    const { nombreMarca } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!nombreMarca) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para actualizar el registro por ID
    const sql = `
      UPDATE marca
      SET NombreMarca = ?
      WHERE IDMarca = ?
    `;

    const values = [nombreMarca, idMarca];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al actualizar el registro:', err);
        res.status(500).json({ error: 'Error al actualizar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado con éxito' });
      }
    });
  });
  //-------------------------------------------------------------------------------------

  // Ruta para eliminar un registro existente por ID en la tabla Marca-------------------
  router.delete('/deleteMarca/:idMarca', (req, res) => {
    // Obtén el ID del registro a eliminar desde los parámetros de la URL
    const idMarca = req.params.idMarca;

    // Realiza la consulta SQL para eliminar el registro por ID
    const sql = 'DELETE FROM marca WHERE IDMarca = ?';

    // Ejecuta la consulta
    db.query(sql, [idMarca], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).json({ error: 'Error al eliminar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado con éxito' });
      }
    });
  });
  //---------------------------------------------------------------------------------------

  // Ruta para leer registros
  //Ruta para leer la tabla Presentación de la Base de Datos--------------------------------
  router.get('/readPresentacion', (req, res) => {
    // Utiliza la instancia de la base de datos pasada como parámetro
    // Realizar una consulta SQL para seleccionar todos los registros
    const sql = 'SELECT * FROM presentacion';

    // Ejecutar la consulta
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al leer registros:', err);
        res.status(500).json({ error: 'Error al leer registros' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla Presentación------------
  router.post('/createPresentacion', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const { idPresentacion, formaDosificacion } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!idPresentacion || !formaDosificacion) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO presentacion (IDPresentacion, FormaDosificacion) VALUES (?, ?)`;
    const values = [idPresentacion, formaDosificacion];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar registro:', err);
        res.status(500).json({ error: 'Error al insertar registro' });
      } else {
        // Devuelve el ID del nuevo registro como respuesta
        res.status(201).json({ idPresentacion });
      }
    });
  });
  //----------------------------------------------------------------------------------------

  // Ruta para actualizar un registro existente por ID en la tabla Presentación--------------
  router.put('/updatePresentacion/:idPresentacion', (req, res) => {
    // Obtén el ID del registro a actualizar desde los parámetros de la URL
    const idPresentacion = req.params.idPresentacion;

    // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
    const { formaDosificacion } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!formaDosificacion) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para actualizar el registro por ID
    const sql = `
      UPDATE presentacion
      SET FormaDosificacion = ?
      WHERE IDPresentacion = ?
    `;

    const values = [formaDosificacion, idPresentacion];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al actualizar el registro:', err);
        res.status(500).json({ error: 'Error al actualizar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado con éxito' });
      }
    });
  });
  //-------------------------------------------------------------------------------------

  // Ruta para eliminar un registro existente por ID en la tabla Presentación-------------------
  router.delete('/deletePresentacion/:idPresentacion', (req, res) => {
    // Obtén el ID del registro a eliminar desde los parámetros de la URL
    const idPresentacion = req.params.idPresentacion;

    // Realiza la consulta SQL para eliminar el registro por ID
    const sql = 'DELETE FROM presentacion WHERE IDPresentacion = ?';

    // Ejecuta la consulta
    db.query(sql, [idPresentacion], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).json({ error: 'Error al eliminar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado con éxito' });
      }
    });
  });
  //---------------------------------------------------------------------------------------

  // Ruta para leer registros
  //Ruta para leer la tabla Cliente de la Base de Datos--------------------------------
  router.get('/readCliente', (req, res) => {
    // Utiliza la instancia de la base de datos pasada como parámetro
    // Realizar una consulta SQL para seleccionar todos los registros
    const sql = 'SELECT * FROM cliente';

    // Ejecutar la consulta
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al leer registros:', err);
        res.status(500).json({ error: 'Error al leer registros' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla Cliente------------
  router.post('/createCliente', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const { idCliente, nombreUsuarioC, contraseñaC, correoC, telefonoC } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!idCliente || !nombreUsuarioC || !contraseñaC || !correoC || !telefonoC) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO cliente (IDCliente, NombreUsuarioC, ContraseñaC, CorreoC, TelefonoC) VALUES (?, ?, ?, ?, ?)`;
    const values = [idCliente, nombreUsuarioC, contraseñaC, correoC, telefonoC];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar registro:', err);
        res.status(500).json({ error: 'Error al insertar registro' });
      } else {
        // Devuelve el ID del nuevo registro como respuesta
        res.status(201).json({ idCliente });
      }
    }); 
  });
  //----------------------------------------------------------------------------------------

  // Ruta para actualizar un registro existente por ID en la tabla Cliente--------------
  router.put('/updateCliente/:idCliente', (req, res) => {
    // Obtén el ID del registro a actualizar desde los parámetros de la URL
    const idCliente = req.params.idCliente;

    // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
    const { nombreUsuarioC, contraseñaC, correoC, telefonoC } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!nombreUsuarioC || !contraseñaC || !correoC || !telefonoC) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para actualizar el registro por ID
    const sql = `
      UPDATE cliente
      SET NombreUsuarioC = ?, ContraseñaC = ?, CorreoC = ?, TelefonoC = ?
      WHERE IDCliente = ?
    `;

    const values = [nombreUsuarioC, contraseñaC, correoC, telefonoC, idCliente];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al actualizar el registro:', err);
        res.status(500).json({ error: 'Error al actualizar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado con éxito' });
      }
    });
  });
  //-------------------------------------------------------------------------------------

  // Ruta para eliminar un registro existente por ID en la tabla Cliente-------------------
  router.delete('/deleteCliente/:idCliente', (req, res) => {
    // Obtén el ID del registro a eliminar desde los parámetros de la URL
    const idCliente = req.params.idCliente;

    // Realiza la consulta SQL para eliminar el registro por ID
    const sql = 'DELETE FROM cliente WHERE IDCliente = ?';

    // Ejecuta la consulta
    db.query(sql, [idCliente], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).json({ error: 'Error al eliminar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado con éxito' });
      }
    });
  });
  //---------------------------------------------------------------------------------------

  // Ruta para leer registros
  //Ruta para leer la tabla Empleado de la Base de Datos--------------------------------
  router.get('/readEmpleado', (req, res) => {
    // Utiliza la instancia de la base de datos pasada como parámetro
    // Realizar una consulta SQL para seleccionar todos los registros
    const sql = 'SELECT * FROM empleado';

    // Ejecutar la consulta
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al leer registros:', err);
        res.status(500).json({ error: 'Error al leer registros' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla Empleado------------
  router.post('/createEmpleado', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const { idEmpleado, nombreUsuario, contraseña, correo, telefono } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!idEmpleado || !nombreUsuario || !contraseña || !correo || !telefono) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO empleado (IDEmpleado, NombreUsuario, Contraseña, Correo, Telefono) VALUES (?, ?, ?, ?, ?)`;
    const values = [idEmpleado, nombreUsuario, contraseña, correo, telefono];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar registro:', err);
        res.status(500).json({ error: 'Error al insertar registro' });
      } else {
        // Devuelve el ID del nuevo registro como respuesta
        res.status(201).json({ idEmpleado });
      }
    });
  });
  //----------------------------------------------------------------------------------------

  // Ruta para actualizar un registro existente por ID en la tabla Empleado--------------
  router.put('/updateEmpleado/:idEmpleado', (req, res) => {
    // Obtén el ID del registro a actualizar desde los parámetros de la URL
    const idEmpleado = req.params.idEmpleado;

    // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
    const { nombreUsuario, contraseña, correo, telefono } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!nombreUsuario || !contraseña || !correo || !telefono) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para actualizar el registro por ID
    const sql = `
      UPDATE empleado
      SET NombreUsuario = ?, Contraseña = ?, Correo = ?, Telefono = ?
      WHERE IDEmpleado = ?
    `;

    const values = [nombreUsuario, contraseña, correo, telefono, idEmpleado];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al actualizar el registro:', err);
        res.status(500).json({ error: 'Error al actualizar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado con éxito' });
      }
    });
  });
  //-------------------------------------------------------------------------------------

  // Ruta para eliminar un registro existente por ID en la tabla Empleado-------------------
  router.delete('/deleteEmpleado/:idEmpleado', (req, res) => {
    // Obtén el ID del registro a eliminar desde los parámetros de la URL
    const idEmpleado = req.params.idEmpleado;

    // Realiza la consulta SQL para eliminar el registro por ID
    const sql = 'DELETE FROM empleado WHERE IDEmpleado = ?';

    // Ejecuta la consulta
    db.query(sql, [idEmpleado], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).json({ error: 'Error al eliminar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado con éxito' });
      }
    });
  });
  //---------------------------------------------------------------------------------------

  // Ruta para leer registros
  //Ruta para leer la tabla Producto de la Base de Datos--------------------------------
  router.get('/readProducto', (req, res) => {
    // Utiliza la instancia de la base de datos pasada como parámetro
    // Realizar una consulta SQL para seleccionar todos los registros
    const sql = 'SELECT * FROM producto';

    // Ejecutar la consulta
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al leer registros:', err);
        res.status(500).json({ error: 'Error al leer registros' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla Producto------------
  router.post('/createProducto', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const { idProducto, nomProducto, descripProducto, precioProducto, estado, cantProducto, idMarca, idCategoria, idPresentacion } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!idProducto || !nomProducto || !descripProducto || !precioProducto || !estado || !cantProducto || !idMarca || !idCategoria || !idPresentacion) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO producto (IDProducto, NomProducto, DescripProducto, PrecioProducto, Estado, CantProducto, IDMarca, IDCategoria, IDPresentacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [idProducto, nomProducto, descripProducto, precioProducto, estado, cantProducto, idMarca, idCategoria, idPresentacion];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar registro:', err);
        res.status(500).json({ error: 'Error al insertar registro' });
      } else {
        // Devuelve el ID del nuevo registro como respuesta
        res.status(201).json({ idProducto });
      }
    });
  });
  //----------------------------------------------------------------------------------------

  // Ruta para actualizar un registro existente por ID en la tabla Producto--------------
  router.put('/updateProducto/:idProducto', (req, res) => {
    // Obtén el ID del registro a actualizar desde los parámetros de la URL
    const idProducto = req.params.idProducto;

    // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
    const { nomProducto, descripProducto, precioProducto, estado, cantProducto, idMarca, idCategoria, idPresentacion } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!nomProducto || !descripProducto || !precioProducto || !estado || !cantProducto || !idMarca || !idCategoria || !idPresentacion) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para actualizar el registro por ID
    const sql = `
      UPDATE producto
      SET NomProducto = ?, DescripProducto = ?, PrecioProducto = ?, Estado = ?, CantProducto = ?, IDMarca = ?, IDCategoria = ?, IDPresentacion = ?
      WHERE IDProducto = ?
    `;

    const values = [nomProducto, descripProducto, precioProducto, estado, cantProducto, idMarca, idCategoria, idPresentacion, idProducto];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al actualizar el registro:', err);
        res.status(500).json({ error: 'Error al actualizar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado con éxito' });
      }
    });
  });
  //-------------------------------------------------------------------------------------

  // Ruta para eliminar un registro existente por ID en la tabla Producto-------------------
  router.delete('/deleteProducto/:idProducto', (req, res) => {
    // Obtén el ID del registro a eliminar desde los parámetros de la URL
    const idProducto = req.params.idProducto;

    // Realiza la consulta SQL para eliminar el registro por ID
    const sql = 'DELETE FROM producto WHERE IDProducto = ?';

    // Ejecuta la consulta
    db.query(sql, [idProducto], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).json({ error: 'Error al eliminar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado con éxito' });
      }
    });
  });
  //---------------------------------------------------------------------------------------

  // Ruta para leer registros
  //Ruta para leer la tabla Servicio de la Base de Datos--------------------------------
  router.get('/readServicio', (req, res) => {
    // Utiliza la instancia de la base de datos pasada como parámetro
    // Realizar una consulta SQL para seleccionar todos los registros
    const sql = 'SELECT * FROM servicio';

    // Ejecutar la consulta
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al leer registros:', err);
        res.status(500).json({ error: 'Error al leer registros' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla Servicio------------
  router.post('/createServicio', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const { idServicio, nombreS, estadoS, descripcion } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!idServicio || !nombreS || !estadoS || !descripcion) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO  servicio (IDServicio, NombreS, EstadoS, Descripcion) VALUES (?, ?, ?, ?)`;
    const values = [idServicio, nombreS, estadoS, descripcion];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar registro:', err);
        res.status(500).json({ error: 'Error al insertar registro' });
      } else {
        // Devuelve el ID del nuevo registro como respuesta
        res.status(201).json({ idServicio });
      }
    });
  });
  //----------------------------------------------------------------------------------------

  // Ruta para actualizar un registro existente por ID en la tabla Servicio--------------
  router.put('/updateServicio/:idServicio', (req, res) => {
    // Obtén el ID del registro a actualizar desde los parámetros de la URL
    const idServicio = req.params.idServicio;

    // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
    const { nombreS, estadoS, descripcion } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!nombreS || !estadoS || !descripcion) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para actualizar el registro por ID
    const sql = `
      UPDATE servicio
      SET NombreS = ?, EstadoS = ?, Descripcion = ?
      WHERE IDServicio = ?
    `;

    const values = [nombreS, estadoS, descripcion, idServicio];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al actualizar el registro:', err);
        res.status(500).json({ error: 'Error al actualizar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado con éxito' });
      }
    });
  });
  //-------------------------------------------------------------------------------------

  // Ruta para eliminar un registro existente por ID en la tabla Servicio-------------------
  router.delete('/deleteServicio/:idServicio', (req, res) => {
    // Obtén el ID del registro a eliminar desde los parámetros de la URL
    const idServicio = req.params.idServicio;

    // Realiza la consulta SQL para eliminar el registro por ID
    const sql = 'DELETE FROM servicio WHERE IDServicio = ?';

    // Ejecuta la consulta
    db.query(sql, [idServicio], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).json({ error: 'Error al eliminar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado con éxito' });
      }
    });
  });
  //---------------------------------------------------------------------------------------

  // Ruta para leer registros
  //Ruta para leer la tabla ServicioCliente de la Base de Datos--------------------------------
  router.get('/readServicioCliente', (req, res) => {
    // Utiliza la instancia de la base de datos pasada como parámetro
    // Realizar una consulta SQL para seleccionar todos los registros
    const sql = 'SELECT * FROM serviciocliente';

    // Ejecutar la consulta
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al leer registros:', err);
        res.status(500).json({ error: 'Error al leer registros' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla ServicioCliente------------
  router.post('/createServicioCliente', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const { idServicioCliente, idCliente, idServicio, fechaSolicitud, fechaCita } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!idServicioCliente || !idCliente || !idServicio || !fechaSolicitud || !fechaCita) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO serviciocliente (IDServicioCliente, IDCliente, IDServicio, FechaSolicitud, FechaCita) VALUES (?, ?, ?, ?, ?)`;
    const values = [idServicioCliente, idCliente, idServicio, fechaSolicitud, fechaCita];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar registro:', err);
        res.status(500).json({ error: 'Error al insertar registro' });
      } else {
        // Devuelve el ID del nuevo registro como respuesta
        res.status(201).json({ idServicioCliente });
      }
    });
  });
  //----------------------------------------------------------------------------------------

  // Ruta para actualizar un registro existente por ID en la tabla ServicioCliente--------------
  router.put('/updateServicioCliente/:idServicioCliente', (req, res) => {
    // Obtén el ID del registro a actualizar desde los parámetros de la URL
    const idServicioCliente = req.params.idServicioCliente;

    // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
    const { idCliente, idServicio, fechaSolicitud, fechaCita } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!idCliente || !idServicio || !fechaSolicitud || !fechaCita) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para actualizar el registro por ID
    const sql = `
      UPDATE serviciocliente
      SET IDCliente = ?, IDServicio = ?, FechaSolicitud = ?, FechaCita = ?
      WHERE IDServicioCliente = ?
    `;

    const values = [idCliente, idServicio, fechaSolicitud, fechaCita, idServicioCliente];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al actualizar el registro:', err);
        res.status(500).json({ error: 'Error al actualizar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado con éxito' });
      }
    });
  });
  //-------------------------------------------------------------------------------------

  // Ruta para eliminar un registro existente por ID en la tabla ServicioCliente-------------------
  router.delete('/deleteServicioCliente/:idServicioCliente', (req, res) => {
    // Obtén el ID del registro a eliminar desde los parámetros de la URL
    const idServicioCliente = req.params.idServicioCliente;

    // Realiza la consulta SQL para eliminar el registro por ID
    const sql = 'DELETE FROM serviciocliente WHERE IDServicioCliente = ?';

    // Ejecuta la consulta
    db.query(sql, [idServicioCliente], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).json({ error: 'Error al eliminar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado con éxito' });
      }
    });
  });
  //---------------------------------------------------------------------------------------

  // Ruta para leer registros
  //Ruta para leer la tabla Pago de la Base de Datos--------------------------------
  router.get('/readPago', (req, res) => {
    // Utiliza la instancia de la base de datos pasada como parámetro
    // Realizar una consulta SQL para seleccionar todos los registros
    const sql = 'SELECT * FROM pago';

    // Ejecutar la consulta
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al leer registros:', err);
        res.status(500).json({ error: 'Error al leer registros' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla Pago------------
  router.post('/createPago', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const { idPago, fechaHoraPago, totalPago } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!idPago || !fechaHoraPago || !totalPago) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO pago (IDPago, FechaHoraPago, TotalPago) VALUES (?, ?, ?)`;
    const values = [idPago, fechaHoraPago, totalPago];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar registro:', err);
        res.status(500).json({ error: 'Error al insertar registro' });
      } else {
        // Devuelve el ID del nuevo registro como respuesta
        res.status(201).json({ idPago });
      }
    });
  });
  //----------------------------------------------------------------------------------------

  // Ruta para actualizar un registro existente por ID en la tabla Pago--------------
  router.put('/updatePago/:idPago', (req, res) => {
    // Obtén el ID del registro a actualizar desde los parámetros de la URL
    const idPago = req.params.idPago;

    // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
    const { totalPago } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!totalPago) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para actualizar el registro por ID
    const sql = `
      UPDATE pago
      SET TotalPago = ?
      WHERE IDPago = ?
    `;

    const values = [totalPago, idPago];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al actualizar el registro:', err);
        res.status(500).json({ error: 'Error al actualizar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado con éxito' });
      }
    });
  });
  //-------------------------------------------------------------------------------------

  // Ruta para eliminar un registro existente por ID en la tabla Pago-------------------
  router.delete('/deletePago/:idPago', (req, res) => {
    // Obtén el ID del registro a eliminar desde los parámetros de la URL
    const idPago = req.params.idPago;

    // Realiza la consulta SQL para eliminar el registro por ID
    const sql = 'DELETE FROM pago WHERE IDPago = ?';

    // Ejecuta la consulta
    db.query(sql, [idPago], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).json({ error: 'Error al eliminar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado con éxito' });
      }
    });
  });
  //---------------------------------------------------------------------------------------

  // Ruta para leer registros
  //Ruta para leer la tabla Compra de la Base de Datos--------------------------------
  router.get('/readCompra', (req, res) => {
    // Utiliza la instancia de la base de datos pasada como parámetro
    // Realizar una consulta SQL para seleccionar todos los registros
    const sql = 'SELECT * FROM compra';

    // Ejecutar la consulta
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al leer registros:', err);
        res.status(500).json({ error: 'Error al leer registros' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla Compra------------
  router.post('/createCompra', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const { idCompra, idEmpleado, idCliente, fechaHoraCompra, direcCompra, idPago, estadoC } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!idCompra || !idEmpleado || !idCliente || !fechaHoraCompra || !direcCompra || !idPago || !estadoC) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO compra (IDCompra, IDEmpleado, IDCliente, FechaHoraCompra, DirecCompra, IDPago, EstadoC) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [idCompra, idEmpleado, idCliente, fechaHoraCompra, direcCompra, idPago, estadoC];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar registro:', err);
        res.status(500).json({ error: 'Error al insertar registro' });
      } else {
        // Devuelve el ID del nuevo registro como respuesta
        res.status(201).json({ idCompra });
      }
    });
  });
  //----------------------------------------------------------------------------------------

  // Ruta para actualizar un registro existente por ID en la tabla Compra--------------
  router.put('/updateCompra/:idCompra', (req, res) => {
    // Obtén el ID del registro a actualizar desde los parámetros de la URL
    const idCompra = req.params.idCompra;

    // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
    const { idEmpleado, idCliente, direcCompra, idPago, estadoC } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!idEmpleado || !idCliente || !direcCompra || !idPago || !estadoC) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para actualizar el registro por ID
    const sql = `
      UPDATE compra
      SET IDEmpleado = ?, IDCliente = ?, DirecCompra = ?, IDPago = ?, EstadoC = ?
      WHERE IDCompra = ?
    `;

    const values = [idEmpleado, idCliente, direcCompra, idPago, estadoC, idCompra];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al actualizar el registro:', err);
        res.status(500).json({ error: 'Error al actualizar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado con éxito' });
      }
    });
  });
  //-------------------------------------------------------------------------------------

  // Ruta para eliminar un registro existente por ID en la tabla Compra-------------------
  router.delete('/deleteCompra/:idCompra', (req, res) => {
    // Obtén el ID del registro a eliminar desde los parámetros de la URL
    const idCompra = req.params.idCompra;

    // Realiza la consulta SQL para eliminar el registro por ID
    const sql = 'DELETE FROM compra WHERE IDCompra = ?';

    // Ejecuta la consulta
    db.query(sql, [idCompra], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).json({ error: 'Error al eliminar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado con éxito' });
      }
    });
  });
  //---------------------------------------------------------------------------------------

  // Ruta para leer registros
  //Ruta para leer la tabla CompraProducto de la Base de Datos--------------------------------
  router.get('/readCompraProducto', (req, res) => {
    // Utiliza la instancia de la base de datos pasada como parámetro
    // Realizar una consulta SQL para seleccionar todos los registros
    const sql = 'SELECT * FROM compraproducto';

    // Ejecutar la consulta
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al leer registros:', err);
        res.status(500).json({ error: 'Error al leer registros' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla CompraProducto------------
  router.post('/createCompraProducto', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const { idCompraProducto, idProducto, idCompra, cantProductos, precio } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!idCompraProducto || !idProducto || !idCompra || !cantProductos || !precio) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO compraproducto (IDCompraProducto, IDProducto, IDCompra, CantProductos, Precio) VALUES (?, ?, ?, ?, ?)`;
    const values = [idCompraProducto, idProducto, idCompra, cantProductos, precio];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar registro:', err);
        res.status(500).json({ error: 'Error al insertar registro' });
      } else {
        // Devuelve el ID del nuevo registro como respuesta
        res.status(201).json({ idCompraProducto });
      }
    });
  });
  //----------------------------------------------------------------------------------------

  // Ruta para actualizar un registro existente por ID en la tabla CompraProducto--------------
  router.put('/updateCompraProducto/:idCompraProducto', (req, res) => {
    // Obtén el ID del registro a actualizar desde los parámetros de la URL
    const idCompraProducto = req.params.idCompraProducto;

    // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
    const { idProducto, idCompra, cantProductos, precio } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!idProducto || !idCompra || !cantProductos || !precio) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para actualizar el registro por ID
    const sql = `
      UPDATE compraproducto
      SET IDProducto = ?, IDCompra = ?, CantProductos = ?, Precio = ?
      WHERE IDCompraProducto = ?
    `;

    const values = [idProducto, idCompra, cantProductos, precio, idCompraProducto];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al actualizar el registro:', err);
        res.status(500).json({ error: 'Error al actualizar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado con éxito' });
      }
    });
  });
  //-------------------------------------------------------------------------------------

  // Ruta para eliminar un registro existente por ID en la tabla CompraProducto-------------------
  router.delete('/deleteCompraProducto/:idCompraProducto', (req, res) => {
    // Obtén el ID del registro a eliminar desde los parámetros de la URL
    const idCompraProducto = req.params.idCompraProducto;

    // Realiza la consulta SQL para eliminar el registro por ID
    const sql = 'DELETE FROM compraproducto WHERE IDCompraProducto = ?';

    // Ejecuta la consulta
    db.query(sql, [idCompraProducto], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).json({ error: 'Error al eliminar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado con éxito' });
      }
    });
  });
  //---------------------------------------------------------------------------------------

  return router;
};

