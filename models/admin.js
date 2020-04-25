'use strict';
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Admin extends Model {
    static login(username, password) {
      return (async () => {
        try {
          const admin = await Admin.findOne({ where: { username } });
          if (!admin) {
            throw new Error("incorrect username/password");
          }
          const compare = await bcrypt.compare(password, admin.password);
          if (compare) return {
            id: admin.id,
            username: admin.username,
            type: 'admin'
          }
          throw new Error("incorrect username/password");
        }
        catch (err) {
          throw new Error(err.message)
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