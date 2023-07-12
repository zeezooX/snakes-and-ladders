import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import "./style.css";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as io from "../../socket/socket";
function Game() {
  const canvasRef = useRef(null);
  const [progress, setProgress] = React.useState(0);
  const gameId = 24;
  let [game, setGame] = useState(null);
  let diceRef = useRef(null);
  let rollRef = useRef(null);
  let [timeOutId, setTimeOutId] = useState(null);
  //   const g = {
  //     game_status: game.status,
  //     board_id: game.boardId,
  //     pending_player_index: pending_player_index,
  //     players: Players,
  //     lastPlayTime: game.lastPlayTime
  // }
  //   const player= {
  //     name: p.userName,
  //     color: p.GamePlayer.color,
  //     position: p.GamePlayer.lastPosition,
  //     order:p.GamePlayer.order,
  //     id: p.userId
  // }
  useEffect(() => {
    io.subscribeToRoom(gameId, handleTurnUpdate, handleRoomUpdate);
    return () => {
      if (timeOutId) clearInterval(timeOutId);
    };
  }, []);
  const handleTurnUpdate = (gameTurnObject) => {
    if (timeOutId) setTimeOutId(null);
    clearInterval(timeOutId);
    setProgress(0);
    console.log(gameTurnObject);
    const {
      game_status,
      board_id,
      pending_player_index,
      players,
      lastPlayTime,
    } = gameTurnObject;
    rollDice(gameTurnObject.move.dice_outcome);
    setGame({
      game_status,
      board_id,
      pending_player_index,
      players,
      lastPlayTime,
    });
    let id = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 10 ? 0 : prevProgress + 1
      );
    }, 1000);
    setTimeOutId(id);
  };
  useEffect(() => {
    console.log(progress);
  }, [progress]);
  const handleRoomUpdate = (gameObject) => {
    console.log("gameObject");
    console.log(gameObject);
    setGame(gameObject);
  };
  function rollDice(elComeOut) {
    var elDiceOne = diceRef.current;
    for (let i = 1; i <= 6; i++) {
      elDiceOne.classList.remove("show-" + i);
      console.log(elComeOut, i);
      if (elComeOut == i) {
        elDiceOne.classList.add("show-" + i);
        console.log(elDiceOne.classList);
      }
    }
  }
  useEffect(() => {
    if (diceRef.current && rollRef.current && canvasRef.current && game) {
      var elComeOut = rollRef.current;
      console.log(elComeOut);

      elComeOut.onclick = function () {
        console.log(
          game.players[game.pending_player_index].name,
          sessionStorage.getItem("username")
        );
        if (
          game.players[game.pending_player_index].name == sessionStorage.getItem("username")
        ) {
          io.rollDice(gameId);
        }
      };
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = `./assets/board${game.board_id}.jpg`;
      img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    }
  }, [diceRef.current, rollRef.current, canvasRef.current, game]);
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) =>
  //       prevProgress >= 10 ? 0 : prevProgress + 1
  //     );
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  return (
    <>
      {!game ? <div>The game is being loaded ...</div> : (
        <div className={styles.gameContainer}>
          <div className={styles.playersList}>
            <table className={styles.playersTable}>
              <thead>
                <th>Player</th>
                <th>Position</th>
              </thead>
              <tbody>
                {game.players.map((player) => (
                  <tr
                    className={styles.player}
                    style={{
                      color:
                        player.name ==
                        game.players[game.pending_player_index].name
                          ? "rgb(141, 206, 206)"
                          : "black",
                    }}
                  >
                    <td>
                      <div>{player.name}</div>
                      <div
                        className={styles.playerColor}
                        style={{ backgroundColor: player.color }}
                      ></div>
                    </td>
                    <td>{player.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <canvas ref={canvasRef} width={749} height={749} />
          <div className={styles.timerDiceContainer}>
            <div className={styles.timer}>
              <Box sx={{ position: "relative", display: "inline-flex" }}>
                <CircularProgress
                  variant="determinate"
                  value={(progress / 10) * 100}
                  style={{
                    width: "150px",
                    height: "150px",
                    color: "rgb(141, 206, 206)",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                  }}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                    style={{
                      fontSize: "4rem",
                      color: "black",
                      fontFamily: "Bungee",
                    }}
                  >
                    {`${progress}`}
                  </Typography>
                </Box>
              </Box>
            </div>
            <div ref={rollRef}>
              <div className="dice dice-one" ref={diceRef}>
                <div id="dice-one-side-one" className="side one">
                  <div className="dot one-1"></div>
                </div>
                <div id="dice-one-side-two" className="side two">
                  <div className="dot two-1"></div>
                  <div className="dot two-2"></div>
                </div>
                <div id="dice-one-side-three" className="side three">
                  <div className="dot three-1"></div>
                  <div className="dot three-2"></div>
                  <div className="dot three-3"></div>
                </div>
                <div id="dice-one-side-four" className="side four">
                  <div className="dot four-1"></div>
                  <div className="dot four-2"></div>
                  <div className="dot four-3"></div>
                  <div className="dot four-4"></div>
                </div>
                <div id="dice-one-side-five" className="side five">
                  <div className="dot five-1"></div>
                  <div className="dot five-2"></div>
                  <div className="dot five-3"></div>
                  <div className="dot five-4"></div>
                  <div className="dot five-5"></div>
                </div>
                <div id="dice-one-side-six" className="side six">
                  <div className="dot six-1"></div>
                  <div className="dot six-2"></div>
                  <div className="dot six-3"></div>
                  <div className="dot six-4"></div>
                  <div className="dot six-5"></div>
                  <div className="dot six-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Game;
