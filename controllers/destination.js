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
    const {
      name,
      description,
      location,
      price,
      images
    } = req.body;
    try {
      const destination = { name, description, location, price };
      const result = await Destination.create(destination, { images });
      const DestinationId = result.id;
      const destinationImages = images.map(imageURL => ({ imageURL, DestinationId }));
      await DestinationImage.bulkCreate(destinationImages);
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

  addImages: async (req, res, next) => {
    const { DestinationId } = req.params;
    const { images } = req.body;
    const destinationImages = images.map(imageURL => ({ imageURL, DestinationId }));
    try {
      const result = await DestinationImage.bulkCreate(destinationImages);
      res.status(200).json({
        success: true,
        code: 200,
        message: "success add images",
        result
      });
    }
    catch (err) {
      next(err)
    }
  },

  deleteImages: async (req, res, next) => {
    const { id } = req.params;
    try {
      await DestinationImage.destroy({ where: { id } });
      res.status(200).json({
        success: true,
        code: 200,
        message: "success delete image",
        result: []
      });
    }
    catch (err) {
      next(err);
    }
  }
}

module.exports = controller;