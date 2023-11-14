const { models } = require("../models/index");
const teacher = require("../models/schema/teacherSchema");

module.exports = {
  getTeacher: async () => {
    const teacher = await models.findAll();
    return teacher;
  },
  addTeacher: async () => {
    const teacher = await models.push(data);
    return teacher;
  },
  UpdateTeacher: async (teacherId, updateTeacherData) => {
    const teacher = await models.teacher.update(updateTeacherData, {
      where: {
        id: teacherId,
      },
    });

    return teacher;
  },

  deleteTeacher: async (teacherId) => {
    const teacher = await models.teacher.findByPk(teacherId);
    if (teacher) {
      teacher.destory();
      return "teacher delete Sucessfully";
    }
    return null;
  },
};
