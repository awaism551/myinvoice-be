'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    var tableName = 'PaymentModes';
    return queryInterface.bulkInsert(tableName, [
      {
        name: 'Cash',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Credit',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, null, {});
  },
};
