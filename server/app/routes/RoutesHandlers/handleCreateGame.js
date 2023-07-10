const db = require("../../models");
const Game = db.Game;
const GamePlayer = db.GamePlayer;
const handleCreateGame = async (req, res, next) => {
  let { currentPlayer, capacity, boardId, color } = req.body;
  let game = {
    currentPlayer,
    playesNumber: 1,
    capacity,
    boardId,
    date: new Date(),
  };
  try {
    let createdGame = await Game.create(game);
    let gamePlayer = {
      color,
      lastPosition: 0,
      order: 0,
      gameId: createdGame.Id,
      playerId: currentPlayer,
    };
    let createdGamePlayer = await GamePlayer.create(gamePlayer);
    if (!createdGamePlayer) throw new Error("No Player Created");
    res.status(200).send({ createdGame });
  } catch (e) {
    next(e);
  }
};

module.exports = handleCreateGame;
