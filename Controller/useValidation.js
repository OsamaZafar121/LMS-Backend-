const joii = require("joi");

module.exports = {
  addUsers: joii.object().keys({
    id: joii.number().required(),
    name: joii.string().required(),
    age: joii.number().min(16).max(26).required(),
  }),
  deleteUser: joii.object().keys({
    id: joii.number().required(),
  }),
  updateUsers: joii.object().keys({
    id: joii.number().required(),
    name: joii.string().required(),
    age: joii.number().min(16).max(26).required(),
  }),
  addTeacher: joii.object().keys({
    id: joii.number().required(),
    name: joii.string().required(),
    department: joii.string().required(),
  }),
  updateTeacher: joii.object().keys({
    id: joii.number().required(),
    name: joii.string().required(),
  }),
  deleteTeacher: joii.object().keys({
    id: joii.number().required(),
  }),
  addCourse: joii.object().keys({
    id: joii.number().required(),
    courseName: joii.string().required(),
  }),
  updateCourse: joii.object().keys({
    id: joii.number().required(),
    name: joii.string().required(),
  }),
  deleteCourse: joii.object().keys({
    id: joii.number().required(),
  }),
};
