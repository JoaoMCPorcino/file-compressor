// app.js
const express = require('express');
const multer = require('multer');
const imageController = require('./src/server/controllers/fileController');

const app = express();
const upload = multer();

app.post('/compress', upload.single('image'), imageController.compressImage);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
