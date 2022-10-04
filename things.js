var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.send("GET route on things.");
});
router.post("/", function (req, res) {
  res.send("POST route on things.");
});

//exported this router from things.js
module.exports = router;
