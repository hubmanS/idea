'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return  await queryInterface.createTable('User_Groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      group_id: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('User_Groups');
  }
};