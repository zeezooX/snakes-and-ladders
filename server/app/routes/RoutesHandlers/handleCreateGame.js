const db = require("../../models");
const colors = require("../helpers/colors");
const Game = db.Game;
const GamePlayer = db.GamePlayer;
const isPlayerGaming = require("../helpers/isPlayerGaming")
const handleCreateGame = async (req, res, next) => {
  let {capacity, boardId } = req.body;
  if(capacity>10 || capacity<2){
    throw new Error("Invalid Capacity");
  }
  if(isPlayerGaming(req.user.userId)){
    throw new Error("You are already in a game");
  }

  let game = {
    currentPlayer:req.user.userId,
    creationDate: new Date(),
    playersNumber: 1,
    capacity,
    boardId,
    lastPlayTime: new Date()
  };
  const color = colors[0]
  try {
    let createdGame = await Game.create(game);
    let gamePlayer = {
      color:color,
      lastPosition: 0,
      order: 1,
      gameId: createdGame.Id,
      playerId: req.user.userId,
    };
    let createdGamePlayer = await GamePlayer.create(gamePlayer);
    if (!createdGamePlayer) throw new Error("No Player Created");
    res.status(200).send({ createdGame });
  } catch (e) {
    next(e);
  }
};

module.exports = handleCreateGame;
