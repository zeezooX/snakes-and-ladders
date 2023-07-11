import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [person, setPerson] = useState({
    userName: "",
    password: "",
  });
  const handleUser = (e) => {
    const user = { ...person };
    user[e.target.id] = e.target.value;
    setPerson(user);
  };

  const handleSubmit = () => {
    const send = async () => {
      let Isvalid = await axios.post(`/login`, person);
      if (Isvalid?.data) {
        sessionStorage.setItem("authenticated", Isvalid?.data?.token);
        navigate(`/`);
      } else {
        alert("Wrong credentials");
      }
    };
    send();
  };

  console.log(person);
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
              <input
                id="userName"
                onChange={(e) => {
                  handleUser(e);
                }}
                type="text"
                placeholder="username"
              />
              <input
                id="password"
                onChange={(e) => {
                  handleUser(e);
                }}
                type="password"
                placeholder="password"
              />
              <button onClick={handleSubmit}>login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
