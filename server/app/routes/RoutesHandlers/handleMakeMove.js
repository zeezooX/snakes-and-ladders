const db = require("../../models");
const Game = db.Game;
const GP = db.GamePlayer;
const handleMakeMove = async (req, res) => {
  let gameID = req.body.gameID;
  let dice = 1;
  let game = await Game.findOne({
    where: {
      Id: gameID,
    },
  });

  try {
    if (game) {
      // newGame = {...game};
      dice = makeMove();

      const currentPlayer = game.currentPlayer;
      const gp = await GP.findOne({
        where: { gameID: gameID, playerId: currentPlayer },
      });
      const oldPosition = gp.lastPosition;
      const currentOrder = gp.order;
      const nextOrder = (currentOrder + 1) % game.capacity;

      const nextGp = await GP.findOne({
        where: { gameID: gameID, order: nextOrder },
      });

      await GP.update(
        {
          lastPosition: Math.min(99, dice + oldPosition),
        },
        {
          where: { playerId: currentPlayer },
        }
      );
      await Game.update(
        {
          currentPlayer: nextGp.playerId,
        },
        {
          where: { gameID: gameID },
        }
      );
      if (dice + oldPosition >= 99) {
        await Game.update(
          {
            status: "FINISHED",
          },
          {
            where: { gameID: gameID },
          }
        );
      }
    } else {
      throw new Error("Game doesn't exist");
    }
  } catch (e) {
    next(e);
  }
};

module.exports = handleMakeMove;
