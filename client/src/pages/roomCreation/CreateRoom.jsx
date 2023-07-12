import "./CreateRoom.css";
import board1 from "../../boardImages/board1.jpg";
import board2 from "../../boardImages/board2.jpg";
import board3 from "../../boardImages/board3.png";
import board4 from "../../boardImages/board4.jpg";
import board5 from "../../boardImages/board5.jpg";
import board6 from "../../boardImages/board6.jpeg";
const CreateRoom = () => {
  const handleClick = (e) => {
    // e.preventDefault();
    const headers = {
      // 'Content-Type': 'application/json',
      'x-access-token': sessionStorage.getItem("authenticated")
    }
  }
  return (
    <>
      <div className="createRoom">
        <h2 className="chooseMap">Choose a map</h2>
        <div className="mapsContainer">
          <div className="map">
            <input class="input-hidden" type="radio" id="1" name="board" />
            <label htmlFor="1">
              <img src={board1} alt="" />
            </label>
          </div>
          <div className="map">
            <input class="input-hidden" type="radio" id="2" name="board" />
            <label htmlFor="2">
              <img src={board2} alt="" />
            </label>
          </div>
          <div className="map">
            <input class="input-hidden" type="radio" id="3" name="board" />
            <label htmlFor="3">
              <img src={board3} alt="" />
            </label>
          </div>
          <div className="map">
            <input class="input-hidden" type="radio" id="4" name="board" />
            <label htmlFor="4">
              <img src={board4} alt="" />
            </label>
          </div>
          <div className="map">
            <input class="input-hidden" type="radio" id="5" name="board" />
            <label htmlFor="5">
              <img src={board5} alt="" />
            </label>
          </div>
          <div className="map">
            <input class="input-hidden" type="radio" id="6" name="board" />
            <label htmlFor="6">
              <img src={board6} alt="" />
            </label>
          </div>
        </div>
        <div className="playerNumbers">
          <input type="text" placeholder="Enter players number:" />
        </div>
        <button onClick={handleClick}>Create</button>
      </div>
    </>
  );
};

export default CreateRoom;
