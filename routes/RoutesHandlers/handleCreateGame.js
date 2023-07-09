import Game from "../../modules/game";
import Board from "../../modules/board";
import User from "../../modules/user";

const handleCreateGame = (req, res) => {
    let username = req.body.username;
    let noOfPlayers = req.body.noOfPlayers;
    let boardID = req.body.boardID;

    let gameID = 0;
    // TODO: get last gameID from Games table and assign gameID

    let board = new Board();
    // TODO: get board from Board table using boardID

    let user = new User();
    // TODO: get user from User table using username

    let game = new Game(gameID, board, noOfPlayers);
    game.startGame(user);
};

export default handleCreateGame;
