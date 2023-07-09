import User from "./oldModules/user.js";
import Board from "./oldModules/board.js";
import Game from "./oldModules/game.js";
import express from "express";
import mysql from "mysql2";
import Sequelize from "sequelize";
import mainRouter from "./routes/route.js";

const app = express();
app.use(express.json());

const sequelize = new Sequelize("mydb", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

app.use("/", mainRouter);

app.listen(process.env.PORT || 3001, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
