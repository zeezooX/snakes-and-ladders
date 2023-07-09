import { Sequelize } from "sequelize";
import User from "../../oldModules/user.js";
//const sequelize = new Sequelize();
import jwt from "jsonwebtoken";
let user = {};
const handleLogin = (req, res) => {
  let name = req.body.name;
  let password = req.body.password;
  /* sequelize
    .sync()
    .then(() => {
      User.findOne({
        where: {
          userName: name,
          password: password,
        },
      })
        .then((res) => {
          user = res.json(res);
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
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

export default handleLogin;
