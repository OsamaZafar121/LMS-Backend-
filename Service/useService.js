const bcrypt = require("bcryptjs");
const { models } = require("../models/index");
const user = [
  {
    id: 1,
    name: "Osama",
    age: 24,
  },
  {
    id: 2,
    name: "Haris",
    age: 25,
  },
  {
    id: 3,
    name: "Ali",
    age: 23,
  },
  {
    id: 4,
    name: "Usman",
    age: 25,
  },
];
const student = [
  {
    rollNUmber: 6,
    name: "Osama",
    fatherName: "Zafar",
    dob: "18-07-1998",
  },
  {
    rollNo: 8,
    name: "Ali",
    fatherName: "Iqbal",
    dob: "11-09-1998",
  },
  {
    rollNo: 9,
    name: "Ammar",
    fatherName: "Osama",
    dob: "02-10-1998",
  },
];
module.exports = {
  getUser: () => {
    return user;
  },
  addUser: async () => {
    data.password = bcrypt.hash(data.password, 10);
    const user = await models.push(data);
    return user;
  },
  updateUser: async (userId, updateUserData) => {
    const user = await models.user.update(updateUserData, {
      where: {
        id: userId,
      },
    });

    return user;
  },
  deleteUser: (userId) => {
    const userIndex = user.findIndex((users) => users.id == userId);
    if (userIndex !== -1) {
      const deleteUser = user.splice(userIndex, 1);
      return deleteUser;
    }
  },
};
