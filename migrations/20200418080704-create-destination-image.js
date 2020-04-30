'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DestinationImages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DestinationId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Destinations',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      imageURL: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DestinationImages');
  }
};