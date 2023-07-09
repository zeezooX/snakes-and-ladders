import Game from "../../modules/game";
import Board from "../../modules/board";
import User from "../../modules/user";

const handleJoinGame = (req, res) => {
    let username = req.body.username;
    let gameID = req.body.gameID;

    let user = new User();
    // TODO: get user from User table using username

    let game = new Game();
    // TODO: get game from Game table using gameID

    game.joinGame(user);
};

export default handleCreateGame;
