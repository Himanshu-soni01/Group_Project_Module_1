'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProjectAllocationModels', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique: false,
        primaryKey: true,
      },
      project_id: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      },
      project_name: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      },
      project_description: {
        type: Sequelize.STRING,
        allowNull: false,
        
      },
      start_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
       
      },
      end_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
       
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
       
      },
      reporting_manager: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        
      }

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProjectAllocationModels');
  }
};