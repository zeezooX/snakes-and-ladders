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
      if (!game) throw new Error("Game Doesn't Exist");
      await Game.update(
        { playersNumber: game.playersNumber - 1 },
        { where: { Id: gameId } }
      );
      // if (num != 1) throw new Error("Can't Update Game");
      const ord = player.ord
      await GamePlayer.decrement(
        { order: 1 },
        {
          where: {
            Id: gameId, order: {
              [Op.gt]: ord
            }
          }
        }
        )
        
      let gamePlayers = await GamePlayer.findAll({ where: { gameId } });
      await GamePlayer.destroy({ where: { playerId } });
      if (gamePlayers.length == 0) {
        let num = await Game.update(
          { status: "finished" },
          { where: { Id: gameId } }
        );
        // if (num != 1) throw new Error("Can't Update Game");
      }
      res.status(200).send("Done");

      fetchTurn(gameId).then((data) => {
        socket.in(process.env.ROOMPREFIX + String(gameId)).emit('room-update', data)
      });
    } catch (e) {
      next(e);
    }
  }
};

module.exports.create = handleLeaveGame;
