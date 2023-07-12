require('dotenv').config();

module.exports = {
  "development": {
<<<<<<< HEAD:server/config/config.json
    "username": "root",
    "password": "root",
=======
    "username": process.env.DBUSER,
    "password": process.env.DBPASS,
>>>>>>> fea0a2d8cd6a7319b1ba3154316849f21c06978a:server/config/config.js
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
<<<<<<< HEAD:server/config/config.json
    "username": "root",
    "password": "root",
=======
    "username": process.env.DBUSER,
    "password": process.env.DBPASS,
>>>>>>> fea0a2d8cd6a7319b1ba3154316849f21c06978a:server/config/config.js
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
<<<<<<< HEAD:server/config/config.json
    "username": "root",
    "password": "root",
=======
    "username": process.env.DBUSER,
    "password": process.env.DBPASS,
>>>>>>> fea0a2d8cd6a7319b1ba3154316849f21c06978a:server/config/config.js
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql"
  }
}
