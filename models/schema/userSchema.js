const DataTypes  = require("sequelize");
const dataBase = require("../../common/dbconnection");


const user = dataBase.define(
  "user",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },

  },
  {
    timeStamps: true,
    paranoid: true,
  }
);
module.exports = user;
