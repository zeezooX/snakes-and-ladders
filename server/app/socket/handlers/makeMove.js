const db = require("../../models");
const Game = db.Game;
const GP = db.GamePlayer;
const ELEM = db.BoardElement;
const User = db.User;

const handleMakeMove =
    async (game_id,user) => {
        const rollDice = () => Math.ceil(Math.random() * 6);
        try {
            let gameID = parseInt(game_id);
            if (isNaN(gameID)) {
                throw new Error("failed parsing, make sure to include a proper 'gameID'");
            }
            const dice = rollDice();
            let game = await Game.findOne({
                where: {
                    Id: gameID,
                },
            });
            game = game?.dataValues;

            if (game && game.status.toUpperCase() === "ACTIVE") {
                const currentPlayer = game.currentPlayer;
                const authUserId = user.userId
                const authUserName = user.name
                if (authUserId !== currentPlayer) {
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
                let newPos = dice + oldPosition;
                let gameStatus = "ACTIVE"
                if (newPos <= 100) {
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
                    if (newPos == 100){
                        gameStatus = "FINISHED"
                        await Game.update(
                            {
                                status: "FINISHED",
                            },
                            {
                                where: { Id: gameID },
                            }
                        );
                    }
                }

                await Game.update(
                    {
                        currentPlayer: nextGp.playerId,
                    },
                    {
                        where: { Id: gameID },
                    }
                );

                // res.status(200).json({ dice });
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
                let Players = await User.findAll({
                    raw: true,
                    include: [{
                      model: GP,
                      required: true,
                      attributes: ['color', 'lastPosition', 'order'],
                      foreignKey: {
                        name: 'playerId', // Name of the foreign key column in the User model
                      },
                      where: { gameID: gameID }
                    }]
                    , attributes: ['userId', 'userName']
                  });
                  
                Players.sort((a,b)=>a.order-b.order)

                const last_player_index = Players.findIndex((p) => p['User.userName'] === authUserName)
                const next_player_index = Players.findIndex((p) => p['User.userName'] === nextGp.userName)

                /*
                {
                    game_status: string
                    board_id: int,
                    players:   [{name,color,position}],
                    pending_player_index: int,
                    move{
                        player_id: int,
                        dice_outcome: int,
                        intermediate_pos: int	// if no snake or ladder, it should be the same as final_pos
                        final_pos: int
                    }
                    }

                */
                
                return {
                    game_status: gameStatus,
                    board_id: game.boardId,
                    players: Players,
                    pending_player_index: next_player_index,
                    move: {
                        player_index: last_player_index,
                        dice_outcome: dice,
                        from: oldPosition,
                        to: newPos
                    },
                }
            } else {
                throw new Error("No such on-going game exists");
            }
        } catch (e) {
            next(e);
        }
    }
module.exports.create = handleMakeMove;
