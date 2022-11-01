// const ULID = require('ulid')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('People', [{}], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
