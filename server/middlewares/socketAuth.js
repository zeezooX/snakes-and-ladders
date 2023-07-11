const jwt = require("jsonwebtoken");
// const { Socket } = require("socket.io");

const verifyToken = (socket, next) =>{
    const token = socket.handshake.auth.authToken;
    if (!token) {
        next(new Error("A token is required for authentication"))
      }
      try {
        socket.user = jwt.verify(token, "SnakeAndLaddersTeamC");
      } catch (err) {
        next(new Error("Invalid Token"))
      }
      next();
}
module.exports = verifyToken