'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clients', [{
      name: 'John Doe',
      age: 21,
      genre: true,
      zip_code: '45310-751',
      state: 'São Paulo',
      city: 'São Paulo',
      district: 'Um Bairro',
      street: 'Avenida Paulista',
      father_name: "",
      mother_name: "",
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Clients', null, {});
  }
};