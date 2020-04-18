'use strict';
module.exports = (sequelize, DataTypes) => {
  const DestinationImage = sequelize.define('DestinationImage', {
    DestinationId: DataTypes.INTEGER,
    imageURL: DataTypes.STRING
  }, {});
  DestinationImage.associate = function(models) {
    // associations can be defined here
  };
  return DestinationImage;
};