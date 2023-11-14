var express = require("express");
var router = express.Router();
const { getStudents } = require("../Controller/useController");

/* GET users listing. */

router.get("/studentData", getStudents);

module.exports = router;
