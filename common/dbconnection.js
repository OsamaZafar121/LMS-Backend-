const sequelize = require("sequelize");
const confiq = require("../confiq");

const dataBase = new sequelize(confiq.db);
dataBase
  .authenticate()
  .then(() => {
    console.log("db connected");
  })
  .catch((error) => {
    console.log(error);
  });
module.exports = dataBase;
