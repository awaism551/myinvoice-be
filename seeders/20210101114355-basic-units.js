'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    var tableName = 'Units';
    return queryInterface.bulkInsert(tableName, [
      {
        name: 'kg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'gram',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'metre',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete(tableName, null, {});
  },
};
