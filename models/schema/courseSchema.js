const DataTypes = require("sequelize");
const dataBase = require("../../common/dbconnection");

const course = dataBase.define(
  "course",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    courseName: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timeStamps: true,
    paranoid: true,
  }
);
module.exports = course;
