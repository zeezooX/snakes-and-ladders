import "./Register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
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

  const handleSubmit = (e) => {
    if (person.userName && person.password) {
      const send = async () => {
        let Isvalid = await axios.post(`/register`, person);
        if (Isvalid?.data) {
          sessionStorage.setItem("authenticated", Isvalid?.data.token);
          e.preventDefault();
          navigate(`/`);
        } else {
          alert("Wrong credentials");
        }
      };
      send();
      e.preventDefault();
    }
  };
  console.log(person);
  return (
    <>
      <div className="Register">
        <div className="card">
          <div className="left">
            <h2>Snakes and Ladders</h2>
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
              <button onClick={(e) => handleSubmit(e)}>register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
