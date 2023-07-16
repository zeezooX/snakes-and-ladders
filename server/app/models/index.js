const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

// Override timezone formatting
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
  date = this._applyTimezone(date, options);

  // Z here means current timezone, _not_ UTC
  // return date.format('YYYY-MM-DD HH:mm:ss.SSS Z');
  return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  port: dbConfig.port,
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

db.User = require("./user.model.js")(sequelize, Sequelize);
db.Board = require("./board.model.js")(sequelize, Sequelize);
db.Game = require("./game.model.js")(sequelize, Sequelize, db);
db.BoardElement = require("./boardelement.model.js")(sequelize, Sequelize, db);
db.GamePlayer = require("./gameplayer.model.js")(sequelize, Sequelize, db);



db.Board.hasMany(db.Game, {
  foreignKey: "boardId",
  targetKey: "boardID"
});
db.Game.belongsTo(db.Board, {
  foreignKey: "boardId",
  targetKey: "boardID"
});
db.User.hasOne(db.Game, {
  foreignKey: "currentPlayer",
  targetKey: "userId"
});
db.Game.belongsTo(db.User, {
  foreignKey: "currentPlayer",
  targetKey: "userId"
});

db.GamePlayer.hasMany(db.User, {
  foreignKey: "userId",
  targetKey: "playerId"
})
db.User.belongsTo(db.GamePlayer, {
  foreignKey: "userId",
  targetKey: "playerId"
})

db.Game.hasMany(db.GamePlayer,{
  foreignKey: "gameId",
  targetKey: "Id"
})

db.GamePlayer.belongsTo(db.Game,{
  foreignKey: "gameId",
  targetKey: "Id"
})

db.Board.hasMany(db.BoardElement, {
  foreignKey: "boardId",
  targetKey: "boardID"
});
db.BoardElement.belongsTo(db.Board, {
  foreignKey: "boardId",
  targetKey: "boardID"
});



module.exports = db;
