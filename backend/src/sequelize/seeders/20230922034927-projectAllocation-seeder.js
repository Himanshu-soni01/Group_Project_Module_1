'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProjectAllocationModels', [{
      id:"",
      project_id: 'P1',
      project_name: 'Sykes - Churn Prediction',
      project_description: 'Model Deployment Pipeline',
      start_date:'2023-09-01',
      end_date:"2023-09-29",
      email:"himanshusoni@jmangroup.com",
      reporting_manager:"Christopher D"
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('ProjectAllocationModels', null, {});
  }
};
id, project_id, project_name, project_description, start_date, end_date, email, reporting_manager