const express = require("express");
const cors = require("cors");
const auth = require("./middlewares/auth");
const handleMakeMove = require("./app/routes/RoutesHandlers/handleMakeMove");

const app = express();

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const handleRegister = require("./app/routes/RoutesHandlers/handleRegister.js");
const handleLogin = require("./app/routes/RoutesHandlers/handleLogin.js");
const handleRetrieveGames = require("./app/routes/RoutesHandlers/handleRetrieveGames.js");
const handleJoinGame = require("./app/routes/RoutesHandlers/handleJoinGame.js");
const handleLeaveGame = require("./app/routes/RoutesHandlers/handleLeaveGame.js");
const handleCreateGame = require("./app/routes/RoutesHandlers/handleCreateGame.js");
const handleGetGame = require("./app/routes/RoutesHandlers/handleGetGame.js");
app.post("/makeMove", auth, handleMakeMove);
app.post("/login", handleLogin);
app.post("/register", handleRegister);
app.get("/retrieveGames", auth, handleRetrieveGames);

app.get("/getGame", auth, handleGetGame);
app.post("/joinGame", auth, handleJoinGame);
app.post("/leaveGame", auth, handleLeaveGame);
app.post("/createGame", auth, handleCreateGame);

const db = require("./app/models");

// db.sequelize.sync()
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

//require("./app/routes/routes.js")(app);
// app.use(require("./app/routes/routes.js"));
app.use((error, req, res, next) => {
  res.status(500).json({ message: " exception : " + error });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
