module.exports = class Board {
    constructor(boardID, boardImage, snakes, ladders) {
        this.boardID = boardID;
        this.boardImage = boardImage;
        this.snakes = snakes;
        this.ladders = ladders;
    }
}
