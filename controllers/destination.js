const { Destination } = require("../models");

const controller = {
  findAll: async (req, res, next) => {
    try {
      const data = await Destination.findAll({
        include: 'DestinationImages'
      });
      const msg = { data };
      res.status(200).json({ msg });
    }
    catch (err) {
      next(err);
    }
  }
}

module.exports = controller;