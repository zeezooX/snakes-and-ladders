const Game = require("../../modules/game");
const Board = require("../../modules/board");
const User = require("../../modules/user");

const handleJoinGame = (req, res) => {
    let username = req.body.username;
    let gameID = req.body.gameID;

    let user = new User();
    // TODO: get user from User table using username

    let game = new Game();
    // TODO: get game from Game table using gameID

    game.joinGame(user);
};

module.exports = handleJoinGame;
