const db = require("../../models");
const Game = db.Game;
const Op = db.Sequelize.Op;

const handleGetGame = (req, res) => {
  Game.findOne({ where: { Id: req.query.id } })
    .then((data1) => {
      db.sequelize
        .query(
          "select * from gameplayer gp join users u on gp.playerId = u.userId where gp.gameId = " +
            req.query.id +
            ";",
          {
            type: db.sequelize.QueryTypes.SELECT,
          }
        )
        .then((data2) => {
          res.send({ game: data1, users: data2 });
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving games.",
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving games.",
      });
      flag = false;
      console.log(flag);
    });
};

module.exports = handleGetGame;
