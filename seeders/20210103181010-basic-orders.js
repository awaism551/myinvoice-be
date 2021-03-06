'use strict';
var tableName = 'Orders';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(tableName, [
      {
        total: 600,
        discount: 50,
        tax: 25,
        net: 575,
        isPrevBalanceIncluded: false,
        userId: 1,
        customerId: 2,
        orderStatusId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        total: 1000,
        discount: 100,
        tax: 20,
        net: 1120,
        isPrevBalanceIncluded: true,
        previousBalance: 200,
        customerId: 3,
        userId: 2,
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
