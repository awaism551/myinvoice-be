'use strict';
var tableName = 'OrdersItems';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(tableName, [
      {
        orderId: 1,
        itemId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 1,
        itemId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 1,
        itemId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        itemId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        itemId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete(tableName, null, {});
  },
};
