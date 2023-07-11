
const db = require("../../models");
const flattenObject = require("../../utils/flatten.js");

const Game = db.Game;
const GP = db.GamePlayer;
const ELEM = db.BoardElement;
const User = db.User;
const fetchTurn = async (game_id) => {
    try{
    let gameID = parseInt(game_id);
    console.log(gameID);
    if (isNaN(gameID)) {
       return(`failed parsing ${game_id}, make sure to include a proper gameID`);
    }
    const game = await Game.findOne({
        where: {
            Id: gameID,
        },
    });
    if(!game){
        return(`No game exists with gameID: ${gameID}`)
    }

    const currentPlayer = game.currentPlayer;

    let Players = await User.findAll({
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
    Players = Players.map(p => {
        return {
            name: p.userName,
            color: p.GamePlayer.color,
            position: p.GamePlayer.lastPosition,
            order:p.GamePlayer.order,
            id: p.userId
        }
    })

    Players.sort((a, b) => a.order - b.order)

    const pending_player_index = Players.findIndex(
        (p) => (p.id === currentPlayer)
    )
    const g = {
        game_status: game.status,
        board_id: game.boardId,
        pending_player_index: pending_player_index,
        players: Players,
    }
    console.log(g)
    return (g)
}
catch(e){
    return `Error occured\n${e}`
}
}
module.exports = fetchTurn;