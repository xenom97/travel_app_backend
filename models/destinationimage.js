'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class DestinationImage extends Model { }

  DestinationImage.init({
    DestinationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "cannot null"
        },
        notEmpty: {
          args: true,
          msg: "cannot empty"
        }
      }
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "cannot null"
        },
        notEmpty: {
          args: true,
          msg: "cannot empty"
        }
      }
    }
  }, {
    sequelize
  })
  DestinationImage.associate = function (models) {
    // associations can be defined here
    DestinationImage.belongsTo(models.Destination, {
      foreignKey: 'DestinationId'
    });
  };
  return DestinationImage;
};