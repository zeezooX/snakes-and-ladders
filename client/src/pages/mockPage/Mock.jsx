import * as io from "../../socket/socket.js";
import { useState, useEffect } from "react";
import socketIO from "socket.io-client";
//import RetrieveGames from "../../components/retrieveGames.js";
// const socket = socketIO.connect("http://localhost:8080");
// const authToken = sessionStorage.getItem("authenticated");

const Mock = () => {
  const [message, setMessage] = useState(null);
  const [game, setGame] = useState(null);
  const handleTurnUpdate = (data) => {
    console.log(data);
    setMessage(data.lastPlayTime);
  };
  const handleRoomUpdate = (game) => {
    console.log(game);
    setGame(game);
  };
  useEffect(() => {
    io.subscribeToRoom(24, handleTurnUpdate, handleRoomUpdate);
    // io.loadGame(24, handleRoomUpdate);
    // Clean up the subscription on component unmount
    return () => {
      io.socket.off("disconnected");
    };
  }, []);
  const rollDice = () => {
    console.log("rolled the dice!");
    io.rollDice(24);
  };

  const loadGame = () => {
    console.log("sent a load-game event to the server!");
    io.loadGame(24, handleRoomUpdate);
  };

  const displayGame = () => {
    if (game) {
      return (
        <>
          <h3>status: {game.game_status}</h3>
          <br />
          <h3>board_id: {game.board_id}</h3>
          <br />
          <h3>pending_player_index: {game.pending_player_index}</h3>
          <h3>
            last_play_time: {(Date.now() - new Date(game.lastPlayTime)) / 1000}
          </h3>
          <br />
          <table>
            <caption>
              <h2> Players </h2>
            </caption>
            <thead>
              <th>userName ----</th>
              <th>color ----</th>
              <th>position ----</th>
            </thead>
            <tbody>
              {game.players?.map((p) => (
                <tr key={p.order}>
                  <td> {p.name} </td>
                  <td> {p.color}</td>
                  <td> {p.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    } else {
      return <div> Not loaded yet </div>;
    }
  };

  return (
    <div>
      <div>
        {" "}
        <h1>move-update:</h1> <br /> {message}
      </div>{" "}
      <br />
      <br />
      <div>
        {" "}
        <h1> load-game-response: </h1> <br /> {displayGame()}
      </div>
      <div></div>
      <button onClick={() => rollDice()}>make a move</button>
      <button onClick={() => loadGame()}>load</button>
    </div>
  );
};
export default Mock;
