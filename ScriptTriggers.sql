use farmaciaglorys;

/*Realización de triggers y tabla bitácora*/

/*Creación de la tabla bitácora en la BD FarmaciaGlorys*/
CREATE TABLE bitacora (
id_bitacora INT NOT NULL AUTO_INCREMENT,
transaccion VARCHAR(10) NOT NULL,
usuario VARCHAR(40) NOT NULL,
fecha DATETIME NOT NULL,
tabla VARCHAR(20) NOT NULL,
PRIMARY KEY (id_bitacora)
);

/*Triggers de la tabla Categoría--------------------------------------------------------------------*/
/*Creación de trigger de insersión de datos en la tabla Categoria de la BD FarmaciaGlorys*/
CREATE TRIGGER TriggerInsertCategoria
AFTER INSERT ON categoria
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('INSERT', current_user(), NOW(), 'categoria');

/*Insertar datos en la tabla Categoria*/
INSERT INTO farmaciaglorys.categoria (NombreCategoria)
VALUES ('Fitofármacos');

/*Verificar si se activó el trigger*/
SELECT * FROM bitacora;

/*Creación de trigger de actualizar un registro de la tabla Categoria*/
CREATE TRIGGER TriggerUpdateCategoria
  BEFORE UPDATE
  ON categoria
  FOR EACH ROW
  INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('UPDATE', current_user(), NOW(), 'categoria');

/*Creación del trigger de eliminar un registro de la tabla Categoria*/
CREATE TRIGGER TriggerDeleteCategoria
AFTER DELETE ON categoria
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('DELETE', current_user(), NOW(), 'categoria');

/*Eliminar un registro de la tabla Categoria*/
DELETE FROM farmaciaglorys.categoria WHERE IDCategoria='1';

/*Verificar si se activó el trigger*/
SELECT * FROM bitacora;
/*----------------------------------------------------------------------------------------------------*/

/*Creación de trigger de insersión de datos en la tabla Cliente---------------------------------------*/
CREATE TRIGGER TriggerInsertCliente
AFTER INSERT ON cliente
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('INSERT', current_user(), NOW(), 'cliente');

/*Insertar datos en la tabla Cliente*/
INSERT INTO farmaciaglorys.cliente (NombreUsuarioC, ContraseñaC, CorreoC, TelefonoC)
VALUES ('Flor', '2345', 'flor12@gmail.com', '76897678');

/*Verificar si se activó el trigger*/
SELECT * FROM bitacora;

/*Creación de trigger de actualizar un registro de la tabla Cliente*/
CREATE TRIGGER TriggerUpdateCliente
  BEFORE UPDATE
  ON cliente
  FOR EACH ROW
  INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('UPDATE', current_user(), NOW(), 'cliente');

/*Creación de trigger de eliminar un registro de la tabla Cliente*/
CREATE TRIGGER TriggerDeleteCliente
AFTER DELETE ON cliente
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('DELETE', current_user(), NOW(), 'cliente');
/*----------------------------------------------------------------------------------------------------*/

/*Creación de trigger de insersión de datos en la tabla Empleado--------------------------------------*/
CREATE TRIGGER TriggerInsertEmpleado
AFTER INSERT ON empleado
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('INSERT', current_user(), NOW(), 'empleado');

/*Insertar datos en la tabla Empleado*/
INSERT INTO farmaciaglorys.empleado (NombreUsuario, Contraseña, Correo, Telefono)
VALUES ('Heysel', '234565', 'Heysel13@gmail.com', '12345678');

/*Verificar si se activó el trigger*/
SELECT * FROM bitacora;

/*Creación de trigger de actualizar un registro de la tabla Empleado*/
CREATE TRIGGER TupdateEmpleado
  BEFORE UPDATE
  ON empleado
  FOR EACH ROW
  INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('UPDATE', current_user(), NOW(), 'empleado');

/*Creación de trigger de eliminar un registro de la tabla Empleado*/
CREATE TRIGGER TriggerDeleteEmpleado
AFTER DELETE ON empleado
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('DELETE', current_user(), NOW(), 'empleado');
/*----------------------------------------------------------------------------------------------------*/

/*Creación de trigger de insersión de datos en la tabla Marca-----------------------------------------*/
CREATE TRIGGER TriggerInsertMarca
AFTER INSERT ON marca
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('INSERT', current_user(), NOW(), 'marca');

