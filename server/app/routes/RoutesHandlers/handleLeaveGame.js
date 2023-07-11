const db = require("../../models");
const GamePlayer = db.GamePlayer;
const Game = db.Game;
const handleLeaveGame = async (req, res, next) => {
  const { playerId, gameId } = req.body;
  try {
    let player = await GamePlayer.findOne({ where: { playerId, gameId } });
    if (!player) throw new Error("Player Not in The Game");
    let game = await Game.findByPk(gameId);
    if (!game) throw new Error("Game Doesn't Exist");
    let num = await Game.update(
      { playesNumber: game.playesNumber - 1 },
      { where: { Id: gameId } }
    );
    if (num != 1) throw new Error("Can't Update Game");
    await GamePlayer.destroy({ where: { playerId } });
    let gamePlayers = await GamePlayer.findAll({ where: { gameId } });
    gamePlayers.forEach((playerr) => {
      if (playerr.order > player.order) {
        GamePlayer.update(
          { order: playerr.order - 1 },
          { where: { Id: gameId, playerId: playerr.playerId } }
        );
      }
    });
    if (gamePlayers.length == 0) {
      let num = await Game.update(
        { status: "finished" },
        { where: { Id: gameId } }
      );
      if (num != 1) throw new Error("Can't Update Game");
    }
    res.status(200).send("Done");
  } catch (e) {
    next(e);
  }
};

module.exports = handleLeaveGame;
