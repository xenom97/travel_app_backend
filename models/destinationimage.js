'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class DestinationImage extends Model { }

  DestinationImage.init({
    DestinationId: DataTypes.INTEGER,
    imageURL: DataTypes.STRING
  }, {
    sequelize
  })
  DestinationImage.associate = function (models) {
    // associations can be defined here
  };
  return DestinationImage;
};