'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Destination extends Model { }

  Destination.init({
    name: {
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
    },
    description: {
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
    },
    location: {
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
    },
    price: {
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
    }
  },
    {
      sequelize
    }
  );
  Destination.associate = function (models) {
    // associations can be defined here
    Destination.hasMany(models.DestinationImage, {
      foreignKey: 'DestinationId'
    });
  };
  return Destination;
};