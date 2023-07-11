const { Sequelize } = require("sequelize");
const db = require("../app/models");
let Board = db.Board;
let BoardElement = db.BoardElement;

const boardData = [
  {
    boardID: 1,
    boardImage: "board1.jpg",
    boardName: "Board No.1",
  },

  {
    boardID: 2,
    boardImage: "board2.jpg",
    boardName: "Board No.2",
  },

  {
    boardID: 3,
    boardImage: "board3.png",
    boardName: "Board No.3",
  },

  {
    boardID: 4,
    boardImage: "board4.jpg",
    boardName: "Board No.4",
  },

  {
    boardID: 5,
    boardImage: "board5.jpg",
    boardName: "Board No.5",
  },
  {
    boardID: 6,
    boardImage: "board6.jpeg",
    boardName: "Board No.6",
  },
];

const boardElementData = [
  //LADDER
  // BOARD 1
  {
    Id: 1,
    boardId: 1,
    type: "Ladder",
    from: 3,
    to: 20,
  },

  { Id: 2, boardId: 1, type: "Ladder", from: 6, to: 14 },

  {
    Id: 3,
    boardId: 1,
    type: "Ladder",
    from: 11,
    to: 28,
  },

  {
    Id: 4,
    boardId: 1,
    type: "Ladder",
    from: 15,
    to: 34,
  },

  {
    Id: 5,
    boardId: 1,
    type: "Ladder",
    from: 17,
    to: 74,
  },
  {
    Id: 6,
    boardId: 1,
    type: "Ladder",
    from: 22,
    to: 37,
  },
  {
    Id: 7,
    boardId: 1,
    type: "Ladder",
    from: 38,
    to: 59,
  },
  {
    Id: 8,
    boardId: 1,
    type: "Ladder",
    from: 49,
    to: 67,
  },
  {
    Id: 101,
    boardId: 1,
    type: "Ladder",
    from: 57,
    to: 76,
  },
  {
    Id: 102,
    boardId: 1,
    type: "Ladder",
    from: 61,
    to: 78,
  },
  {
    Id: 103,
    boardId: 1,
    type: "Ladder",
    from: 73,
    to: 86,
  },
  {
    Id: 104,
    boardId: 1,
    type: "Ladder",
    from: 81,
    to: 98,
  },
  {
    Id: 105,
    boardId: 1,
    type: "Ladder",
    from: 88,
    to: 91,
  },
  //SNAKE board 1
  {
    Id: 41,
    boardId: 1,
    type: "Snake",
    from: 8,
    to: 4,
  },
  {
    Id: 42,
    boardId: 1,
    type: "Snake",
    from: 18,
    to: 1,
  },

  {
    Id: 44,
    boardId: 1,
    type: "Snake",
    from: 26,
    to: 10,
  },
  {
    Id: 45,
    boardId: 1,
    type: "Snake",
    from: 39,
    to: 5,
  },
  {
    Id: 46,
    boardId: 1,
    type: "Snake",
    from: 51,
    to: 6,
  },
  {
    Id: 47,
    boardId: 1,
    type: "Snake",
    from: 54,
    to: 36,
  },
  {
    Id: 48,
    boardId: 1,
    type: "Snake",
    from: 56,
    to: 1,
  },
  {
    Id: 49,
    boardId: 1,
    type: "Snake",
    from: 60,
    to: 23,
  },
  {
    Id: 50,
    boardId: 1,
    type: "Snake",
    from: 75,
    to: 28,
  },
  {
    Id: 106,
    boardId: 1,
    type: "Snake",
    from: 83,
    to: 45,
  },
  {
    Id: 107,
    boardId: 1,
    type: "Snake",
    from: 85,
    to: 59,
  },
  {
    Id: 108,
    boardId: 1,
    type: "Snake",
    from: 90,
    to: 48,
  },
  {
    Id: 109,
    boardId: 1,
    type: "Snake",
    from: 92,
    to: 25,
  },
  {
    Id: 110,
    boardId: 1,
    type: "Snake",
    from: 97,
    to: 87,
  },
  {
    Id: 111,
    boardId: 1,
    type: "Snake",
    from: 99,
    to: 63,
  },
  //////// // BOARD 2

  //LADDER
  {
    Id: 9,
    boardId: 2,
    type: "Ladder",
    from: 4,
    to: 25,
  },

  { Id: 10, boardId: 2, type: "Ladder", from: 13, to: 46 },

  {
    Id: 11,
    boardId: 2,
    type: "Ladder",
    from: 33,
    to: 49,
  },

  {
    Id: 12,
    boardId: 2,
    type: "Ladder",
    from: 42,
    to: 63,
  },

  {
    Id: 13,
    boardId: 2,
    type: "Ladder",
    from: 50,
    to: 69,
  },
  {
    Id: 14,
    boardId: 2,
    type: "Ladder",
    from: 62,
    to: 81,
  },
  {
    Id: 15,
    boardId: 2,
    type: "Ladder",
    from: 74,
    to: 92,
  },

  //SNAKE
  {
    Id: 51,
    boardId: 2,
    type: "Snake",
    from: 27,
    to: 5,
  },
  {
    Id: 52,
    boardId: 2,
    type: "Snake",
    from: 40,
    to: 3,
  },
  {
    Id: 53,
    boardId: 2,
    type: "Snake",
    from: 43,
    to: 18,
  },
  {
    Id: 54,
    boardId: 2,
    type: "Snake",
    from: 54,
    to: 31,
  },
  {
    Id: 55,
    boardId: 2,
    type: "Snake",
    from: 66,
    to: 45,
  },
  {
    Id: 56,
    boardId: 2,
    type: "Snake",
    from: 76,
    to: 58,
  },
  {
    Id: 57,
    boardId: 2,
    type: "Snake",
    from: 89,
    to: 53,
  },
  {
    Id: 58,
    boardId: 2,
    type: "Snake",
    from: 99,
    to: 41,
  },

  ///////  // BOARD 3
  //LADDER
  {
    Id: 17,
    boardId: 3,
    type: "Ladder",
    from: 5,
    to: 9,
  },

  { Id: 18, boardId: 3, type: "Ladder", from: 15, to: 25 },

  {
    Id: 19,
    boardId: 3,
    type: "Ladder",
    from: 18,
    to: 80,
  },

  {
    Id: 20,
    boardId: 3,
    type: "Ladder",
    from: 47,
    to: 68,
  },

  {
    Id: 21,
    boardId: 3,
    type: "Ladder",
    from: 63,
    to: 78,
  },
  {
    Id: 22,
    boardId: 3,
    type: "Ladder",
    from: 71,
    to: 94,
  },
  {
    Id: 23,
    boardId: 3,
    type: "Ladder",
    from: 81,
    to: 98,
  },
  {
    Id: 43,
    boardId: 3,
    type: "Ladder",
    from: 44,
    to: 86,
  },

  ///SNAKE
  {
    Id: 61,
    boardId: 3,
    type: "Snake",
    from: 6,
    to: 3,
  },
  {
    Id: 62,
    boardId: 3,
    type: "Snake",
    from: 42,
    to: 19,
  },
  {
    Id: 63,
    boardId: 3,
    type: "Snake",
    from: 45,
    to: 36,
  },
  {
    Id: 64,
    boardId: 3,
    type: "Snake",
    from: 51,
    to: 13,
  },
  {
    Id: 65,
    boardId: 3,
    type: "Snake",
    from: 67,
    to: 51,
  },
  {
    Id: 66,
    boardId: 3,
    type: "Snake",
    from: 83,
    to: 62,
  },
  {
    Id: 67,
    boardId: 3,
    type: "Snake",
    from: 90,
    to: 87,
  },
  {
    Id: 68,
    boardId: 3,
    type: "Snake",
    from: 96,
    to: 66,
  },

  ///////  // BOARD 4
  //LADDER
  {
    Id: 25,
    boardId: 4,
    type: "Ladder",
    from: 1,
    to: 38,
  },

  { Id: 26, boardId: 4, type: "Ladder", from: 4, to: 14 },

  {
    Id: 27,
    boardId: 4,
    type: "Ladder",
    from: 9,
    to: 31,
  },

  {
    Id: 28,
    boardId: 4,
    type: "Ladder",
    from: 21,
    to: 42,
  },

  {
    Id: 29,
    boardId: 4,
    type: "Ladder",
    from: 28,
    to: 84,
  },
  {
    Id: 30,
    boardId: 4,
    type: "Ladder",
    from: 51,
    to: 67,
  },
  {
    Id: 31,
    boardId: 4,
    type: "Ladder",
    from: 71,
    to: 91,
  },
  {
    Id: 32,
    boardId: 4,
    type: "Ladder",
    from: 80,
    to: 100,
  },
  //SNAKE
  {
    Id: 81,
    boardId: 4,
    type: "Snake",
    from: 17,
    to: 7,
  },
  {
    Id: 82,
    boardId: 4,
    type: "Snake",
    from: 54,
    to: 34,
  },
  {
    Id: 83,
    boardId: 4,
    type: "Snake",
    from: 62,
    to: 19,
  },
  {
    Id: 84,
    boardId: 4,
    type: "Snake",
    from: 64,
    to: 60,
  },
  {
    Id: 85,
    boardId: 4,
    type: "Snake",
    from: 87,
    to: 24,
  },
  {
    Id: 86,
    boardId: 4,
    type: "Snake",
    from: 93,
    to: 73,
  },
  {
    Id: 87,
    boardId: 4,
    type: "Snake",
    from: 95,
    to: 75,
  },
  {
    Id: 88,
    boardId: 4,
    type: "Snake",
    from: 98,
    to: 79,
  },

  ////  // BOARD 5
  {
    Id: 33,
    boardId: 5,
    type: "Ladder",
    from: 2,
    to: 38,
  },

  { Id: 34, boardId: 5, type: "Ladder", from: 4, to: 14 },

  {
    Id: 35,
    boardId: 5,
    type: "Ladder",
    from: 9,
    to: 31,
  },

  {
    Id: 36,
    boardId: 5,
    type: "Ladder",
    from: 33,
    to: 85,
  },

  {
    Id: 37,
    boardId: 5,
    type: "Ladder",
    from: 52,
    to: 88,
  },
  {
    Id: 38,
    boardId: 5,
    type: "Ladder",
    from: 80,
    to: 99,
  },

  //SNAKE
  {
    Id: 91,
    boardId: 5,
    type: "Snake",
    from: 51,
    to: 11,
  },
  {
    Id: 92,
    boardId: 5,
    type: "Snake",
    from: 56,
    to: 15,
  },
  {
    Id: 93,
    boardId: 5,
    type: "Snake",
    from: 62,
    to: 57,
  },
  {
    Id: 94,
    boardId: 5,
    type: "Snake",
    from: 92,
    to: 53,
  },
  {
    Id: 95,
    boardId: 5,
    type: "Snake",
    from: 98,
    to: 8,
  },

  ////////// BOARD 6

  //LADDER
  {
    Id: 100,
    boardId: 6,
    type: "Ladder",
    from: 1,
    to: 38,
  },

  { Id: 99, boardId: 6, type: "Ladder", from: 4, to: 14 },

  {
    Id: 98,
    boardId: 6,
    type: "Ladder",
    from: 9,
    to: 31,
  },

  {
    Id: 97,
    boardId: 6,
    type: "Ladder",
    from: 21,
    to: 42,
  },

  {
    Id: 96,
    boardId: 6,
    type: "Ladder",
    from: 51,
    to: 67,
  },
  {
    Id: 90,
    boardId: 6,
    type: "Ladder",
    from: 71,
    to: 91,
  },
  {
    Id: 89,
    boardId: 6,
    type: "Ladder",
    from: 80,
    to: 100,
  },
  {
    Id: 40,
    boardId: 6,
    type: "Ladder",
    from: 28,
    to: 84,
  },

  //SNAKE
  {
    Id: 16,
    boardId: 6,
    type: "Snake",
    from: 17,
    to: 7,
  },
  {
    Id: 69,
    boardId: 6,
    type: "Snake",
    from: 54,
    to: 34,
  },
  {
    Id: 70,
    boardId: 6,
    type: "Snake",
    from: 62,
    to: 19,
  },
  {
    Id: 24,
    boardId: 6,
    type: "Snake",
    from: 64,
    to: 60,
  },
  {
    Id: 113,
    boardId: 6,
    type: "Snake",
    from: 87,
    to: 24,
  },
  {
    Id: 112,
    boardId: 6,
    type: "Snake",
    from: 93,
    to: 73,
  },
  {
    Id: 60,
    boardId: 6,
    type: "Snake",
    from: 95,
    to: 75,
  },
  {
    Id: 59,
    boardId: 6,
    type: "Snake",
    from: 98,
    to: 79,
  },
];

async function seed() {
  try {
    const sequelize = new Sequelize("testdb", "root", "1234", {
      host: "localhost",
      dialect: "mysql",
    });

    await sequelize.sync({ force: true });

    await Board.bulkCreate(boardData);
    await BoardElement.bulkCreate(boardElementData);

    console.log("Seed data created successfully.");

    await sequelize.close();
  } catch (error) {
    console.error("Error seeding the database:", error);
  }
}
module.exports = seed;

seed();
