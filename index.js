// app.js
const express = require('express');
const bodyParser = require('body-parser');
const imageController = require('./src/server/controllers/fileController');

const app = express();

// Aumentar o limite do tamanho do corpo da requisição para permitir imagens maiores em base64
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.post('/compress', imageController.compressImageBase64);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
