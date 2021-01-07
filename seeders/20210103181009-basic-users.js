'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let password = '123456';
    let saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    return queryInterface.bulkInsert('Users', [
      {
        name: 'Awais Admin',
        email: 'awaism551@gmail.com',
        password: hashedPassword,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Awais Manager',
        email: 'awaismanager@mailinator.com',
        password: hashedPassword,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Awais Sales',
        email: 'awaissales@mailinator.com',
        password: hashedPassword,
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
