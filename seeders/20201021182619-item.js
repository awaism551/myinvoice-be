'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Items',
      [
        {
          name: 'coke',
          price: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 1,
        },
        {
          name: 'gala',
          price: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2,
        },
        {
          name: 'tekken 7',
          price: 2000,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 3,
        },
        {
          name: 'pepsi',
          price: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 1,
        },
        {
          name: 'rio',
          price: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2,
        },
        {
          name: 'nfs',
          price: 2000,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 3,
        },
        {
          name: 'mirinda',
          price: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 1,
        },
        {
          name: 'candy',
          price: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2,
        },
        {
          name: 'tuc',
          price: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2,
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
  },
};