/*Insertar datos en la tabla Marca*/
INSERT INTO farmaciaglorys.marca (NombreMarca)
VALUES ('RAMOS');

/*Verificar si se activó el trigger*/
SELECT * FROM bitacora;

/*Creación de trigger de actualizar un registro de la tabla Marca*/
CREATE TRIGGER TupdateMarca
  BEFORE UPDATE
  ON marca
  FOR EACH ROW
  INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('UPDATE', current_user(), NOW(), 'marca');

/*Creación de un trigger de eliminar un registro de la tabla Marca*/
CREATE TRIGGER TriggerDeleteMarca
AFTER DELETE ON marca
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('DELETE', current_user(), NOW(), 'marca');
/*----------------------------------------------------------------------------------------------------*/

/*Creación de trigger de insersión de datos en la tabla Presentacion----------------------------------*/
CREATE TRIGGER TriggerInsertPresentacion
AFTER INSERT ON presentacion
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('INSERT', current_user(), NOW(), 'presentacion');

/*Insertar datos en la tabla Presentación*/
INSERT INTO farmaciaglorys.presentacion (FormaDosificacion)
VALUES ('Jarabes');

/*Verificar si se activó el trigger*/
SELECT * FROM bitacora;

/*Creación de trigger de actualizar un registro de la tabla Presentación*/
CREATE TRIGGER TupdatePresentacion
  BEFORE UPDATE
  ON presentacion
  FOR EACH ROW
  INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('UPDATE', current_user(), NOW(), 'presentacion');

/*Creación de trigger de eliminar un registro de la tabla Presentación*/
CREATE TRIGGER TriggerDeletePresentacion
AFTER DELETE ON presentacion
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('DELETE', current_user(), NOW(), 'presentacion');
/*----------------------------------------------------------------------------------------------------*/

/*Creación de trigger de insersión de datos en la tabla Producto--------------------------------------*/
CREATE TRIGGER TriggerInsertProducto
AFTER INSERT ON producto
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('INSERT', current_user(), NOW(), 'producto');

/*Insertar datos en la tabla Producto*/
INSERT INTO farmaciaglorys.producto (NomProducto, DescripProducto, PrecioProducto, Estado, CantProducto, IDMarca, IDCategoria, IDPresentacion)
VALUES ('Ambroxol', 'Producto sabor a banana', 40.5, 'DISPONIBLE', 500, 3, 3, 3);

/*Verificar si se activó el trigger*/
SELECT * FROM bitacora;

/*Creación trigger de actualizar un registro de la tabla Producto*/
CREATE TRIGGER TupdateProducto
  BEFORE UPDATE
  ON producto
  FOR EACH ROW
  INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('UPDATE', current_user(), NOW(), 'producto');

/*Creación de trigger de eliminar un registro de la tabla Producto*/
CREATE TRIGGER TriggerDeleteProducto
AFTER DELETE ON producto
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('DELETE', current_user(), NOW(), 'producto');
/*----------------------------------------------------------------------------------------------------*/

/*Creación de trigger de insersión de datos en la tabla Servicio--------------------------------------*/
CREATE TRIGGER TriggerInsertServicio
AFTER INSERT ON servicio
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('INSERT', current_user(), NOW(), 'servicio');

/*Insertar datos en la tabla Servicio*/
INSERT INTO farmaciaglorys.servicio (NombreS, EstadoS, Descripcion)
VALUES ('Ultrasonidos', 'DISPONIBLE', 'Aprochecha ya! oferta especial');

/*Verificar si se activó el trigger*/
SELECT * FROM bitacora;

/*Creación de trigger de actualizar un registro de la tabla Servicio*/
CREATE TRIGGER TupdateServicio
  BEFORE UPDATE
  ON servicio
  FOR EACH ROW
  INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('UPDATE', current_user(), NOW(), 'servicio');

/*Creación de trigger de eliminar un registro de la tabla Servicio*/
CREATE TRIGGER TriggerDeleteServicio
AFTER DELETE ON servicio
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('DELETE', current_user(), NOW(), 'servicio');
/*----------------------------------------------------------------------------------------------------*/

/*Creación de trigger de insersión de datos en la tabla ServicioCliente-------------------------------*/
CREATE TRIGGER TriggerInsertServicioCliente
AFTER INSERT ON serviciocliente
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('INSERT', current_user(), NOW(), 'serviciocliente');

