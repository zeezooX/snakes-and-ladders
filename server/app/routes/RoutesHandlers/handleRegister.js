const db = require("../../models");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const User = db.User;
const Op = db.Sequelize.Op;

const handleRegister = async (req, res) => {
  let username = req.body.userName;
  let pw = req.body.password;
  const user = {
    userName: username,
    password: crypto.createHash("md5").update(pw).digest("hex"),
  };
  let existing = await User.findOne({
    where: {
      userName: username,
    },
  });
  if(existing){
    res.status(406).send({
      message: "Username already exists.",
    });
    return;
  }
  User.create(user)
    .then((data) => {
      const token = jwt.sign(
        {
          userId: data.userId,
          name: user.userName,
        },
        "SnakeAndLaddersTeamC"
      );
      res.status(200).json({ token });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    });
};

module.exports = handleRegister;
