// Importa o módulo express
const express = require('express');

// Cria uma aplicação express
const app = express();

// Define a porta em que o servidor vai rodar
const port = 3000;

// Define uma rota que responde com "Hello World"
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Inicia o servidor e escuta na porta definida
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
