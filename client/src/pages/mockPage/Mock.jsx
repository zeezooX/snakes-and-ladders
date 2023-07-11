import * as io from "../../socket/socket.js";
import { useState, useEffect } from "react";
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:8080");
// const authToken = sessionStorage.getItem("authenticated");

const Mock = () => {
  const [message, setMessage] = useState([]);
  const [mode, usemode] = useState("huh");
  const [turn, setTurn] = useState("auuuuuugh");
  useEffect(() => {
    // io.connect(socket);
    io.subscribeToRoom(
      socket,
      9,
      (data) => {
        setMessage(data);
      },
      (data) => {
        usemode(data);
      }
    );
    io.loadTurn(socket, 9, (data) => {
      setTurn(data);
    });
  }, []);
  const handleClick = () => {
    console.log("sending event");
    console.log(huh);
    io.rollDice(socket, 9);
  };

  return (
    <>
      <div>
        <button onClick={() => handleClick()}>make a move</button>
      </div>
      <div>`turn update {message}`</div>
      <div>`room update {mode}`</div>
      <div>`game loaded {turn}`</div>
    </>
  );
};
export default Mock;