/*Insertar datos en la tabla ServicioCliente*/
INSERT INTO farmaciaglorys.serviciocliente (IDCliente, IDServicio, FechaCita)
VALUES (3, 3, '2023-09-11 01:00:00');

/*Verificar si se activó el trigger*/
SELECT * FROM bitacora;

/*Creación de trigger de actualizar un registro de la tabla ServicioClient*/
CREATE TRIGGER TupdateServicioCliente
  BEFORE UPDATE
  ON serviciocliente
  FOR EACH ROW
  INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('UPDATE', current_user(), NOW(), 'serviciocliente');

/*Creación de trigger de eliminar un registro de la tabla ServicioCliente*/
CREATE TRIGGER TriggerDeleteServicioCliente
AFTER DELETE ON serviciocliente
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('DELETE', current_user(), NOW(), 'serviciocliente');
/*----------------------------------------------------------------------------------------------------*/

/*Creación de trigger de insersión de datos en la tabla Pago------------------------------------------*/
CREATE TRIGGER TriggerInsertPago
AFTER INSERT ON pago
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('INSERT', current_user(), NOW(), 'pago');

/*Insertar datos en la tabla Pago*/
INSERT INTO farmaciaglorys.pago (TotalPago)
VALUES ( 8000 );

/*Verificar si se activó el trigger*/
SELECT * FROM bitacora;

/*Creación de trigger de actualizar un registro de la tabla Pago*/
CREATE TRIGGER TupdatePago
  BEFORE UPDATE
  ON pago
  FOR EACH ROW
  INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('UPDATE', current_user(), NOW(), 'pago');

/*Creación de trigger de eliminar un registro de la tabla Pago*/
CREATE TRIGGER TriggerDeletePago
AFTER DELETE ON pago
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('DELETE', current_user(), NOW(), 'pago');
/*----------------------------------------------------------------------------------------------------*/

/*Creación de trigger de insersión de datos en la tabla Compra----------------------------------------*/
CREATE TRIGGER TriggerInsertCompra
AFTER INSERT ON compra
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('INSERT', current_user(), NOW(), 'compra');

/*Insertar datos en la tabla Compra*/
INSERT INTO farmaciaglorys.compra (IDEmpleado, IDCliente, DirecCompra, IDPago, EstadoC)
VALUES ( 1, 3, 'Frente al Complejo Judicial', 4, 'EN PROCESO');

/*Verificar si se activó el trigger*/
SELECT * FROM bitacora;

/*Creación de trigger de actualizar un registro de la tabla Compra*/
CREATE TRIGGER TupdateCompra
  BEFORE UPDATE
  ON compra
  FOR EACH ROW
  INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('UPDATE', current_user(), NOW(), 'compra');

/*Creación de trigger de eliminar un registro de la tabla Compra*/
CREATE TRIGGER TriggerDeleteCompra
AFTER DELETE ON compra
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('DELETE', current_user(), NOW(), 'compra');
/*----------------------------------------------------------------------------------------------------*/

/*Creación de trigger de insersión de datos en la tabla CompraProducto--------------------------------*/
CREATE TRIGGER TriggerInsertCompraProducto
AFTER INSERT ON compraproducto
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('INSERT', current_user(), NOW(), 'compraproducto');

/*Insertar datos en la tabla CompraProducto*/
INSERT INTO farmaciaglorys.compraProducto (IDProducto, IDCompra, CantProductos, Precio)
VALUES ( 3, 4, 4, 46.50);

/*Verificar si se activó el trigger*/
SELECT * FROM bitacora;

/*Creación de trigger de actualizar un registro de la tabla CompraProducto*/
CREATE TRIGGER TupdateCompraProducto
  BEFORE UPDATE
  ON compraproducto
  FOR EACH ROW
  INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('UPDATE', current_user(), NOW(), 'compraproducto');

/*Creación de trigger de eliminar un registro de la tabla CompraProducto*/
CREATE TRIGGER TriggerDeleteCompraProducto
AFTER DELETE ON compraproducto
FOR EACH ROW
INSERT INTO bitacora (transaccion, usuario, fecha, tabla)
VALUES ('DELETE', current_user(), NOW(), 'compraproducto');
/*----------------------------------------------------------------------------------------------------*/