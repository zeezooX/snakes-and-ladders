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
  const [games, setGames] = useState([]);
  useEffect(() => {
    const headers = {
      "x-access-token": sessionStorage.getItem("authenticated"),
    };
    axios
      .get(`/createGame?status=pending`, { headers: headers })
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  }, []);
  return (
    <>
      <div className="createRoom">
        <h2 className="chooseMap">Choose a game</h2>
        <div className="mapsContainer">
          <div className="map">
            <input class="input-hidden" type="radio" id="1" name="board" />
            <label htmlFor="1">
              <img src={board1} alt="" />
            </label>
            <span>Ahmed's room (3/5)</span>
          </div>
          <div className="map">
            <input class="input-hidden" type="radio" id="2" name="board" />
            <label htmlFor="2">
              <img src={board2} alt="" />
            </label>
            <span>Ahmed's room (3/5)</span>
          </div>
          <div className="map">
            <input class="input-hidden" type="radio" id="3" name="board" />
            <label htmlFor="3">
              <img src={board3} alt="" />
            </label>
            <span>Ahmed's room (3/5)</span>
          </div>
          <div className="map">
            <input class="input-hidden" type="radio" id="4" name="board" />
            <label htmlFor="4">
              <img src={board4} alt="" />
            </label>
            <span>Ahmed's room (3/5)</span>
          </div>
          <div className="map">
            <input class="input-hidden" type="radio" id="5" name="board" />
            <label htmlFor="5">
              <img src={board5} alt="" />
            </label>
            <span>Ahmed's room (3/5)</span>
          </div>
          <div className="map">
            <input class="input-hidden" type="radio" id="6" name="board" />
            <label htmlFor="6">
              <img src={board6} alt="" />
            </label>
            <span>Ahmed's room (3/5)</span>
          </div>
        </div>

        <button>Join</button>
      </div>
    </>
  );
};

export default JoinRoom;
