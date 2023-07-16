import io from "socket.io-client";

const authToken = sessionStorage.getItem("authenticated");
export const socket = io("https://snakes-and-ladders.up.railway.app/", {
  auth: { authToken },
  autoConnect: false,
});

export const subscribeToRoom = (gameId, turnUpdate, roomUpdate) => {
  socket.connect().on("connect", () => {
    socket.emit("join-game", gameId);
    loadGame(gameId, (data) => {
      roomUpdate(data);
      socket.on("room-update", roomUpdate);
      socket.on("turn-update", turnUpdate);
    });
  });
};

export const loadGame = (gameId, roomUpdate) => {
  socket.emit("load-game", String(gameId), roomUpdate);
};
export const rollDice = (gameId) => {
  socket.emit("make-move", gameId);
};
