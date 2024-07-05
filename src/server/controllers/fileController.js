// controllers/imageController.js
const ImageModel = require('../models/fileModels');

class ImageController {
  static async compressImageBase64(req, res) {
    try {
      const { imageBase64 } = req.body;

      if (!imageBase64) {
        return res.status(400).json({ success: false, message: 'Nenhuma imagem base64 enviada.' });
      }

      // Remove o prefixo 'data:image/jpeg;base64,' ou semelhante, se existir
      const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '');

      // Converte a imagem base64 para um buffer
      const imgBuffer = Buffer.from(base64Data, 'base64');

      // Comprima a imagem usando o modelo
      const compressedImage = await ImageModel.compressImage(imgBuffer, {
        //width: 800, // Largura desejada
        //height: 300, // Altura desejada
        quality: 80, // Qualidade de compressão (0 a 100)
      });

      // Converta a imagem comprimida para base64
      const compressedBase64 = compressedImage.toString('base64');

      // Envie a imagem comprimida como base64 na resposta
      res.json({ success: true, compressedImage: `data:image/jpeg;base64,${compressedBase64}` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Erro ao comprimir a imagem.' });
    }
  }
}

module.exports = ImageController;
