// controllers/imageController.js
const ImageModel = require('../models/fileModels');

class ImageController {
  static async compressImage(req, res) {
    try {
      // Verifique se o arquivo da imagem está presente na solicitação
      if (!req.file) {
        return res.status(400).json({ success: false, message: 'Nenhum arquivo de imagem enviado.' });
      }

      // Comprima a imagem usando o modelo
      const compressedImage = await ImageModel.compressImage(req.file.buffer, {
        //width: 800, // Largura desejada
        //height: 300, // Altura desejada
        quality: 80, // Qualidade de compressão (0 a 100)
      });

      // Envie a imagem comprimida como resposta
      res.set('Content-Type', 'image/jpeg');
      res.send(compressedImage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Erro ao comprimir a imagem.' });
    }
  }
}

module.exports = ImageController;
