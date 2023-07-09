const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const GamePlayer = sequelize.define(
    "GamePlayer",
    {
      Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      playerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: "userId",
        },
      },
      gameId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Game",
          key: "Id",
        },
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      lastPosition: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      modelName: "GamePlayer",
      tablaName: "gameplayer",
    }
  );

  return GamePlayer;
};
