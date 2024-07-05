const sharp = require('sharp');

class ImageModel {
  static async compressImage(buffer, options) {
    return sharp(buffer)
      .resize(options.width, options.height)
      .jpeg({ quality: options.quality })
      .toBuffer();
  }
}

module.exports = ImageModel;
