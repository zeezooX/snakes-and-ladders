const db = require("../../models");
const GamePlayer = db.GamePlayer;
const Game = db.Game;
const handleCurrentGame = async (req, res, next) => {
  try {
    let user = req.user;
    let playerGames = await GamePlayer.findAll({
      where: { playerId: user.userId },
    });
    for (let playerGame of playerGames) {
      console.log(playerGame + "tttttt");
      let game = await Game.findOne({ where: { Id: playerGame.gameId } });
      if (game.status == "active" || game.status == "pending") {
        res.status(200).send(game);
      }
    }
    const error = new Error("User Is Not In A Game");
    error.status = 404;
    throw error;
  } catch (e) {
    next(e);
  }
};
module.exports = handleCurrentGame;
