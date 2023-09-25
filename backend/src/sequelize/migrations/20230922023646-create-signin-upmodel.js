'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SigninUpmodels', {
      firstName: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      dob: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        unique: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SigninUpmodels');
  }
};