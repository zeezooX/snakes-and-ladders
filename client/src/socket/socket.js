import io from "socket.io-client";

const authToken = sessionStorage.getItem("authenticated");
const socket = io(process.env.REACT_APP_SERVER_URL, {
  auth: { authToken },
});

export const subscribeToRoom = (gameId, turnUpdate, roomUpdate) => {
  socket.join(String(gameId));
  socket.on("room-update", roomUpdate);
  socket.on("turn-update", turnUpdate);
};

export const loadTurn = (gameId, callback) => {
  socket.emit("load-game", String(gameId), callback);
};
export const rollDice = (gameId) => {
  socket.emit("make-move", {
    gameId: gameId,
  });
};
