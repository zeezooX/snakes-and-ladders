const db = require("../../models");
const fetchTurn = require("../../socket/handlers/fetchTurn");
const GamePlayer = db.GamePlayer;
const Game = db.Game;
require("dotenv").config()

const handleLeaveGame = (socket) => {
return async (req, res, next) => {
  const { playerId, gameId } = req.body;
  try {
    let player = await GamePlayer.findOne({ where: { playerId, gameId } });
    if (!player) throw new Error("Player Not in The Game");
    let game = await Game.findByPk(gameId);
    if (!game) throw new Error("Game Doesn't Exist");
    let num = await Game.update(
      { playersNumber: game.playersNumber - 1 },
      { where: { Id: gameId } }
    );
    if (num != 1) throw new Error("Can't Update Game");
    await GamePlayer.destroy({ where: { playerId } });
    let gamePlayers = await GamePlayer.findAll({ where: { gameId } });
    gamePlayers.forEach((playerr) => {
      if (playerr.order > player.order) {
        console.log(playerr.order, player.order);
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

    fetchTurn(gameId).then((data)=>{
      socket.in(process.env.ROOMPREFIX+String(gameId)).emit('room-update', data)
    });
  } catch (e) {
    next(e);
  }
}
};

module.exports.create = handleLeaveGame;
