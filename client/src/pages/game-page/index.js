import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
function Game() {
  const canvasRef = useRef(null);
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
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "./assets/board2.jpg";
    img.onload = function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <div className={styles.gameContainer}>
      <div class={styles.playersList}>
        <div>
          <div>Player</div>
          <div>Position</div>
        </div>
        {players.map((player) => (
          <div className={styles.player}>
            <div>
              <div>{player.userName}</div>
              <div
                className={styles.playerColor}
                style={{ backgroundColor: player.color }}
              ></div>
            </div>
            <div>{player.lastPosition}</div>
          </div>
        ))}
      </div>
      <canvas ref={canvasRef} width={749} height={749} />
      <div>dice</div>
    </div>
  );
}

export default Game;
