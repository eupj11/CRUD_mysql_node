const express = require('express');
const app = express();



app.use(express.json());


const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'eugenioPJ11',
  database: 'database',
});

// Conexión a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Operación CRUD: Ejemplo de consulta SELECT
connection.query('SELECT * FROM product', (error, results) => {
  if (error) {
    console.error('Error al realizar la consulta:', error);
    return;
  }
  console.log('Resultados de la consulta SELECT:', results);
});

// Operación CRUD: Ejemplo de inserción de datos
/* const nuevoRegistro = { nombre: 'silla de madera rupestre', precio: 90 };
connection.query('INSERT INTO product SET ?', nuevoRegistro, (error, results) => {
  if (error) {
    console.error('Error al insertar datos:', error);
    return;
  }
  console.log('Registro insertado con éxito, ID:', results.insertId);
}); */

/* // Operación CRUD: Ejemplo de actualización de datos
const actualizacion = { edad: 31 };
connection.query('UPDATE mi_tabla SET ? WHERE nombre = ?', [actualizacion, 'Ejemplo'], (error, results) => {
  if (error) {
    console.error('Error al actualizar datos:', error);
    return;
  }
  console.log('Registro actualizado con éxito');
});

// Operación CRUD: Ejemplo de eliminación de datos
connection.query('DELETE FROM mi_tabla WHERE nombre = ?', 'Ejemplo', (error, results) => {
  if (error) {
    console.error('Error al eliminar datos:', error);
    return;
  }
  console.log('Registro eliminado con éxito');
}); */

// Cerrar la conexión a la base de datos cuando hayas terminado
connection.end();

