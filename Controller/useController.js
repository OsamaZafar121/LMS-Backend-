const useService = require("../Service/useService");
const useScheme = require("./useValidation");

const getRouter = (req, res, next) => {
  res.send({ message: "get" });
};
const useData = (req, res, next) => {
  const user = useService.getUser();
  res.send(user);
};
const addUser = (req, res, next) => {
  const { error, value } = useScheme.addUsers.validate(req.body);
  if (!error) {
    const user = useService.createUser(value);
    res.send(user);
  } else {
    res.send(error.details[0].message);
  }
};
const updateUser = (req, res, next) => {
  const { error, value } = useScheme.updateUsers.validate(req.body);
  if (!error) {
    const userId = req.params.id;
    const updateUserData = req.body;
    const data = useService.updateUser(userId, updateUserData, value);
    res.send(data);
  } else {
    res.send(error.details[0].message);
  }
};

const deleteUser = (req, res, next) => {
  const userId = req.params.id;
  console.log(userId);
  const data = useService.deleteUser(userId);
  res.send(data);
};

module.exports = {
  useData,
  getRouter,
  addUser,
  updateUser,
  deleteUser,
};
