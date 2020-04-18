'use strict';
module.exports = (sequelize, DataTypes) => {
  const Destination = sequelize.define('Destination', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Destination.associate = function(models) {
    // associations can be defined here
  };
  return Destination;
};