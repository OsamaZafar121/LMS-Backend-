var express = require("express");
var router = express.Router();
const {
  courseData,
  addCourse,
  updateCourse,
  deleteCourse,
} = require("../Controller/courseController");

/* GET Courses listing. */
router.get("/data", courseData);
router.post("/addCourse", addCourse);
router.put("/update/:id", updateCourse);
router.delete("/delete/:id", deleteCourse);

module.exports = router;
