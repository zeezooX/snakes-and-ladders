import User from "./modules/user";
import Board from "./modules/board";
import Game from "./modules/game";
import express from "express";
import mysql from "mysql2";

const app = express();

const sequelize = new Sequelize("SLdb", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

app.use(express.json());
app.use("/", require("./routes/route"));

app.listen(process.env.PORT || 3001, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
