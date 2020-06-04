const { Destination, DestinationImage } = require("../models");
const { uploader, destroyer } = require("../helper/utils");

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
      price
    } = req.body;
    try {
      const destination = { name, description, location, price };
      const images = await uploader(req);
      const result = await Destination.create(destination);
      const DestinationId = result.id;
      const destinationImages = images.map(image => {
        return {
          DestinationId,
          name: image.public_id,
          imageURL: image.url,
        }
      });
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
    const images = await uploader(req);
    const destinationImages = images.map(image => {
      return {
        DestinationId,
        name: image.public_id,
        imageURL: image.url,
      }
    });
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
    const { id, name } = req.params;
    try {
      const destroyed = await DestinationImage.destroy({ where: { id } });
      if (destroyed) await destroyer(name);
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
  },

  delete: async (req, res, next) => {
    const { id } = req.params;
    const { names } = req.body;
    try {
      for (const name of names) {
        await destroyer(name);
      }
      await Destination.destroy({ where: { id } });
      res.status(200).json({
        success: true,
        code: 200,
        message: "success delete destination",
        result: []
      });
    }
    catch (err) {
      next(err);
    }
  },

  update: async (req, res, next) => {
    const { id } = req.params;
    const {
      name,
      description,
      location,
      price
    } = req.body;
    try {
      const destination = { name, description, location, price };
      const result = await Destination.update(destination, {
        where: { id },
        returning: true
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
  }
}

module.exports = controller;