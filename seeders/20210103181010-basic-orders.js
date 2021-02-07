'use strict';
var tableName = 'Orders';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(tableName, [
      {
        total: 600,
        discount: 50,
        net: 550,
        userId: 1,
        orderStatusId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        total: 1000,
        discount: 100,
        net: 900,
        userId: 2,
        customerId: 2,
        orderStatusId: 2,
        paymentModeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete(tableName, null, {});
  },
};
