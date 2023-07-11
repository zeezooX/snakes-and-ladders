const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Tutorial = require("./tutorial.model.js")(sequelize, Sequelize);
db.User = require("./user.model.js")(sequelize, Sequelize);
db.Board = require("./board.model.js")(sequelize, Sequelize);
db.Game = require("./game.model.js")(sequelize, Sequelize);
db.GamePlayer = require("./gameplayer.model.js")(sequelize, Sequelize);
db.BoardElement = require("./boardelement.model.js")(sequelize, Sequelize);
db.Board.hasMany(db.Game, {
  foreignKey: "boardId",
  targetKey: "boardID"
});
db.Game.belongsTo(db.Board,{
  foreignKey: "boardId",
  targetKey: "boardID"
});
db.User.hasOne(db.Game, {
  foreignKey: "currentPlayer",
  targetKey: "userId"
});
db.Game.belongsTo(db.User,{
  foreignKey: "currentPlayer",
  targetKey: "userId"
});

// db.Game.belongsToMany(db.User, { through: db.GamePlayer });
// db.User.belongsToMany(db.Game, { through: db.GamePlayer });

db.GamePlayer.hasOne(db.User,{
  foreignKey: "userId",
  targetKey:"playerId"
})
db.User.belongsTo(db.GamePlayer,{
  foreignKey: "userId",
  targetKey:"playerId"
})

db.GamePlayer.hasMany(db.Game,{
  foreignKey: "Id",
  targetKey: "gameId"
})
db.Game.belongsTo(db.GamePlayer,{
  foreignKey: "Id",
  targetKey: "gameId"
})

db.Board.hasMany(db.BoardElement, {
  foreignKey: "boardId",
  targetKey: "boardID"
});
db.BoardElement.belongsTo(db.Board,{
  foreignKey: "boardId",
  targetKey: "boardID"
});
module.exports = db;
