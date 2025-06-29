const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const medicationRoutes = require('./routes/medicationRoutes');

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend'))); // Servir frontend

// Rutas API
app.use('/api/medicamentos', medicationRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
