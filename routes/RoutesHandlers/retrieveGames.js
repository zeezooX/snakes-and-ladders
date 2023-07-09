import Game from "../../oldModules/game.js";
import { Sequelize } from "sequelize";
//const sequelize = new Sequelize();

const retrieveGames = (req, res) => {
  let userId = req.body.id;
  // search databse for all the games with Id
  // return games
  /* sequelize
    .sync()
    .then(() => {
      Game.findAll({
        where: {
          gameID: userId,
        },
      })
        .then((res) => {
          res.json(res);
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });*/
};

export default retrieveGames;
