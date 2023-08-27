'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {title: 'Harry Potter', author: 'J.K. Rolling', page_quantity: 580},
      {title: 'Clean Code', author: 'Uncle Martin', page_quantity: 470}
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
