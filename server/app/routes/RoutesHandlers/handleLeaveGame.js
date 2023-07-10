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
    for (let playerr of gamePlayers) {
      if (playerr.order > player.order) {
        await GamePlayer.update(
          { order: playerr.order - 1 },
          { where: { Id: gameId, playerId: playerr.playerId } }
        );
      }
    }
    res.status(200).send("Done");
  } catch (e) {
    next(e);
  }
};

module.exports = handleLeaveGame;
