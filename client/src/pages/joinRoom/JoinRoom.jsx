import "./JoinRoom.css";
import board1 from "../../boardImages/board1.jpg";
import board2 from "../../boardImages/board2.jpg";
import board3 from "../../boardImages/board3.png";
import board4 from "../../boardImages/board4.jpg";
import board5 from "../../boardImages/board5.jpg";
import board6 from "../../boardImages/board6.jpeg";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const headers = {
  "x-access-token": sessionStorage.getItem("authenticated"),
};

const JoinRoom = () => {
  const navigate = useNavigate();
  const boards = [board1, board2, board3, board4, board5, board6];

  const [games, setGames] = useState([]);
  const [gameId, setGameId] = useState(-1);
  useEffect(() => {
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

  const onChangeRadio = (e) => {
    setGameId(e.target.id);
  };

  const handleClick = (e) => {
    axios
      .get(`/getGame?id=${gameId}`, { headers: headers })
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        if (!res.data.game) {
          toast.error("Choose a Game");
        } else if (res.data.game.status !== "pending") {
          toast.error("Game Started");
        } else if (res.data.game.playersNumber === res.data.game.capacity) {
          toast.error("Game Full");
        } else {
          axios
            .post(`/joinGame`, {gameId: parseInt(gameId)}, { headers: headers })
            .then((res) => {
              console.log("RESPONSE RECEIVED: ", res);
              navigate("/game");
            })
            .catch((err) => {
              console.log("AXIOS ERROR: ", err);
            });
        }
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };

  return (
    <>
      <div className="createRoom">
        <ToastContainer />
        <h2 className="chooseRoom">Join a game</h2>
        <div className="mapsContainer">
          {games.length !== 0 &&
            games.map((G) => (
              <div className="map" key={G?.Id}>
                <input
                  className="input-hidden"
                  onChange={onChangeRadio}
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
        <button onClick={handleClick}>Join</button>
      </div>
    </>
  );
};

export default JoinRoom;
