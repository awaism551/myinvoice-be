'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Categories',
      [
        {
          title: 'drink',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'biscuit',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'game',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  },
};
