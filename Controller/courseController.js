const courseService = require("../Service/courseService");
const courseScheme = require("./useValidation");

const courseData = (req, res, next) => {
  const user = courseService.getCourse();
  res.send(user);
};
const addCourse = (req, res, next) => {
  const { error, value } = courseScheme.addCourse.validate(req.body);
  if (!error) {
    const user = courseService.addCourse(value);
    res.send(user);
  } else {
    res.send(error.details[0].message);
  }
};
const updateCourse = (req, res, next) => {
  const { error, value } = courseScheme.updateCourse.validate(req.body);
  if (!error) {
    const courseId = req.params.id;
    const updateCourseData = req.body;
    const data = courseService.updateCourse(courseId, updateCourseData, value);
    res.send(data);
  } else {
    res.send(error.details[0].message);
  }
};

const deleteCourse = (req, res, next) => {
  const courseId = req.params.id;
  console.log(courseId);
  const data = courseService.deleteCourse(courseId);
  res.send(data);
};
 
module.exports = {
  courseData,
  addCourse,
  updateCourse,
  deleteCourse,
};
