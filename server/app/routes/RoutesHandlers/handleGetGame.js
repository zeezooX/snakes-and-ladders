const db = require("../../models");
const Game = db.Game;
const Op = db.Sequelize.Op;

const handleGetGame = (req, res) => {
  //TODO: Get all users in the game
  Game.findOne({ where: {Id: req.query.id} })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving games.",
      });
    });
};

module.exports = handleGetGame;
