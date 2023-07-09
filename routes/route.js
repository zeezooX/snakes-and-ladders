import express from "express";

// const express = require("express");
const router = express.Router();
import User from "../modules/user.js";
import Board from "../modules/board.js";
import Game from "../modules/game.js";
import handleRegister from "./RoutesHandlers/handleRegister.js";
import handleLogin from "./RoutesHandlers/handleLogin.js";

router.route("/register").post((req, res) => {
  handleRegister(req, res);
});

router.route("/login").post((req, res) => {
  handleLogin(req, res);
});

router.route("/retrieveGames").get((req, res) => {
  retrieveGames(req, res);
});
router.route("/makeMove");
router.route("/getGame");
router.route("/joinGame").post((req, res) => {
  handleJoinGame(req, res);
});
router.route("/leaveGame");
router.route("/createGame").post((req, res) => {
  handleCreateGame(req, res);
});

export default router;
