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
    await queryInterface.createTable("games", {
      Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      playesNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      capacity: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.ENUM("pending", "active", "finished"),
        allowNull: false,
        defaultValue: "pending",
      },
    });
    await queryInterface.addColumn("games", "BoardId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Boards",
        key: "BoardID",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("games");
    await queryInterface.removeColumn("games", "BoardId");
  },
};
