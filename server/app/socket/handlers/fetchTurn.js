
const db = require("../../models");
const Game = db.Game;
const GP = db.GamePlayer;
const ELEM = db.BoardElement;
const User = db.User;
const fetchTurn = async (game_id)=>{
    let gameID = parseInt(game_id);
    console.log(gameID);
    if(isNaN(gameID)){
        throw new Error("failed parsing, make sure to include a proper 'gameID'");
    }
    const dice = rollDice();
    let game = await Game.findOne({
    where: {
        Id: gameID,
    },
    });
    const currentPlayer = game.currentPlayer;
    
    let players = await GP.findAll({
        raw:true,
        include: [{
        model: User,
        required: true,
        attributes:['userId','userName']
    }]
    ,where:{gameID:gameID},
    attributes:['color','lastPosition','order']});
    
    players.sort((a,b)=>a.order-b.order)
    const pending_player_index = players.findIndex(
        (p)=>p['User.userId'] === currentPlayer
    )

    return {
        game_status:game.status,
        board_id:game.boardId,
        players:players,
        pending_player_index:pending_player_index
    }
}
module.exports = fetchTurn;