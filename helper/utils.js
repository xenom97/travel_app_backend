const Datauri = require("datauri/parser");
const path = require("path")
const cloudinary = require("../config/cloudinary");

const cloudinaryUpload = (image) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(image, (err, url) => {
      if (err) return reject(err);
      return resolve(url);
    });
  });
};

module.exports = {
  uploader: (req) => {
    return new Promise(async (resolve, reject) => {
      const dUri = new Datauri();
      const images = req.files.map(file => {
        const { originalname, buffer } = file;
        const filePath = path.extname(originalname).toString();
        return dUri.format(filePath, buffer).content;
      });

      try {
        const result = [];
        for (image of images) {
          try {
            const uploaded = await cloudinaryUpload(image);
            const { url, secure_url } = uploaded;
            result.push(url);
          }
          catch (err) {
            reject(err);
          }
        }
        resolve(result)
      }
      catch (err) {
        reject(err);
      }
    });
  }
};