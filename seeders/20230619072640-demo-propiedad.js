'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
    */
   await queryInterface.bulkInsert('Propiedades',[
    {
      cve_catastral: '098QUDK',
      descripcion: "Casa Azul",
      direccion: "Av. Imaginaria",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cve_catastral: '1QUE290',
      descripcion: "Casa Color",
      direccion: "Av. Marte",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cve_catastral: 'OKS982N',
      descripcion: "Casa Negra",
      direccion: "Av. Pizza Planeta",
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
