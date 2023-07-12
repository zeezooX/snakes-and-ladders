module.exports = {
  HOST: "localhost",
<<<<<<< HEAD
  USER: "root",
  PASSWORD: "1234",
=======
  USER: process.env.DBUSER,
  PASSWORD: process.env.DBPASS,
>>>>>>> fea0a2d8cd6a7319b1ba3154316849f21c06978a
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
