import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="Register">
        <div className="card">
          <div className="left">
            <h1>Snakes and Ladders</h1>
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              omnis, vero assumenda nobis cum accusantium consectetur!
              Accusantium velit ex eligendi quia nesciunt blanditiis, explicabo
              alias aliquam quod consequatur deserunt beatae!
            </p>
            <span className="log">Do you have an account?</span>
            <Link to="/login">
              <button className="login">Login</button>
            </Link>
          </div>
          <div className="right">
            <h1 className="register">Register</h1>
            <form>
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button>register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
