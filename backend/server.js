///////////////////////////////////////////////////////
//  API LOCAL : Backend pour créer un serveur HTTP 
//
//
//
//
////////////////////////////////////////////////////////
//Importation d'Express
const express = require('express'); 
const app = express();
//Port d'écoute du serveur ==> 3000
const port = 3000;

const students = [
  { id: 1, nom: 'Delmotte', prenom: 'Jean-Yve' },
  { id: 2, nom: 'Doe', prenom: 'John' },
  { id: 3, nom: 'Gunaratnam', prenom: 'Rajibane'}
];

//middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//Récuépration de la liste des étudiants (GET)
app.get('/students', (req, res) => {
  res.json(students);
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur en cours dans le ${port}`);
});
