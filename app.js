import User from "./modules/user.js";
import Board from "./modules/board.js";
import Game from "./modules/game.js";
import express from "express";
import mysql from "mysql2";
import Sequelize from "sequelize";
import mainRouter from "./routes/route.js";

const app = express();

const sequelize = new Sequelize("SLdb", "root", "xAist692#HSB", {
  host: "localhost",
  dialect: "mysql",
})
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

app.use(express.json());
app.use("/",mainRouter);

app.listen(process.env.PORT || 3001, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
