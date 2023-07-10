var router = require("express").Router();

//Test Routes Start
// const tutorials = require("../controllers/tutorial.controller.js");

// // Create a new Tutorial
// router.post("/", tutorials.create);

// // Retrieve all Tutorials
// router.get("/", tutorials.findAlll);

// // Retrieve all published Tutorials
// router.get("/published", tutorials.findAllPublished);

// // Retrieve a single Tutorial with id
// //router.get("/:id", tutorials.findOne);

// // Update a Tutorial with id
// router.put("/:id", tutorials.update);

// // Delete a Tutorial with id
// router.delete("/:id", tutorials.delete);

// // Delete all Tutorials
// router.delete("/", tutorials.deleteAll);

// Test Routes End

const handleRegister = require("./RoutesHandlers/handleRegister.js");
const handleLogin = require("./RoutesHandlers/handleLogin.js");
const handleRetrieveGames = require("./RoutesHandlers/handleRetrieveGames.js");
const handleMakeMove = require("./RoutesHandlers/handleMakeMove.js");
const handleGetGame = require("./RoutesHandlers/handleGetGame.js");
const handleJoinGame = require("./RoutesHandlers/handleJoinGame.js");
const handleLeaveGame = require("./RoutesHandlers/handleLeaveGame.js");
const handleCreateGame = require("./RoutesHandlers/handleCreateGame.js");

router.route("/register").post(handleRegister);
router.route("/login").post(handleLogin);
router.route("/retrieveGames").get(handleRetrieveGames);
router.route("/makeMove").post(handleMakeMove);
router.route("/getGame").get(handleGetGame);
router.route("/joinGame").post(handleJoinGame);
router.route("/leaveGame").post(handleLeaveGame);
router.route("/createGame").post(handleCreateGame);

module.exports = router;
