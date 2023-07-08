const express = require("express");
const router = express.Router();
import User from "../modules/user";
import Board from "../modules/board";
import Game from "../modules/game";

router.route("/register");
router.route("/login");
router.route("/retrieveGames");
router.route("/makeMove");
router.route("/getGame");
router.route("/joinGame");
router.route("/leaveGame");
router.route("/createGame");
