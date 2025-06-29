const mysql = require('mysql2');
require('dotenv').config();

// Crear conexión con MySQL usando variables del .env
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306, // Opcional si usas un puerto distinto
});

// Probar conexión
db.connect((err) => {
  if (err) {
    console.error('❌ Error al conectar con MySQL:', err.message);
    process.exit(1);
  } else {
    console.log('✅ Conexión exitosa a MySQL');
  }
});

module.exports = db;
