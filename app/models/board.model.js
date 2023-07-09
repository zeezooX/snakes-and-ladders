module.exports = (sequelize, Sequelize) => {
  const Board = sequelize.define(
    "Board",
    {
      boardID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      boardImage: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      boardName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "boards",
    }
  );

  return Board;
};
