'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
      title: 'biscuits',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'choclates',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'drinks',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'snacks',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
