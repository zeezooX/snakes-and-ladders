import express from "express";

// const express = require("express");
const router = express.Router();
import User from "../modules/user.js";
import Board from "../modules/board.js";
import Game from "../modules/game.js";
import handleRigester from "./RoutesHandlers/registerRoute.js";
import handleLogin from "./RoutesHandlers/handleLogin.js";
import retrieveGames from "./RoutesHandlers/retrieveGames.js";

router.route("/register").post((req, res) => {
  handleRigester(req, res);
});

router.route("/login").post((req, res) => {
  handleLogin(req, res);
});

router.route("/retrieveGames").get((req, res) => {
  retrieveGames(req, res);
});
router.route("/makeMove");
router.route("/getGame");
router.route("/joinGame");
router.route("/leaveGame");
router.route("/createGame");

export default router;
