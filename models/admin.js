'use strict';
const bcrypt = require("bcrypt");
const CustomError = require("../helper/customError");

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Admin extends Model {
    static login(username, password) {
      return (async () => {
        const error = {
          name: "LOGIN_FAILED",
          message: "incorrect username/password"
        };
        try {
          const admin = await Admin.findOne({ where: { username } });
          if (!admin) {
            throw new CustomError(error);
          }
          const compare = await bcrypt.compare(password, admin.password);
          if (compare) return {
            id: admin.id,
            username: admin.username,
            type: 'admin'
          }
          throw new CustomError(error);
        }
        catch (err) {
          error.message = err.message;
          throw new CustomError(error);
        }
      })();
    }
  }

  Admin.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        isUnique: async (username) => {
          try {
            const exist = await Admin.findOne({ where: { username } });
            if (exist) {
              throw new Error("username already exists");
            }
          }
          catch (err) {
            throw new Error(err.message);
          }
        }
      }
    },
    password: DataTypes.STRING
  },
    {
      sequelize,
      hooks: {
        beforeCreate: async (admin) => {
          const salt = await bcrypt.genSalt(10);
          admin.password = await bcrypt.hash(admin.password, salt);
        }
      }
    }
  )

  Admin.associate = function (models) {
    // associations can be defined here
  };
  return Admin;
};