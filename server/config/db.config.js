module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Xdesignerstrange2022",
  DB: "mydb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
