const db = require("../../models");
const GP = db.GamePlayer;
const Game = db.Game;
const User = db.User;
const Op = db.Sequelize.Op;

const isPlayerGaming = async (userId)=>{
    const game = await Game.findOne({
        include: [{
            model: GP,
            required: true,
            foreignKey: {
                name: 'gameId', // Name of the foreign key column in the User model
            },where:{playerId:userId}
    }],
    where: { [Op.or]: [{status: "pending"}, {status: "active"}] }
    });
    if(!game){
        return false
    }
    else{
        return game.Id
    }

}
module.exports = isPlayerGaming