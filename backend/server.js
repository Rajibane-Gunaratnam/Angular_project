// backend/server.js
const express = require('express');
const app = express();
const port = 3000;

const students = [
  { id: 1, nom: 'Delmotte', prenom: 'Jean-Yve' },
  { id: 2, nom: 'Doe', prenom: 'John' },
  // Ajoutez d'autres étudiants au besoin
];

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/students', (req, res) => {
  res.json(students);
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
