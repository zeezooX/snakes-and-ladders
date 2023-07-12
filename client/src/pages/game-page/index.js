import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import "./style.css";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
function Game() {
  const canvasRef = useRef(null);
  const [progress, setProgress] = React.useState(0);
  let [players, setPlayers] = useState([
    {
      userName: "Sherin",
      color: "red",
      lastPosition: 1,
    },
    {
      userName: "Ali",
      color: "green",
      lastPosition: 8,
    },
    {
      userName: "Rewan",
      color: "blue",
      lastPosition: 2,
    },
  ]);
  function rollDice(elDiceOne, elComeOut) {
    var diceOne = Math.floor(Math.random() * 6 + 1);
    for (var i = 1; i <= 6; i++) {
      elDiceOne.classList.remove("show-" + i);
      if (diceOne === i) {
        elDiceOne.classList.add("show-" + i);
      }
    }
  }
  useEffect(() => {
    var elDiceOne = document.getElementById("dice1");
    var elComeOut = document.getElementById("roll");

    elComeOut.onclick = function () {
      rollDice(elDiceOne, elComeOut);
    };
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "./assets/board2.jpg";
    img.onload = function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }, []);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 10 ? 0 : prevProgress + 1
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className={styles.gameContainer}>
      <div className={styles.playersList}>
        <table className={styles.playersTable}>
          <thead>
            <th>Player</th>
            <th>Position</th>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr className={styles.player}>
                <td>
                  <div>{player.userName}</div>
                  <div
                    className={styles.playerColor}
                    style={{ backgroundColor: player.color }}
                  ></div>
                </td>
                <td>{player.lastPosition}</td>
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
        <div id="roll">
          <div id="dice1" className="dice dice-one">
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
  );
}

export default Game;
