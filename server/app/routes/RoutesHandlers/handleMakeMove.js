const db = require("../../models");
const Game = db.Game;
const GP = db.GamePlayer;
const ELEM = db.BoardElement;
const handleMakeMove = async (req, res, next) => {
  const makeMove = () => Math.ceil(Math.random() * 6);
  let gameID = req.body.gameID;

  let dice = 1;
  let game = await Game.findOne({
    where: {
      Id: gameID,
    },
  });

  try {
    if (game && game.status === "ACTIVE") {
      dice = makeMove();

      const currentPlayer = game.currentPlayer;
      const boardId = game.boardId;

      const gp = await GP.findOne({
        where: { gameID: gameID, playerId: currentPlayer },
      });
      const oldPosition = gp.lastPosition;
      const currentOrder = gp.order;
      const nextOrder = (currentOrder + 1) % game.capacity;

      const nextGp = await GP.findOne({
        where: { gameID: gameID, order: nextOrder },
      });
      newPos = Math.min(99, dice + oldPosition);

      const elem = await ELEM.findOne({
        where: { boardId: boardId, from: newPos },
      });
      const newPos = 0;
      if (elem) {
        newPos = elem.to;
      }
      await GP.update(
        {
          lastPosition: newPos,
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
