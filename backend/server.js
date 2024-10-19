const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Habilita CORS para permitir que el frontend haga solicitudes al backend

// Ruta para la despedida
app.get('/api/goodbye', (req, res) => {
  const name = 'John Doe'; // Nombre por defecto
  res.json({ message: `Adiós, ${name}` });
});

// Ruta para la bienvenida
app.get('/api/welcome', (req, res) => {
  const name = 'Jane Doe'; // Nombre por defecto
  res.json({ message: `¡Hola, ${name}!` });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
