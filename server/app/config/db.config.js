module.exports = {
  HOST: "localhost",
  USER: process.env.DBUSER,
  PASSWORD: process.env.DBPASS,
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
