import express from "express";

// const express = require("express");
const router = express.Router();
import User from "../modules/user.js";
import Board from "../modules/board.js";
import Game from "../modules/game.js";

router.route("/register");
router.route("/login");
router.route("/retrieveGames");
router.route("/makeMove");
router.route("/getGame");
router.route("/joinGame");
router.route("/leaveGame");
router.route("/createGame");

export default router;
