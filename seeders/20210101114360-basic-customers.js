'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    var tableName = 'Customers';
    return queryInterface.bulkInsert(tableName, [
      {
        name: 'Shehzad Ali',
        phoneNo: '1234567890',
        address: 'Main Jhang Chiniot Road',
        city: 'Bhowana',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Haider pumps',
        phoneNo: '1234567890',
        address: 'Main Jhang Chiniot Road',
        city: 'Bhowana',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sultan Sentri store',
        phoneNo: '1234567890',
        address: 'Main Jhang Chiniot Road',
        city: 'Bhowana',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kareem Ceramics',
        phoneNo: '1234567890',
        address: 'Main Jhang Chiniot Road',
        city: 'Bhowana',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, null, {});
  },
};
