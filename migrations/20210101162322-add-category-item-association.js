'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Items', // name of child table
      'categoryId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories', // name of parent table
          key: 'id', // key in parent table that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Items', // name of child model
      'categoryId', // key we want to remove
    );
  },
};
