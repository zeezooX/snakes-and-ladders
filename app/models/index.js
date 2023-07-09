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
db.Board.hasMany(db.Game, {
  foreignKey: "boardId",
});
db.Game.belongsTo(db.Board);
db.User.hasMany(db.Game, {
  foreignKey: "userId",
});
db.Game.belongsTo(db.User);
db.Game.belongsToMany(db.User, { through: db.GamePlayer });
db.User.belongsToMany(db.Game, { through: db.GamePlayer });
module.exports = db;
