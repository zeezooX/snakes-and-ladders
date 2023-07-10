const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const Game = sequelize.define(
    "Game",
    {
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
        type: DataTypes.ENUM("pending", "active", "finished"),
        allowNull: false,
        defaultValue: "pending",
      },
      boardId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Board",
          key: "boardId",
        },
      },
      currentPlayer: {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: "userId",
        },
      },
    },
    {
      tablaName: "games",
    }
  );

  return Game;
};
