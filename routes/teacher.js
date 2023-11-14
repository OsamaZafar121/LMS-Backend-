var express = require("express");
var router = express.Router();
const {
  teacherData,
  addTeacher,
  updateTeacher,
  deleteTeacher,
} = require("../Controller/teacherController");

/* GET Teachers listing. */
router.get("/data", teacherData);
router.post("/addTeacher", addTeacher);
router.put("/update/:id", updateTeacher);
router.delete("/delete/:id", deleteTeacher);

module.exports = router;
