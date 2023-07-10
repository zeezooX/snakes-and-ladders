const db = require("../../models");
const User = db.User;
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const handleLogin = async (req, res, next) => {
  let { userName, password } = req?.body;
  // let name = req.body.name;
  // let password = req.body.password;
  console.log(req.body);
  let user = await User.findOne({
    where: {
      userName: userName,
    },
  });
  try {
    if (user) {
      console.log(user.toJSON()); // Replace with your code to handle the user object
      let hashedPassword = crypto
        .createHash("md5")
        .update(password)
        .digest("hex");
      console.log(hashedPassword);
      if (hashedPassword == user.password) {
        const token = jwt.sign(
          {
            userId: user.userId,
            name: user.userName,
          },
          "SnakeAndLaddersTeamC"
        );
        res.status(200).json({ token });
      } else {
        throw new Error("Wrong Password");
      }
    } else throw new Error("User Doesn't Exist");
  } catch (e) {
    next(e);
  }
};

module.exports = handleLogin;
