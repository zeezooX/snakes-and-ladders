import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="left">
            <h1>Snakes and Ladders</h1>
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              omnis, vero assumenda nobis cum accusantium consectetur!
              Accusantium velit ex eligendi quia nesciunt blanditiis, explicabo
              alias aliquam quod consequatur deserunt beatae!
            </p>
            <span className="reg">Don't have an account?</span>
            <Link to="/register">
              <button className="register">Register</button>
            </Link>
          </div>
          <div className="right">
            <h1 className="login">Login</h1>
            <form>
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button>login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
