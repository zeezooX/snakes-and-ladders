require("dotenv").config();
const { Sequelize } = require("sequelize");
const db = require("../app/models");
const seedData = require("./boardData");


async function seed() {
  try {
    const sequelize = db.sequelize;
    await sequelize.sync();
    const Board = db.Board;
    const BoardElement = db.BoardElement;

    await Board.bulkCreate(seedData.boardData, {
      ignoreDuplicates: true,
    });
    await BoardElement.bulkCreate(seedData.boardElementData, {
      ignoreDuplicates: true,
    });

    console.log("Seed data created successfully.");
  } catch (error) {
    console.error("Error seeding the database:", error);
  }
}
module.exports = seed;
