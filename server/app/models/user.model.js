module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "User",
    {
      userId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "users",
    }
  );

  return User;
};
