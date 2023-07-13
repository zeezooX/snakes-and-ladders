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
      let game = await Game.findOne({ where: { Id: playerGame.gameId } });
      if (game.status.toLowerCase() === "active" || game.status.toLowerCase() == "pending") {
        res.status(200).send(game);
        return;
      }
    }
    const error = new Error("User Is Not In A Game");
    throw error;
  } catch (e) {
    next(e);
  }
};
module.exports = handleCurrentGame;
