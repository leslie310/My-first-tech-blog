const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'eyvqcfxf5reja3nv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      username: 'yqi4qdemmc3y7wy3',
      password: "o5jorckls4pfcz9d",
      database: "cqburrjet8qu4m8z",
      port: 3306,
      dialect: 'mysql'
    });

module.exports = sequelize;