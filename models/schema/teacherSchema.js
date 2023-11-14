const DataTypes  = require("sequelize");
const dataBase = require("../../common/dbconnection");

const teacher = dataBase.define(
  "teacher",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    
    experience: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    department: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  },
  {
    timeStamps: true,
    paranoid: true,
  }
);
module.exports = teacher;
