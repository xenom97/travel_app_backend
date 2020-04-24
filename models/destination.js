'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Destination extends Model { }

  Destination.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize
  })
  Destination.associate = function (models) {
    // associations can be defined here
  };
  return Destination;
};