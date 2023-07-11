const express = require("express");
const cors = require("cors");
const auth = require("./middlewares/auth");
const socketAuth = require("./middlewares/socketAuth");

const app = express();

var corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

const http = require("http").Server(app);
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});
const fetchTurn = require("./app/socket/handlers/fetchTurn");
const makeMove = require("./app/socket/handlers/makeMove")
socketIO.use(socketAuth).on("connection", (socket) => {
  console.log(`${socket.id} just connected!`);
  socket.on("join-game",(gameId)=>{
    if(socket.rooms.has(`team-C room-${gameId}`)){
      return
    }
    console.log(`${socket.id} joined (team-C room-${gameId})`)
    socket.join(`team-C room-${gameId}`)
  })
  socket.on("load-game", (gameId, callback) => {
    const response = fetchTurn(gameId).then(
      (game)=>{
        callback(game);
      }
    )
  });

  socket.on("make-move", (gameID) => {
    try {
      makeMove(gameID, socket.user).then(
        (update)=>{
          console.log(`${socket.id} made a move in (team-C room-${gameID})`)
          console.log(update)
          socket.in(`team-C room-`+gameID).emit("turn-update", update);
        }
      );
    } catch (e) {
      console.log(e);
    }
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
  });
  let counter = 0;

  // setInterval(()=>{
  //     socket.emit('server_event',{
  //         f1: PORT,
  //         f2: `${counter}`
  //     })
  //     console.log(counter)
  //     counter += 10
  // },2000)
});

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
const handleMock = require("./app/routes/RoutesHandlers/__handleMock");
const handleMakeMove = require("./app/routes/RoutesHandlers/handleMakeMove");

app.post("/test", handleMock);
app.post("/makeMove", auth, handleMakeMove.create(socketIO));
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

app.use((error, req, res, next) => {
  res.status(500).json({ message: " exception : " + error });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
