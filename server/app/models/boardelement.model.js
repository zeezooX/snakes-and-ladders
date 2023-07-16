module.exports = (sequelize, Sequelize, db) => {
  const BoardElement = sequelize.define(
    "BoardElement",
    {
      Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      boardId: {
        type: Sequelize.INTEGER,
        references: {
          model: db.Board,
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
    },
    {
      tableName: "boardelements",
      modelName: "BoardElement",
    }
  );

  return BoardElement;
};
