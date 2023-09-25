'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CalendarModels', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique: false,
        primaryKey: true
      },
      eventType: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      startDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
       
      },
      endDate: {
        type: Sequelize.DATEONLY,
        
       
      },
      startTime:{
        type: Sequelize.TIME
      },

      endTime: {
        type: Sequelize.TIME
      },
      isAllDay: {
        type:Sequelize.BOOLEAN,
        defaultValue: false,
      },
      otherDetails :{
        type:Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CalendarModels');
  }
};