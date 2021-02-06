'use strict';
var tableName = 'Balances';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(tableName, [
      {
        amount: 140,
        customerId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: 1200,
        customerId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete(tableName, null, {});
  },
};
