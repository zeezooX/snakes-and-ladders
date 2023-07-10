const db = require("../../models");
const Game = db.Game;
const GP = db.GamePlayer;
const ELEM = db.BoardElement;
const User = db.User;
const handleMock = async (req, res) => {
  const players = await GP.findAll({
    raw:true,
    include: [{
    model: User,
    required: true,
    attributes:['userName']
   }]
   ,where:{gameID:9},
   attributes:['color','order','lastPosition']})
  console.log(players[0])
  res.status(200).json(players[0]['User.userName'])
}
module.exports = handleMock;

/*
const __handleMock = (socket) => {
  return async (req, res, next) => {
    const makeMove = () => Math.ceil(Math.random() * 6);
    try {
      let gameID = parseInt(req.body.gameID);
      console.log(gameID);
      let dice = 1;
      let game = await Game.findOne({
        where: {
          Id: gameID,
        },
      });
      console.log(game);
      game = game?.dataValues;
      console.log("-------------------------------");
      console.log(game);
      console.log(game.currentPlayer);
      if (game && game.status === "active") {
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
        const newPos = Math.min(99, dice + oldPosition);

        const elem = await ELEM.findOne({
          where: { boardId: boardId, from: newPos },
        });
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
        console.log("yooooo");
        await Game.update(
          {
            currentPlayer: nextGp.playerId,
          },
          {
            where: { Id: gameID },
          }
        );
        if (dice + oldPosition >= 99) {
          await Game.update(
            {
              status: "FINISHED",
            },
            {
              where: { Id: gameID },
            }
          );
        }
        res.status(200).json({ dice });
        //emit turn-update event for that room
        // turn-update:
        // {
        //     players:   [{name,color,position}]
        //     last_move: {
        //         player_index:   int,
        //         dice_outcome:   int,
        //         from:           int,
        //         to:             int            // if (to != (from + dice_outcome)) then it's special
        //     }
        //     next_player_index: int
        // }
        
        const players = GP.findAll({where:gameID})
        console.log(players)

      } else {
        throw new Error("Game doesn't exist");
      }
    } catch (e) {
      next(e);
    }
  }
}
module.exports.create = handleMakeMove;
*/
