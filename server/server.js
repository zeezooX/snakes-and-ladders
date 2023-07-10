const express = require("express");
const cors = require("cors");
const auth = require("./middlewares/auth");
const handleMakeMove = require("./app/routes/RoutesHandlers/handleMakeMove");

const app = express();

var corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

const socketIO = require('socket.io')(http, {
  cors: {
      origin: "*"
  }
});

socketIO.on('connection', (socket) => {
  console.log(`${socket.id} just connected!`);

  socket.on('x', (data) => {
    socketIO.emit('server_event',{
            f1: PORT,
            f2: data.field_1
        })
  });

  socket.on('disconnect', () => {
    console.log('someone disconnected');
  });
  let counter = 0 

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

app.use((error, req, res, next) => {
  res.status(500).json({ message: " exception : " + error });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});