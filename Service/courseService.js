const { models } = require("../models/index");
const course = require("../models/schema/courseSchema");

module.exports = {
  getCourse: async () => {
    const course = await models.findAll();
    return course;
  },
  addCourse: async () => {
    const course = await models.push(data);
    return course;
  },
  updateCourse: async (courseId, updateCourseData) => {
    const course = await models.course.update(updateCourseData, {
      where: {
        courseId: courseId,
      },
    });
    return course;
  },

  deleteCourse: async (courseId) => {
    const course = await models.course.findByPk(courseId);
    if (course) {
      course.destry();
      return "Course delete Sucessfully";
    }
    return null;
  },
};
