 USE farmaciaglorys;
 
 /*Creación de procedimientos almacenados*/
 /*Procedimientos almacenados de la tabla Empleado--------------------------------------------------*/
 /*Procedimiento almacenado para insertar un nuevo registro*/
 DELIMITER $
 CREATE PROCEDURE InsertarEmpleado (IN correo NVARCHAR(30), IN telefono VARCHAR(8))
 BEGIN
 INSERT INTO empleado (NombreUsuario, Contraseña, Correo, Telefono)
 VALUES (nombre, contraseña, correo, telefono);
 END $
 
 CALL InsertarEmpleado ( 'Heysel', '123H', 'heysel@gmail.com', '86962747');
 
 /*Procedimiento almacenado para actualizar un registro de la tabla Empleado*/
 DELIMITER $
 CREATE PROCEDURE ActualizarEmpleado (IN idEmpleado INT ,IN nombre VARCHAR(18), IN contraseña VARCHAR(8),
 IN correo NVARCHAR(30), IN telefono VARCHAR(8))
 BEGIN
 UPDATE empleado
 SET NombreUsuario = nombre, Contraseña = contraseña, Correo = correo, Telefono = telefono
 WHERE IDEmpleado = idEmpleado;
 END $
 
CALL ActualizarEmpleado (1, 'Flor', '123', 'florcita02@gmail,com', '23546756');
 
 /*Procedimiento almacenado para eliminar un registro de la tabla Empleado*/
 DELIMITER $
 CREATE PROCEDURE EliminarEmpleado (IN idEmpleado INT)
 BEGIN
 DELETE FROM empleado 
 WHERE IDEmpleado = idEmpleado;
 END $
 
 CALL EliminarEmpleado (1);
 
 /*Procedimiento almacenado para mostrar los registro de la tabla Empleado*/
 DELIMITER $
 CREATE PROCEDURE MostrarEmpleado()
 BEGIN
 SELECT IDEmpleado, NombreUsuario, Contraseña, Correo, Telefono
 FROM empleado;
 END $
 
 CALL MostrarEmpleado;
 
 /*Procedimientos almacenados de la tabla Cliente---------------------------------------------------*/
 /*Procedimiento almacenado para insertar un nuevo registro*/
  DELIMITER $
  CREATE PROCEDURE InsertarCliente (IN nombreC VARCHAR(18), IN contraseñaC VARCHAR(8),
  IN correoC NVARCHAR(30), IN telefonoC VARCHAR(8))
  BEGIN
  INSERT INTO cliente (NombreUsuarioC, ContraseñaC, CorreoC, TelefonoC)
  VALUES (nombreC, contraseñaC, correoC, telefonoC);
  END $
  
  CALL InsertarCliente ('María', 'my456', 'mariaS@gmail.com', '88569875');
  
  /*Procedimiento almacenado para actualizar un registro de la tabla Cliente*/
  DELIMITER $
  CREATE PROCEDURE ActualizarCliente (IN idCliente INT ,IN nombreC VARCHAR(18), IN contraseñaC VARCHAR(8),
  IN correoC NVARCHAR(30), IN telefonoC VARCHAR(8))
  BEGIN
  UPDATE cliente
  SET NombreUsuario = nombreC, ContraseñaC = contraseñaC, CorreoC = correoC, TelefonoC = telefonoC
  WHERE IDCliente = idCliente;
  END $
  
  CALL ActualizarCliente (1, 'julio', '43267J', 'julito23@gmail.com', '43568790');
  
  /*Procedimiento almacenado para eliminar un registro de la tabla Cliente*/
 DELIMITER $
 CREATE PROCEDURE EliminarCliente (IN idCliente INT)
 BEGIN
 DELETE FROM cliente
 WHERE IDCliente = idCliente;
 END $
 
 CALL EliminarCliente (1);
 
 /*Procedimiento almacenado para mostrar los registro de la tabla Cliente*/
 DELIMITER $
 CREATE PROCEDURE MostrarCliente()
 BEGIN
 SELECT IDCliente, NombreUsuarioC, ContraseñaC, CorreoC, TelefonoC
 FROM cliente;
 END $
 
 CALL MostrarCliente;
  
  /*Procedimientos almacenados de la tabla Marca----------------------------------------------------*/
  /*Procedimiento almacenado para insertar un nuevo registro*/
  DELIMITER $
  CREATE PROCEDURE InsertarMarca (IN nombreM VARCHAR(20))
  BEGIN
  INSERT INTO marca (NombreMarca)
  VALUES (nombreM);
  END $
  
  CALL InsertarMarca ('RAMOS');
  
  /*Procedimiento almacenado para actualizar un registro de la tabla Marca*/
  DELIMITER $
  CREATE PROCEDURE ActualizarMarca (IN idMarca INT ,IN nombreM VARCHAR(20))
  BEGIN
  UPDATE marca
  SET NombreMarca = nombreM
  WHERE IDMarca = idMarca;
  END $ 
  
  CALL ActualizarMarca (1, 'REMOX');
  
  /*Procedimiento almacenado para eliminar un registro de la tabla Marca*/
 DELIMITER $
 CREATE PROCEDURE EliminarMarca (IN idMarca INT)
 BEGIN
 DELETE FROM marca
 WHERE IDMarca = idMarca;
 END $
 
 CALL EliminarMarca (1);
 
 /*Procedimiento almacenado para mostrar los registro de la tabla Marca*/
 DELIMITER $
 CREATE PROCEDURE MostrarMarca()
 BEGIN
 SELECT IDMarca, NombreMarca
 FROM marca;
 END $
 
 CALL MostrarMarca;
  
  /*Procedimientos almacenados de la tabla Categoría------------------------------------------------*/
  /*Procedimiento almacenado para insertar un nuevo registro*/
  DELIMITER $
  CREATE PROCEDURE InsertarCategoria (IN nombreCat VARCHAR(20))
  BEGIN
  INSERT INTO categoria (NombreCategoria)
  VALUES (nombreCat);
  END $
  
  CALL InsertarCategoria ('Analgésicos');
  
  /*Procedimiento almacenado para actualizar un registro de la tabla Categoría*/
  DELIMITER $
  CREATE PROCEDURE ActualizarCategoria (IN idCategoria INT ,IN nombreCat VARCHAR(20))
  BEGIN
  UPDATE categoria
  SET NombreCategoria = nombreCat
  WHERE IDCategoria = idCategoria;
  END $ 
  
  CALL ActualizarCategoria (1, 'Biológico');
  
  /*Procedimiento almacenado para eliminar un registro de la tabla Categoria*/
 DELIMITER $
 CREATE PROCEDURE EliminarCategoria (IN idCategoria INT)
 BEGIN
 DELETE FROM categoria
 WHERE IDCategoria = idCategoria;
 END $
 
 CALL EliminarCategoria (1);
 
 /*Procedimiento almacenado para mostrar los registro de la tabla Categoria*/
 DELIMITER $
 CREATE PROCEDURE MostrarCategoria()
 BEGIN
 SELECT IDCategoria, NombreCategoria
 FROM categoria;
 END $
 
 CALL MostrarCategoria;
  
  /*Procedimientos almacenados de la tabla Presentación---------------------------------------------*/
  /*Procedimiento almacenado para insertar un nuevo registro*/
  DELIMITER $
  CREATE PROCEDURE InsertarPresentacion (IN NomPresentacion VARCHAR(20))
  BEGIN
  INSERT INTO presentacion (NombrePresentacion)
  VALUES (NomPresentacion);
  END $
  
  /*Procedimiento almacenado para actualizar un registro de la tabla Presentación*/
  DELIMITER $
  CREATE PROCEDURE ActualizarPresentacion (IN idPresentacion INT ,IN NomPresentacion VARCHAR(20))
  BEGIN
  UPDATE presentacion
  SET NombrePresentacion = NomPresentacion
  WHERE IDPresentacion = idPresentacion;
  END $
  
  /*Procedimiento almacenado para eliminar un registro de la tabla Presentacion*/
 DELIMITER $
 CREATE PROCEDURE EliminarPresentacion (IN idPresentacion INT)
 BEGIN
 DELETE FROM presentacion
 WHERE IDPresentacion = idPresentacion;
 END $
 
 /*Procedimiento almacenado para mostrar los registro de la tabla Presentación*/
 DELIMITER $
 CREATE PROCEDURE MostrarPresentacion()
 BEGIN
 SELECT IDPresentacion, NombrePresentacion
 FROM presentacion;
 END $
 
 CALL MostrarPresentacion;
  
  /*Procedimientos almacenados de la tabla Producto-------------------------------------------------*/
  /*Procedimiento almacenado para insertar un nuevo registro*/
  DELIMITER $
  CREATE PROCEDURE InsertarProducto (IN nombreP VARCHAR(30), IN descrip VARCHAR(100),
  IN precioP DECIMAL(8,2), estadoP VARCHAR(10), IN cantP INT, IN idMarca INT,
  IN idCategoria INT, IN idPresentacion INT)
  BEGIN
  INSERT INTO producto (NomProducto, DescripProducto, PrecioProducto, Estado, CantProducto, IDMarca, IDCategoria, IDPresentacion)
  VALUES (nombreP, descrip, precioP, estadoP, cantP, idMarca, idCategoria, idPresentacion);
  END $
  
  /*Procedimiento almacenado para actualizar un registro de la tabla Producto*/
  DELIMITER $
  CREATE PROCEDURE ActualizarProducto (IN idProducto INT ,IN nombreP VARCHAR(30), IN descrip VARCHAR(100),
  IN precioP DECIMAL(8,2), estadoP VARCHAR(10), IN cantP INT, IN idMarca INT,
  IN idCategoria INT, IN idPresentacion INT)
  BEGIN
  UPDATE Producto
  SET NomProducto = nombreP, DescripProducto = descrip, PrecioProducto = precioP, Estado = estadoP, CantProducto = cantP, IDMarca = idMarca, IDCategoria = idCategoria, IDPresentacion = idPresentacion
  WHERE IDProducto = idProducto;
  END $
  
  /*Procedimiento almacenado para eliminar un registro de la tabla Producto*/
 DELIMITER $
 CREATE PROCEDURE EliminarProducto (IN idProducto INT)
 BEGIN
 DELETE FROM producto
 WHERE IDProducto = idProducto;
 END $
  
  /*Procedimiento almacenado para mostrar los registro de la tabla Producto*/
 DELIMITER $
 CREATE PROCEDURE MostrarProducto()
 BEGIN
 SELECT IDProducto, NomProducto, DescripProducto, PrecioProducto, Estado, CantProducto, imagen, NombreMarca, NombreCategoria, NombrePresentacion
 FROM producto AS prod
 INNER JOIN marca AS mrc
 ON prod.IDMarca = mrc.IDMarca
 INNER JOIN categoria AS cat
 ON prod.IDCategoria = cat.IDCategoria
 INNER JOIN presentacion AS pre
 ON prod.IDPresentacion = pre.IDPresentacion;
 END $

 CALL MostrarProducto;
  
  /*Procedimientos almacenados de la tabla Servicio-------------------------------------------------*/
  /*Procedimiento almacenado para insertar un nuevo registro*/
  DELIMITER $
  CREATE PROCEDURE InsertarServicio (IN nombreS VARCHAR(30), IN estadoS VARCHAR(30),
  IN descripS VARCHAR(100))
  BEGIN
  INSERT INTO servicio (NombreS, EstadoS, Descripcion)
  VALUES (nombreS, estadoS, descripS);
  END $
  
  /*Procedimiento almacenado para actualizar un registro de la tabla Servicio*/
  DELIMITER $
  CREATE PROCEDURE ActualizarServicio (IN idServicio INT ,IN nombreS VARCHAR(30), IN estadoS VARCHAR(30),
  IN descripS VARCHAR(100))
  BEGIN
  UPDATE Servicio
  SET NombreS = nombreS, EstadoS = estadoS, Descripcion = descripS
  WHERE IDServicio = idServicio;
  END $
  
  /*Procedimiento almacenado para eliminar un registro de la tabla Servicio*/
 DELIMITER $
 CREATE PROCEDURE EliminarServicio (IN idServicio INT)
 BEGIN
 DELETE FROM servicio
 WHERE IDServicio = idServicio;
 END $
 
  /*Procedimiento almacenado para mostrar los registro de la tabla Servicio*/
 DELIMITER $
 CREATE PROCEDURE MostrarServicio()
 BEGIN
 SELECT IDServicio, NombreS, EstadoS, Descripcion
 FROM servicio;
 END $
 
 CALL MostrarServicio;
  
  /*Procedimientos almacenados de la tabla ServicioCliente------------------------------------------*/
  /*Procedimiento almacenado para insertar un nuevo registro*/
  DELIMITER $
  CREATE PROCEDURE InsertarServicioCliente (IN idCliente INT, IN idServicio INT,
  IN fechaCita DATE)
  BEGIN
  INSERT INTO serviciocliente (IDCliente, IDServicio, FechaCita)
  VALUES (idCliente, idServicio, fechaCita);
  END $
  
  /*Procedimiento almacenado para actualizar un registro de la tabla ServicioCliente*/
  DELIMITER $
  CREATE PROCEDURE ActualizarServicioCliente (IN idServicioC INT ,IN idCliente INT, IN idServicio INT,
  IN fechaCita DATE)
  BEGIN 
  UPDATE serviciocliente
  SET IDCliente = idCliente, IDServico = idServicio, FechaCita = fechaCita
  WHERE IDServicioCliente = idServicioC;
  END $
  
  /*Procedimiento almacenado para eliminar un registro de la tabla ServicioCliente*/
 DELIMITER $
 CREATE PROCEDURE EliminarServicioCliente (IN idServicioC INT)
 BEGIN
 DELETE FROM serviciocliente
 WHERE IDServicioCliente = idServicioC;
 END $
  
   /*Procedimiento almacenado para mostrar los registro de la tabla ServicioCliente*/
 DELIMITER $
 CREATE PROCEDURE MostrarServicioCliente()
 BEGIN
 SELECT IDServicioCliente, NombreUsuarioC, NombreS, FechaSolicitud, FechaCita
 FROM serviciocliente AS serc
 INNER JOIN cliente AS cli
 ON serc.IDCliente = cli.IDCliente
 INNER JOIN servicio AS ser
 ON serc.IDServicio = ser.IDServicio;
 END $
 
 CALL MostrarServicioCliente;
  
  /*Procedimientos almacenados de la tabla Pago-----------------------------------------------------*/
  /*Procedimiento almacenado para insertar un nuevo registro*/
  DELIMITER $
  CREATE PROCEDURE InsertarPago (IN totalPago DECIMAL(8,2))
  BEGIN
  INSERT INTO pago (TotalPago)
  VALUES (totalPago);
  END $
  
  /*Procedimiento almacenado para actualizar un registro de la tabla Pago*/
  DELIMITER $
  CREATE PROCEDURE ActualizarPago (IN idPago INT ,IN totalPago DECIMAL(8,2))
  BEGIN
  UPDATE pago
  SET TotalPago = totalPago
  WHERE IDPago = idPago;
  END $
  
  /*Procedimiento almacenado para eliminar un registro de la tabla Pago*/
 DELIMITER $
 CREATE PROCEDURE EliminarPago (IN idPago INT)
 BEGIN
 DELETE FROM pago
 WHERE IDPago = idPago;
 END $
  
   /*Procedimiento almacenado para mostrar los registro de la tabla Pago*/
 DELIMITER $
 CREATE PROCEDURE MostrarPago()
 BEGIN
 SELECT IDPago, FechaHoraPago, TotalPago
 FROM pago;
 END $
 
 CALL MostrarPago;
  
  /*Procedimientos almacenados de la tabla Compra---------------------------------------------------*/
  /*Procedimiento almacenado para insertar un nuevo registro*/
  DELIMITER $
  CREATE PROCEDURE InsertarCompra (IN idEmpleado INT, IN idCliente INT,
  IN direcC VARCHAR(100), IN idPago INT, IN estadoC VARCHAR(20))
  BEGIN
  INSERT INTO compra (IDEmpleado, IDCliente, DirecCompra, IDPago, EstadoC)
  VALUES (idEmpleado, idCliente, direcC, idPago, estadoC);
  END $
  
  /*Procedimiento almacenado para actualizar un registro de la tabla Compra*/
  DELIMITER $
  CREATE PROCEDURE ActualizarCompra (IN idCompra INT ,IN idEmpleado INT, IN idCliente INT,
  IN direcC VARCHAR(100), IN idPago INT, IN estadoC VARCHAR(20))
  BEGIN
  UPDATE compra
  SET IDEmpleado = idEmpleado, IDCliente = idCliente, DirecCompra = direcC, IDPago = idPago, EstadoC = estadoC
  WHERE IDCompra = idCompra;
  END $
  
  /*Procedimiento almacenado para eliminar un registro de la tabla Compra*/
 DELIMITER $
 CREATE PROCEDURE EliminarCompra (IN idCompra INT)
 BEGIN
 DELETE FROM compra
 WHERE IDCompra = idCompra;
 END $
  
   /*Procedimiento almacenado para mostrar los registro de la tabla Compra*/
 DELIMITER $
 CREATE PROCEDURE MostrarCompra()
 BEGIN
 SELECT IDCompra, NombreUsuario, NombreUsuarioC, FechaHoraCompra, DirecCompra, IDPago, EstadoC
 FROM compra AS com
 INNER JOIN empleado AS emp
 ON com.IDEmpleado = emp.IDEmpleado
 INNER JOIN cliente AS cli
 ON com.IDCliente = cli.IDCliente;
 END $

 CALL MostrarCompra;
  
  /*Procedimientos almacenados de la tabla CompraProducto-------------------------------------------*/
  /*Procedimiento almacenado para insertar un nuevo registro*/
  DELIMITER $
  CREATE PROCEDURE InsertarCompraProducto (IN idProducto INT, IN idCompra INT,
  IN cantPro INT, precio DECIMAL (8,2))
  BEGIN 
  INSERT INTO compraproducto (IDProducto, IDCompra, CantProductos, Precio)
  VALUES (idProducto, idCompra, cantPro, precio);
  END $
  
  /*Procedimiento almacenado para actualizar un registro de la tabla CompraProducto*/
  DELIMITER $
  CREATE PROCEDURE ActualizarCompraProducto (IN idCompraP INT ,IN idProducto INT, IN idCompra INT,
  IN cantPro INT, precio DECIMAL (8,2))
  BEGIN
  UPDATE compraproducto
  SET IDProducto = idProducto, IDCompra = idCompra, CantProductos = cantPro, Precio = precio
  WHERE IDCompraProducto = idCompraP;
  END $
  
  /*Procedimiento almacenado para eliminar un registro de la tabla CompraProducto*/
 DELIMITER $
 CREATE PROCEDURE EliminarCompraProducto (IN idCompraP INT)
 BEGIN
 DELETE FROM compraproducto
 WHERE IDCompraProducto = idCompraP;
 END $
 
  /*Procedimiento almacenado para mostrar los registro de la tabla CompraProducto*/
 DELIMITER $
 CREATE PROCEDURE MostrarCompraProducto()
 BEGIN
 SELECT IDCompraProducto, NomProducto, CantProductos, Precio
 FROM compraproducto AS cmp
 INNER JOIN producto AS prod
 ON cmp.IDProducto = prod.IDProducto;
 END $
 
 CALL MostrarCompraProducto;
 DROP PROCEDURE MostrarCompraProducto