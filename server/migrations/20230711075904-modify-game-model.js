'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn("games", "playersNumber","playersNumber");
    await queryInterface.renameColumn("games", "date","creationDate");
    await queryInterface.addColumn("games","lastPlayTime",{
      type: Sequelize.DATE,
      allowNull: false,
    })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn("games", "playersNumber","playersNumber");
    await queryInterface.renameColumn("games", "creationDate","date");
    await queryInterface.removeColumn("games","lastPlayTime")
  }
};
