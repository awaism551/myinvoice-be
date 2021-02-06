'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    var tableName = 'Vendors';
    return queryInterface.bulkInsert(tableName, [
      {
        name: 'Adam jee',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Builtec upvc',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, null, {});
  },
};
