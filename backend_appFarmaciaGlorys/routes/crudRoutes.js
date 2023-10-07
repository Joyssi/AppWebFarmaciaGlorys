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
        console.error('Error al leer los registros de la tabla categoria:', err);
        res.status(500).json({ error: 'Error al leer los registros de la tabla categoria' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });

  //Sentencia
  //curl http://localhost:5000/crud/readCategoria
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla Categoria------------
  router.post('/createCategoria', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const { nombreCategoria } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!nombreCategoria) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO categoria (NombreCategoria) VALUES (?)`;
    const values = [nombreCategoria];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar un registro en la tabla categoria:', err);
        res.status(500).json({ error: 'Error al insertar un registro en la tabla categoria' });
      } else {
        // Devuelve un mensaje como respuesta
        res.status(201).json({ message: 'Registro agregado exitosamente' });
      }
    });
  });
  
  //Sentencia
  //curl -X POST -H "Content-Type: application/json" -d "{\"nombreCategoria\":\"Fitofármaco\"}" http://localhost:5000/crud/createCategoria
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
        console.error('Error al actualizar el registro de la tabla categoria:', err);
        res.status(500).json({ error: 'Error al actualizar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X PUT -H "Content-Type: application/json" -d "{\"nombreCategoria\":\"Biológico\"}" http://localhost:5000/crud/updateCategoria/1
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
        res.status(500).json({ error: 'Error al eliminar el registro de la tabla categoria' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X DELETE http://localhost:5000/crud/deleteCategoria/1
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
        res.status(500).json({ error: 'Error al leer registros de la tabla marca' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });

  //Sentencia 
  //curl http://localhost:5000/crud/readMarca
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla Marca------------
  router.post('/createMarca', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const {nombreMarca } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!nombreMarca) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO marca (NombreMarca) VALUES (?)`;
    const values = [nombreMarca];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar un registro en la tabla marca:', err);
        res.status(500).json({ error: 'Error al insertar un registro en la tabla marca' });
      } else {
        // Devuelve un mensaje como respuesta
        res.status(201).json({ message: 'Registro agregado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X POST -H "Content-Type: application/json" -d "{\"nombreMarca\":\"RAMOS\"}" http://localhost:5000/crud/createMarca
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
        console.error('Error al actualizar el registro de la tabla marca:', err);
        res.status(500).json({ error: 'Error al actualizar el registro de la tabla marca' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X PUT -H "Content-Type: application/json" -d "{\"nombreMarca\":\"PASHA S.A\"}" http://localhost:5000/crud/updateMarca/1
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
        console.error('Error al eliminar un registro de la tabla marca:', err);
        res.status(500).json({ error: 'Error al eliminar un registro de la tabla marca' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X DELETE http://localhost:5000/crud/deleteMarca/1
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
        console.error('Error al leer los registros de la tabla presentación:', err);
        res.status(500).json({ error: 'Error al leer los registros de la tabla presentación' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });

  //Sentencia
  //curl http://localhost:5000/crud/readPresentacion
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla Presentación------------
  router.post('/createPresentacion', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const {formaDosificacion } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!formaDosificacion) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO presentacion (FormaDosificacion) VALUES (?)`;
    const values = [formaDosificacion];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar un registro en la tabla presentación:', err);
        res.status(500).json({ error: 'Error al insertar un registro en la tabla presentación' });
      } else {
        // Devuelve un mensaje como respuesta
        res.status(201).json({ message: 'Registro agregado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X POST -H "Content-Type: application/json" -d "{\"formaDosificacion\":\"Tableta\"}" http://localhost:5000/crud/createPresentacion
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
        console.error('Error al actualizar un registro de la tabla presentacion:', err);
        res.status(500).json({ error: 'Error al actualizar un registro de la tabla presentacion' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X PUT -H "Content-Type: application/json" -d "{\"formaDosificacion\":\"Crema\"}" http://localhost:5000/crud/updatePresentacion/1
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
        console.error('Error al eliminar un registro de la tabla presentación:', err);
        res.status(500).json({ error: 'Error al eliminar un registro de la tabla presentación' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X DELETE http://localhost:5000/crud/deletePresentacion/1
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
        console.error('Error al leer los registros de la tabla cliente:', err);
        res.status(500).json({ error: 'Error al leer los registros de la tabla cliente' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });
  
  //Sentencia
  //curl http://localhost:5000/crud/readCliente
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla Cliente------------
  router.post('/createCliente', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const {nombreUsuarioC, contraseñaC, correoC, telefonoC } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!nombreUsuarioC || !contraseñaC || !correoC || !telefonoC) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO cliente (NombreUsuarioC, ContraseñaC, CorreoC, TelefonoC) VALUES (?, ?, ?, ?)`;
    const values = [nombreUsuarioC, contraseñaC, correoC, telefonoC];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar un registro en la tabla cliente:', err);
        res.status(500).json({ error: 'Error al insertar un registro en la tabla cliente' });
      } else {
        // Devuelve un mensaje como respuesta
        res.status(201).json({ message: 'Registro agregado exitosamente' });
      }
    }); 
  });

  //Sentencia
  //curl -X POST -H "Content-Type: application/json" -d "{\"nombreUsuarioC\":\"Joy\",\"contraseñaC\":\"123joy\",\"correoC\":\"joyssicruz5@gmail.com\",\"telefonoC\":\"86962747\"}" http://localhost:5000/crud/createCliente
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
        console.error('Error al actualizar un registro de la tabla cliente:', err);
        res.status(500).json({ error: 'Error al actualizar un registro de la tabla cliente' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado exitosamente' });
      }
    });
  });
  
  //Sentencia
  //curl -X PUT -H "Content-Type: application/json" -d "{\"nombreUsuarioC\":\"Elieth\",\"contraseñaC\":\"elieth12\",\"correoC\":\"izaduartes2214@gmail.com\",\"telefonoC\":\"57736281\"}" http://localhost:5000/crud/updateCliente/1
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
        console.error('Error al eliminar un registro de la tabla cliente:', err);
        res.status(500).json({ error: 'Error al eliminar un registro de la tabla cliente' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X DELETE http://localhost:5000/crud/deleteCliente/1
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
        console.error('Error al leer los registros de la tabla empleado:', err);
        res.status(500).json({ error: 'Error al leer los registros de la tabla empleado' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });

  //Sentencia
  //curl http://localhost:5000/crud/readEmpleado
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla Empleado------------
  router.post('/createEmpleado', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const {nombreUsuario, contraseña, correo, telefono } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!nombreUsuario || !contraseña || !correo || !telefono) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO empleado (NombreUsuario, Contraseña, Correo, Telefono) VALUES (?, ?, ?, ?)`;
    const values = [nombreUsuario, contraseña, correo, telefono];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar un registro en la tabla empleado:', err);
        res.status(500).json({ error: 'Error al insertar un registro en la tabla empleado' });
      } else {
        // Devuelve un mensaje como respuesta
        res.status(201).json({ message: 'Registro agregado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X POST -H "Content-Type: application/json" -d "{\"nombreUsuario\":\"Flor\",\"contraseña\":\"5423F\",\"correo\":\"flor123@gmail.com\",\"telefono\":\"57395726\"}" http://localhost:5000/crud/createEmpleado
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
        console.error('Error al actualizar un registro de la tabla empleado:', err);
        res.status(500).json({ error: 'Error al actualizar un registro de la tabla empleado' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X PUT -H "Content-Type: application/json" -d "{\"nombreUsuario\":\"Heysel\",\"contraseña\":\"muchi345\",\"correo\":\"heyselsmith@gmail.com\",\"telefono\":\"87673073\"}" http://localhost:5000/crud/updateEmpleado/1
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
        console.error('Error al eliminar un registro de la tabla empleado:', err);
        res.status(500).json({ error: 'Error al eliminar un registro de la tabla empleado' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X DELETE http://localhost:5000/crud/deleteEmpleado/1
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
        console.error('Error al leer los registros de la tabla producto:', err);
        res.status(500).json({ error: 'Error al leer los registros de la tabla producto' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });

  //Sentencia
  //curl http://localhost:5000/crud/readProducto
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla Producto------------
  router.post('/createProducto', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const {nomProducto, descripProducto, precioProducto, estado, cantProducto, idMarca, idCategoria, idPresentacion } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!nomProducto || !descripProducto || !precioProducto || !estado || !cantProducto || !idMarca || !idCategoria || !idPresentacion) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO producto (NomProducto, DescripProducto, PrecioProducto, Estado, CantProducto, IDMarca, IDCategoria, IDPresentacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [nomProducto, descripProducto, precioProducto, estado, cantProducto, idMarca, idCategoria, idPresentacion];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar un registro en la tabla producto:', err);
        res.status(500).json({ error: 'Error al insertar un registro en la tabla producto' });
      } else {
        // Devuelve un mensaje como respuesta
        res.status(201).json({ message: 'Registro agregado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X POST -H "Content-Type: application/json" -d "{\"nomProducto\":\"Ambroxol\",\"descripProducto\":\"Producto sabor a banana\",\"precioProducto\":40.5,\"estado\":\"DISPONIBLE\",\"cantProducto\":500,\"idMarca\":1,\"idCategoria\":1,\"idPresentacion\":1}" http://localhost:5000/crud/createProducto
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
        console.error('Error al actualizar un registro de la tabla producto:', err);
        res.status(500).json({ error: 'Error al actualizar un registro de la tabla producto' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X PUT -H "Content-Type: application/json" -d "{\"nomProducto\":\"Loratadina\",\"descripProducto\":\"Producto para la alergia\",\"precioProducto\":5.5,\"estado\":\"AGOTADO\",\"cantProducto\":50,\"idMarca\":1,\"idCategoria\":1,\"idPresentacion\":1}" http://localhost:5000/crud/updateProducto/1
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
        console.error('Error al eliminar un registro de la tabla producto:', err);
        res.status(500).json({ error: 'Error al eliminar un registro de la tabla producto' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X DELETE http://localhost:5000/crud/deleteProducto/1
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
        console.error('Error al leer los registros de la tabla servicio:', err);
        res.status(500).json({ error: 'Error al leer los registros de la tabla servicio' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });

  //Sentencia
  //curl http://localhost:5000/crud/readServicio
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla Servicio------------
  router.post('/createServicio', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const {nombreS, estadoS, descripcion } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!nombreS || !estadoS || !descripcion) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO  servicio (NombreS, EstadoS, Descripcion) VALUES (?, ?, ?)`;
    const values = [nombreS, estadoS, descripcion];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar un registro en la tabla servicio:', err);
        res.status(500).json({ error: 'Error al insertar un registro en la tabla servicio' });
      } else {
        // Devuelve un mensaje como respuesta
        res.status(201).json({ message: 'Registro agregado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X POST -H "Content-Type: application/json" -d "{\"nombreS\":\"Ultrasonidos\",\"estadoS\":\"DISPONIBLE\",\"descripcion\":\"Aprovecha la oferta ya, agenda tu cita ahora mismo\"}"  http://localhost:5000/crud/createServicio
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
        console.error('Error al actualizar un registro de la tabla servicio:', err);
        res.status(500).json({ error: 'Error al actualizar un registro de la tabla servicio' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X PUT -H "Content-Type: application/json" -d "{\"nombreS\":\"Consulta médica\",\"estadoS\":\"EN ESPERA\",\"descripcion\":\"Consultas médicas gratis, agenda tu cita ahora mismo\"}" http://localhost:5000/crud/updateServicio/1
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
        console.error('Error al eliminar un registro de la tabla servicio:', err);
        res.status(500).json({ error: 'Error al eliminar un registro de la tabla servicio' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X DELETE http://localhost:5000/crud/deleteServicio/1
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
        console.error('Error al leer los registros de la tabla servicio_cliente:', err);
        res.status(500).json({ error: 'Error al leer los registros de la tabla servicio_cliente' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });

  //Sentencia
  //curl http://localhost:5000/crud/readServicioCliente
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla ServicioCliente------------
  router.post('/createServicioCliente', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const {idCliente, idServicio,fechaCita } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!idCliente || !idServicio || !fechaCita) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO serviciocliente (IDCliente, IDServicio, FechaCita) VALUES (?, ?, ?)`;
    const values = [idCliente, idServicio, fechaCita];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar un registro en la tabla servicio_cliente:', err);
        res.status(500).json({ error: 'Error al insertar un registro en la tabla servicio_cliente' });
      } else {
        // Devuelve un mensaje como respuesta
        res.status(201).json({ message: 'Registro agregado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X POST -H "Content-Type: application/json" -d "{\"idCliente\":1,\"idServicio\":1,\"fechaCita\":\"2023-09-13 08:50:00\"}" http://localhost:5000/crud/createServicioCliente
  //----------------------------------------------------------------------------------------

  // Ruta para actualizar un registro existente por ID en la tabla ServicioCliente--------------
  router.put('/updateServicioCliente/:idServicioCliente', (req, res) => {
    // Obtén el ID del registro a actualizar desde los parámetros de la URL
    const idServicioCliente = req.params.idServicioCliente;

    // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
    const { idCliente, idServicio, fechaCita } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!idCliente || !idServicio || !fechaCita) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para actualizar el registro por ID
    const sql = `
      UPDATE serviciocliente
      SET IDCliente = ?, IDServicio = ?, FechaCita = ?
      WHERE IDServicioCliente = ?
    `;

    const values = [idCliente, idServicio, fechaCita, idServicioCliente];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al actualizar un registro de la tabla servicio_cliente:', err);
        res.status(500).json({ error: 'Error al actualizar un registro de la tabla servicio_cliente' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X PUT -H "Content-Type: application/json" -d "{\"idCliente\":1,\"idServicio\":1,\"fechaCita\":\"2023-10-15 01:30:00\"}" http://localhost:5000/crud/updateServicioCliente/1
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
        console.error('Error al eliminar un registro de la tabla servicio_cliente:', err);
        res.status(500).json({ error: 'Error al eliminar un registro de la tabla servicio_cliente' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X DELETE http://localhost:5000/crud/deleteServicioCliente/1
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
        console.error('Error al leer los registros de la tabla pago:', err);
        res.status(500).json({ error: 'Error al leer los registros de la tabla pago' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });

  //Sentencia
  //curl http://localhost:5000/crud/readPago
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla Pago------------
  router.post('/createPago', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const {totalPago } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!totalPago) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO pago (TotalPago) VALUES (?)`;
    const values = [totalPago];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar un registro en la tabla pago:', err);
        res.status(500).json({ error: 'Error al insertar un registro en la tabla pago' });
      } else {
        // Devuelve un mensaje como respuesta
        res.status(201).json({ message: 'Registro agregado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X POST -H "Content-Type: application/json" -d "{\"totalPago\":450}" http://localhost:5000/crud/createPago
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
        console.error('Error al actualizar un registro de la tabla pago:', err);
        res.status(500).json({ error: 'Error al actualizar un registro de la tabla pago' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X PUT -H "Content-Type: application/json" -d "{\"totalPago\":500}" http://localhost:5000/crud/updatePago/1
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
        console.error('Error al eliminar un registro de la tabla pago:', err);
        res.status(500).json({ error: 'Error al eliminar un registro de la tabla pago' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X DELETE http://localhost:5000/crud/deletePago/1
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
        console.error('Error al leer los registros de la tabla compra:', err);
        res.status(500).json({ error: 'Error al leer los registros de la tabla compra' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });

  //Sentencia
  //curl http://localhost:5000/crud/readCompra
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla Compra------------
  router.post('/createCompra', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const {idEmpleado, idCliente,direcCompra, idPago, estadoC } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!idEmpleado || !idCliente || !direcCompra || !idPago || !estadoC) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO compra (IDEmpleado, IDCliente, DirecCompra, IDPago, EstadoC) VALUES (?, ?, ?, ?, ?)`;
    const values = [idEmpleado, idCliente,  direcCompra, idPago, estadoC];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar un registro en la tabla compra:', err);
        res.status(500).json({ error: 'Error al insertar un registro en la tabla compra' });
      } else {
        // Devuelve un mensaje como respuesta
        res.status(201).json({ message: 'Registro agregado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X POST -H "Content-Type: application/json" -d "{\"idEmpleado\":1,\"idCliente\":1,\"direcCompra\":\"Frente al complejo judicial\",\"idPago\":1,\"estadoC\":\"EN PROCESO\"}" http://localhost:5000/crud/createCompra
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
        console.error('Error al actualizar un registro de la tabla compra:', err);
        res.status(500).json({ error: 'Error al actualizar un registro de la tabla compra' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X PUT -H "Content-Type: application/json" -d "{\"idEmpleado\":1,\"idCliente\":1,\"direcCompra\":\"Iglesia Divino Niño 2 cuadras al Oeste\",\"idPago\":1,\"estadoC\":\"ENTREGADA\"}" http://localhost:5000/crud/updateCompra/1
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
        console.error('Error al eliminar un registro de la tabla compra:', err);
        res.status(500).json({ error: 'Error al eliminar un registro de la tabla compra' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X DELETE http://localhost:5000/crud/deleteCompra/1
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
        console.error('Error al leer los registros de la tabla compra_producto:', err);
        res.status(500).json({ error: 'Error al leer los registros de la tabla compra_producto' });
      } else {
        // Devolver los registros en formato JSON como respuesta
        res.status(200).json(result);
      }
    });
  });

  //Sentencia
  //curl http://localhost:5000/crud/readCompraProducto
  //--------------------------------------------------------------------------------------

  // Ruta para crear un nuevo registro con ID específico en la tabla CompraProducto------------
  router.post('/createCompraProducto', (req, res) => {
    // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
    const {idProducto, idCompra, cantProductos, precio } = req.body;

    // Verifica si se proporcionaron los datos necesarios
    if (!idProducto || !idCompra || !cantProductos || !precio) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Realiza la consulta SQL para insertar un nuevo registro con ID específico
    const sql = `INSERT INTO compraproducto (IDProducto, IDCompra, CantProductos, Precio) VALUES (?, ?, ?, ?)`;
    const values = [idProducto, idCompra, cantProductos, precio];

    // Ejecuta la consulta
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar un registro en la tabla compra_producto:', err);
        res.status(500).json({ error: 'Error al insertar un registro en la tabla compra_producto' });
      } else {
        // Devuelve un mensaje como respuesta
        res.status(201).json({ message: 'Registro agregado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X POST -H "Content-Type: application/json" -d "{\"idProducto\":2,\"idCompra\":1,\"cantProductos\":35,\"precio\":340}" http://localhost:5000/crud/createCompraProducto
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
        console.error('Error al actualizar un registro de la tabla compra_producto:', err);
        res.status(500).json({ error: 'Error al actualizar un registro de la tabla compra_producto' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro actualizado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X PUT -H "Content-Type: application/json" -d "{\"idProducto\":1,\"idCompra\":1,\"cantProductos\":3,\"precio\":150}" http://localhost:5000/crud/updateCompraProducto/1
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
        console.error('Error al eliminar un registro de la tabla compra_producto:', err);
        res.status(500).json({ error: 'Error al eliminar un registro de la tabla compra_producto' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado exitosamente' });
      }
    });
  });

  //Sentencia
  //curl -X DELETE http://localhost:5000/crud/deleteCompraProducto/1
  //---------------------------------------------------------------------------------------

  return router;
};

