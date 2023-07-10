const db = require("../../models");
const Game = db.Game;
const GP = db.GamePlayer;
const ELEM = db.BoardElement;
const User = db.User;
const handleMakeMove = (socket) => {
  return async (req, res, next) => {
    const rollDice = () => Math.ceil(Math.random() * 6);
    try {
      let gameID = parseInt(req.body.gameID);
      console.log(gameID);
      if(isNaN(gameID)){
        throw new Error("failed parsing, make sure to include a 'gameID' field");
      }
      const dice = rollDice();
      let game = await Game.findOne({
        where: {
          Id: gameID,
        },
      });
      console.log(game);
      game = game?.dataValues;

      if (game && game.status.toUpperCase() === "ACTIVE") {
        const currentPlayer = game.currentPlayer;
        const authUserId = req.user.userId
        const authUserName = req.user.name
        if(authUserId !== currentPlayer){
          throw new Error("Not permitted! wait for your turn");
        }
        const boardId = game.boardId;
        const gp = await GP.findOne({
          where: { gameID: gameID, playerId: currentPlayer },
        });
        const oldPosition = gp.lastPosition;

        const currentOrder = gp.order;
        const nextOrder = (currentOrder) % game.capacity + 1;
        const nextGp = await GP.findOne({
          where: { gameID: gameID, order: nextOrder },
        });
        let newPos = Math.min(99, dice + oldPosition);
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
        await Game.update(
          {
            currentPlayer: nextGp.playerId,
          },
          {
            where: { Id: gameID },
          }
        );
        if (dice + oldPosition >= 100) {
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
        /*
        turn-update:
        {
            players:   [{"User.userName","color","lastPosition"}]
            last_move: {
                player_index:   int,  // index
                dice_outcome:   int,
                from:           int,
                to:             int     // if (to != (from + dice_outcome)) then it's special
            }
            next_player_index: int  //index in players 
        }
        */
        const players = await GP.findAll({
          raw:true,
          include: [{
          model: User,
          required: true,
          attributes:['userName']
         }]
         ,where:{gameID:9},
         attributes:['color','lastPosition']});

        const last_player_index = players.findIndex((p)=>p['User.userName'] === authUserName)
        const next_player_index = players.findIndex((p)=>p['User.userName'] === nextGp.userName)
 
        socket.to(gameID).emit('turn-update',
        {
          players:players,
          last_move:{
            player_index : last_player_index,
            dice_outcome: dice,
            from: oldPosition,
            to: newPos
          },
          next_player_index:next_player_index
        })

      } else {
        throw new Error("No such ongoing game exists");
      }
    } catch (e) {
      next(e);
    }
  }
}
module.exports.create = handleMakeMove;
