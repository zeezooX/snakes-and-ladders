import * as io from "../../socket/socket.js";
import { useState, useEffect } from "react";
const Mock = () => {
  const [message, setMessage] = useState("");
  const [mode, useMode] = useState("");
  useEffect(() => {
    io.subscribeToRoom(
      9,
      (data) => {
        setMessage(data);
      },
      (data) => {
        useMode(data);
      }
    );
  }, []);
  const handleClick = () => {
    io.rollDice(9);
  };

  return (
    <div>
      <button onClick={handleClick}>make a move</button>
    </div>
  );
};
export default Mock;
