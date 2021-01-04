'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Awais Admin',
        email: 'awaism551@gmail.com',
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Awais Manager',
        email: 'awaismanager@mailinator.com',
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Awais Sales',
        email: 'awaissales@mailinator.com',
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
