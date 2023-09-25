'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('signinupmodels', [{
      firstName: 'admin',
      lastName: 'admin',
      email: 'admin@jmangroup.com',
      password: '$2b$10$Snp7l4c2K55IDU/mdxOHiO8pFmmDafnAu7GRrbPctYEo.DjTe0ssW',
      isAdmin:'1'
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('signinupmodels', null, {});
  }
};


