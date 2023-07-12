import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  // let user = "Mo'men";
  return (
    <>
      <div className="homeContainer">
        <h2 className="welcome">Welcome {sessionStorage.getItem("username")}</h2>
        <h4 className="welcome">Log Out</h4>
        <div className="buttonContainer">
          <Link to="./createRoom" class="button button--hoo">
            <div class="button__wrapper">
              <span class="button__text">Create room</span>
            </div>
            <div class="characterBox">
              <div class="character wakeup">
                <div class="character__face"></div>
                <div class="charactor__face2"></div>
                <div class="charactor__body"></div>
              </div>
              <div class="character wakeup">
                <div class="character__face"></div>
                <div class="charactor__face2"></div>
                <div class="charactor__body"></div>
              </div>
              <div class="character">
                <div class="character__face"></div>
                <div class="charactor__face2"></div>
                <div class="charactor__body"></div>
              </div>
            </div>
          </Link>

          <Link to="/joinRoom" class="button button--pen">
            <div class="button__wrapper">
              <span class="button__text">Join room</span>
            </div>
            <div class="characterBox">
              <div class="character wakeup">
                <div class="character__face"></div>
                <div class="charactor__face2"></div>
              </div>
              <div class="character wakeup">
                <div class="character__face"></div>
                <div class="charactor__face2"></div>
              </div>
              <div class="character">
                <div class="character__face"></div>
                <div class="charactor__face2"></div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
