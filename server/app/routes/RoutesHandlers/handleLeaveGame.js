const db = require("../../models");
const GamePlayer = db.GamePlayer;
const Game = db.Game;
const handleLeaveGame = async (req, res, next) => {
  const { playerId, gameId } = req.body;
  try {
    let player = GamePlayer.findOne({ where: { playerId, gameId } });
    if (!player) throw new Error("Player Not in The Game");
    let game = await Game.findByPk(gameId);
    if (!game) throw new Error("Game Doesn't Exist");
    GamePlayer.destroy({ where: { playerId } });
    let num = await Game.update(
      { playesNumber: game.playesNumber - 1 },
      { where: { Id: gameId } }
    );
    console.log(num);
    if (num != 1) throw new Error("Can't Update Game");
    res.status(200).send("Done");
  } catch (e) {
    next(e);
  }
};

module.exports = handleLeaveGame;
