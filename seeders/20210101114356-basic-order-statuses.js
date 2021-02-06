'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    var tableName = 'OrderStatuses';
    return queryInterface.bulkInsert(tableName, [
      {
        name: 'Delivered',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cancelled',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, null, {});
  },
};
