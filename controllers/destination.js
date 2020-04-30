const { Destination, DestinationImage } = require("../models");

const controller = {
  findAll: async (req, res, next) => {
    try {
      const result = await Destination.findAll({
        include: 'DestinationImages'
      });
      res.status(200).json({
        success: true,
        code: 200,
        message: "",
        result
      });
    }
    catch (err) {
      next(err);
    }
  },

  create: async (req, res, next) => {
    try {
      const {
        name,
        description,
        location,
        price,
        images
      } = req.body;
      const destination = { name, description, location, price };
      const result = await Destination.create(destination, { images });
      const DestinationId = result.id;
      const destinationImages = images.map(imageURL => ({ imageURL, DestinationId }));
      await DestinationImage.bulkCreate(destinationImages)
      res.status(200).json({
        success: true,
        code: 200,
        message: "",
        result
      });
    }
    catch (err) {
      next(err);
    }
  }
}

module.exports = controller;