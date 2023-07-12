import "./JoinRoom.css";
import board1 from "../../boardImages/board1.jpg";
import board2 from "../../boardImages/board2.jpg";
import board3 from "../../boardImages/board3.png";
import board4 from "../../boardImages/board4.jpg";
import board5 from "../../boardImages/board5.jpg";
import board6 from "../../boardImages/board6.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";

const JoinRoom = () => {
  const boards = [board1, board2, board3, board4, board5, board6];

  const [games, setGames] = useState([]);
  useEffect(() => {
    const headers = {
      "x-access-token": sessionStorage.getItem("authenticated"),
    };
    axios
      .get(`/retrieveGames?status=pending`, { headers: headers })
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        setGames(res.data);
        console.log(games);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  }, []);

  return (
    <>
      <div className="createRoom">
        <h2 className="chooseRoom">Choose a game</h2>
        <div className="mapsContainer">
          {games.length !== 0 &&
            games.map((G) => (
              <div className="map" key={G?.Id}>
                <input
                  className="input-hidden"
                  type="radio"
                  id={`${G.Id}`}
                  name="board"
                />
                <label htmlFor={`${G.Id}`}>
                  <img src={boards[G?.boardId - 1]} alt="" />
                </label>
                <span>{`players joined ${G?.playersNumber}/${G?.capacity}`}</span>
              </div>
            ))}
        </div>
        <button>Join</button>
      </div>
    </>
  );
};

export default JoinRoom;
