'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    var tableName = 'Companies';
    return queryInterface.bulkInsert(tableName, [
      {
        name: 'Zam Zam Sentri Store',
        address: 'Main Jhang Road Bhowana',
        phoneNo: '1234567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete(tableName, null, {});
  },
};
