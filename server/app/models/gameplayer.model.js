const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize, db) => {
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
          model: db.User,
          key: "userId",
        },
      },
      gameId: {
        type: Sequelize.INTEGER,
        references: {
          model: db.Game,
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
      tableName: "gameplayer",
    }
  );

  return GamePlayer;
};
