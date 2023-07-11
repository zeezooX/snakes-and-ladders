require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DBUSER,
    "password": process.env.DBPASS,
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DBUSER,
    "password": process.env.DBPASS,
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DBUSER,
    "password": process.env.DBPASS,
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql"
  }
}
