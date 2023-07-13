const db = require("../../models");
const fetchTurn = require("../../socket/handlers/fetchTurn");
const GamePlayer = db.GamePlayer;
const Game = db.Game;
const Op = db.Sequelize.Op;

require("dotenv").config()

const handleLeaveGame = (socket) => {
  return async (req, res, next) => {
    const playerId = req.user.userId
    const { gameId } = req.body;
    try {
      let player = await GamePlayer.findOne({ where: { playerId, gameId } });
      if (!player) throw new Error("Player Not in The Game");
      let game = await Game.findByPk(gameId);
      const p_num = game.playersNumber
      if (!game) throw new Error("Game Doesn't Exist");


      if (game.currentPlayer === parseInt(playerId)) {
        const currentOrder = player.order;
        let nextOrder = Infinity;
        let nextPlayerId = game.currentPlayer;

        const players = await GamePlayer.findAll({ where: { gameID: gameId } })
        for (const element of players) {
          if (element.order > currentOrder && element.order < nextOrder) {
            nextOrder = element.order;
            nextPlayerId = element.playerId;
          }
        }

        await Game.update(
          { currentPlayer: nextPlayerId },
          { where: { Id: gameId } }
        );
      }

      await GamePlayer.destroy({ where: { playerId } });
      if (parseInt(p_num) === 1) {
        await Game.destroy({ where: { Id:gameId } })
      }
      else {
        await Game.update(
          { playersNumber: p_num - 1 },
          { where: { Id: gameId } }
        );
      }


      fetchTurn(gameId).then((data) => {
        socket.in(process.env.ROOMPREFIX + String(gameId)).emit('room-update', data)
      });
      res.status(200).send("Done");
    } catch (e) {
      next(e);
    }
  }
};

module.exports.create = handleLeaveGame;
