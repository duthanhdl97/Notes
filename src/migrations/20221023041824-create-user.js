'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.createTable(
        'users',
        {
          id: {
            type: Sequelize.CHAR(26),
            primaryKey: true,
            allowNull: false,
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          email: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          password: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          created_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('NOW()'),
          },
          updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal(
              'NOW() ON UPDATE NOW()'
            ),
          },
        },
        {
          charset: 'utf8mb4',
          collate: 'utf8mb4_unicode_ci',
        }
      ),
    ]
  },
  down: (queryInterface, _) => {
    return queryInterface.dropTable('users')
  },
}
