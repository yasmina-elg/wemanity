'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() => {
        queryInterface.createTable('entries', {
          id: {
            allowNull: false,
            // autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.fn('uuid_generate_v4')
          },
          firstname: {
            allowNull: false,
            type: Sequelize.STRING
          },
          lastname: {
            allowNull: false,
            type: Sequelize.STRING
          },
          phoneNumber: {
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
      })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('entries');
  }
};