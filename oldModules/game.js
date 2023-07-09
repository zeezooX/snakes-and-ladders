const PENDING = "PENDING";
const ACTIVE = "ACTIVE";
const FINISHED = "FINISHED";

export default class Game {
  constructor(
    gameID,
    board,
    noOfPlayers = 0,
    currentPositions = [],
    users = [],
    turn = 0,
    gameState = ""
  ) {
    this.gameID = gameID;
    this.board = board;
    this.noOfPlayers = noOfPlayers;
    this.currentPositions = currentPositions;
    this.users = users;
    this.turn = turn;
    this.gameState = gameState;
  }

  startGame(hostUser) {
    if (this.gameState === "") {
      this.users.push(hostUser);
      this.gameState = PENDING;
    }
  }

  joinGame(joiningUser) {
    if (this.gameState === PENDING) {
      this.users.push(joiningUser);
      if (this.users.length == this.noOfPlayers) {
        this.gameState = ACTIVE;
        for (var i = 0; i < this.noOfPlayers; i++) {
          this.currentPositions.push(0);
        }
      }
    }
  }

  makeMove() {
    var dice = Math.ceil(Math.random() * 6);
    // TODO: makeMove() implemetation
    return dice;
  }
}
