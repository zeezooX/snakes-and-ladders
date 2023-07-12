const db = require("../../models");
const Game = db.Game;
const Op = db.Sequelize.Op;

const handleRetrieveGames = (req, res) => {
  var condition = {};
  if (req.query && req.query.status) {
    condition = { ...condition, status: req.query.status };
  }
  if (req.query && req.query.userID) {
    db.sequelize
      .query(
        "select * from games g join gameplayer gp on gp.gameId = g.Id where gp.playerId = " +
          req.query.userID +
          ";",
        {
          type: db.sequelize.QueryTypes.SELECT,
        }
      )
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving games.",
        });
      });
  } else {
    Game.findAll({ where: condition })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving games.",
        });
      });
  }
};

module.exports = handleRetrieveGames;
