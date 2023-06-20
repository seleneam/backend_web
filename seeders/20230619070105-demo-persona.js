'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
    */
   await queryInterface.bulkInsert('Personas',[
    {
      rfc: 'rfc1',
      name: "Selene Munoz",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      rfc: 'rfc2',
      name: "Alfredo Lopez",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      rfc: 'rfc3',
      name: "Clara Blanca",
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * */
     await queryInterface.bulkDelete('Personas', null, {});
     
  }
};
