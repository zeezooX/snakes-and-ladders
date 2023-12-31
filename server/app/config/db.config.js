require("dotenv").config();
module.exports = {
  HOST: process.env.DBHOST,
  USER: process.env.DBUSER,
  PASSWORD: process.env.DBPASS,
  DB: process.env.DBNAME,
  dialect: "mysql",
  port: process.env.DBPORT || "3306",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
