'use strict';
var tableName = 'OrdersItems';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(tableName, [
      {
        orderId: 1,
        itemId: 3,
        quantity: 34,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 1,
        itemId: 5,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 1,
        itemId: 7,
        quantity: 90,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        itemId: 6,
        quantity: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        itemId: 8,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete(tableName, null, {});
  },
};
