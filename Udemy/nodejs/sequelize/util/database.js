const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "88isSQL_", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

/*const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "88isSQL_",
});

module.exports = pool.promise();*/
