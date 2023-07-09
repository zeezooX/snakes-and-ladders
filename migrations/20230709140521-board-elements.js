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
    await queryInterface.createTable("boardelements", {
      Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      boardId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Boards",
          key: "boardID",
        },
      },
      type: {
        type: Sequelize.ENUM("Ladder", "Snake"),
        allowNull: false,
      },
      from: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      to: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable("boardelements");
  },
};
