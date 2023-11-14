var express = require("express");
var router = express.Router();
const {
  getRouter,
  useData,
  addUser,
  updateUser,
  deleteUser,
} = require("../Controller/useController");
const authenticationController = require("../common/authenticationController");

/* GET users listing. */
router.get("/", getRouter);
router.post("/login", authenticationController.login);
router.get("/data", useData);
router.post("/adduser", addUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
