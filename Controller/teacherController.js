const teacherService = require("../Service/teacherServices");
const teacherScheme = require("./useValidation");

const teacherData = (req, res, next) => {
  const user = teacherService.getTeacher();
  res.send(user);
};
const addTeacher = (req, res, next) => {
  const { error, value } = teacherScheme.addTeacher.validate(req.body);
  if (!error) {
    const user = teacherService.addTeacher(value);
    res.send(user);
  } else {
    res.send(error.details[0].message);
  }
};
const updateTeacher = (req, res, next) => {
  const { error, value } = teacherScheme.updateUsers.validate(req.body);
  if (!error) {
    const teacherId = req.params.id;
    const updateTeacherData = req.body;
    const data = useService.updateUser(teacherId, updateTeacherData, value);
    res.send(data);
  } else {
    res.send(error.details[0].message);
  }
};

const deleteTeacher = (req, res, next) => {
  const teacherId = req.params.id;
  console.log(teacherId);
  const data = teacherService.deleteTeacher(teacherId);
  res.send(data);
};

module.exports = {
  teacherData,
  addTeacher,
  updateTeacher,
  deleteTeacher,
};
