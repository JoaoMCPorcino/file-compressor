// models/imageModel.js
const sharp = require('sharp');

class ImageModel {
  static async compressImage(inputBuffer, options) {
    try {
      // Utilize o Sharp para redimensionar e comprimir a imagem
      const compressedBuffer = await sharp(inputBuffer)
        .resize(options.width, options.height)
        .jpeg({ quality: options.quality })
        .toBuffer();

      return compressedBuffer;
    } catch (error) {
      throw new Error('Erro ao comprimir a imagem.');
    }
  }
}

module.exports = ImageModel;
