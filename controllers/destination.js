const { Destination } = require("../models");

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
  }
}

module.exports = controller;