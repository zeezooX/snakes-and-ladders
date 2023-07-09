import { Sequelize, json } from "sequelize";
import User from "../../modules/user.js";
import jwt from "jsonwebtoken";
//const sequelize = new Sequelize();
const handleRegister = (req, res) => {
  let name = req.body.name;
  let password = req.body.password;
  let user = {};
  /* sequelize
    .sync()
    .then(() => {
      User.create({
        userName: name,
        password: password,
      })
        .then((res) => {
          user = res.json(res);
        })
        .catch((error) => {
          console.error("Failed to create a new record : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });*/

  const payload = { user_id: user.userName };
  const secretKey = "qwertyuiop";
  const token = jwt.sign(payload, secretKey);
  return token;
};

export default handleRegister;
