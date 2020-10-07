'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
   return  await queryInterface.createTable('groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      group_name: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface) => {
    return await queryInterface.dropTable('groups');
  }
};