import io from "socket.io-client";

const authToken = sessionStorage.getItem("authenticated");
export const socket = io("http://localhost:8080", {
  auth: { authToken },
  autoConnect:false
});

export const subscribeToRoom = (gameId, turnUpdate, roomUpdate) => {
    socket.connect().on('connect',()=>{
    socket.on("room-update", roomUpdate);
    socket.on("turn-update", turnUpdate);
    socket.emit('join-game',gameId)
  })
};

export const loadTurn = (gameId, callback) => {
  socket.emit("load-game", String(gameId), callback);
};
export const rollDice = (gameId) => {
  socket.emit("make-move", gameId);
};
