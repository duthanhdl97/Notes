'use strict'
const ULID = require('ulid')

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
      await queryInterface.bulkInsert('users', [
        {
          id: ULID.ulid(new Date().getTime()),
          name: 'Thành Dư',
          email: 'duthanhdl97@gmaill.com',
          password: '$2a$12$bzI6Ebmxab6gp5byEqHdA.WB5uIOyoqJF4vHJ51EH3t.xL6laj/Ku' //a2!f45@!
        }
      ])
    ]
  },
  down: (queryInterface, _) => {
    return queryInterface.dropTable('users')
  },
}
