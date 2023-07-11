const db = require("../../models");
const GamePlayer = db.GamePlayer;
const Game = db.Game;
const User = db.User;
const handleJoinGame = async (req, res, next) => {
  let { playerId, gameId, color } = req.body;
  try {
    let game = await Game.findByPk(gameId);
    if (!game) throw new Error("Game Doesn't Exist");
    if (game.playesNumber == game.capacity) throw new Error("Game Is Full");
    let user = User.findByPk(playerId);
    if (!user) throw new Error("Player Doesn't Exist");
    let players = await GamePlayer.findAll({ where: { gameId } });
    let playerOrder = 1;
    players.forEach((player) => {
      if (player.order >= playerOrder) playerOrder = player.order + 1;
    });
    players.forEach((player) => {
      if (player.color == color) throw new Error("Choose Another Color");
    });
    let gamePlayer = {
      playerId,
      gameId,
      color,
      lastPosition: 0,
      order: playerOrder,
    };
    let createdGamePlayer = await GamePlayer.create(gamePlayer);
    if (!createdGamePlayer) throw "Player Can't Join";
    let num = await Game.update(
      { playesNumber: game.playesNumber + 1 },
      { where: { Id: gameId } }
    );
    if (num != 1) throw new Error("Can't Update Game");
    if (game.playesNumber + 1 == game.capacity) {
      let num = await Game.update(
        { status: "active" },
        { where: { Id: gameId } }
      );
      if (num != 1) throw new Error("Can't Update Game");
    }
    res.status(200).send({ createdGamePlayer });
    // emit room-update event to that room
  } catch (e) {
    next(e);
  }
};

module.exports = handleJoinGame;
