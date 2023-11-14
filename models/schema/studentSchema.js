const DataTypes = require("sequelize");
const dataBase = require("../../common/dbconnection");

const student = dataBase.define(
  "student",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      primaryKey: true,

      type: DataTypes.INTEGER,
    },
    lastName: {
      primaryKey: true,

      type: DataTypes.STRING,
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
module.exports = student;
