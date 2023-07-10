"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn("games", "createdAt");
    await queryInterface.removeColumn("games", "updatedAt");
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn("games", "createdAt", {
      type: Sequelize.DATE,
      allowNull: false,
    });
    await queryInterface.addColumn("games", "updatedAt", {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },
};
