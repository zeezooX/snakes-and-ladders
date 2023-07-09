import Game from "../../modules/game.js";
import Board from "../../modules/board.js";
import User from "../../modules/user.js";
import { Sequelize } from "sequelize";
//const sequelize = new Sequelize();
import jwt from "jsonwebtoken";

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

  let token = req.body.token;

  const tokenToVerify = token;

  return jwt.verify(tokenToVerify, "qwertyuiop", (err, decoded) => {
    if (err) {
      console.error("Token verification failed:", err.message);
    } else {
      decoded === user.userName ? true : false;
    }
  });

  /*  sequelize
    .sync()
    .then(() => {
      Game.create({
        ...game,
      })
        .then((res) => {
          res.json(res);
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });*/
};

export default handleCreateGame;
