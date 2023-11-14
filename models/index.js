const userSchema = require("./schema/userSchema");
const teacher = require("./schema/teacherSchema");
const dataBase = require("../common/dbconnection");
const student = require("./schema/studentSchema");
const course = require("./schema/courseSchema");
const db = require("../confiq");

userSchema.hasOne(teacher, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
teacher.belongsTo(userSchema, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
userSchema.hasOne(student, {
  onDelete: "CASCADE",
});
student.belongsTo(userSchema, {
  onDelete: "CASCADE",
});
student.belongsToMany(course, {
  through: "student_course",
  foreignKey: { name: "StudentID" },
});
course.belongsToMany(student, {
  through: "student_course",
  foreignKey: { name: "CourseID" },
});
teacher.belongsToMany(course, {
  through: "teacher_course",
  foreignKey: { name: "TeacherID" },
});
course.belongsToMany(teacher, {
  through: "teacher_course",
  foreignKey: { name: "CourseID" },
});

const models = dataBase.models;
console.log(models);

db.dataBase = dataBase;
module.exports = { dataBase, models };
