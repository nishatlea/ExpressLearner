//1st example

// var express = require("express");
// var app = express();

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });
// app.listen(3001);

//2nd example

var express = require("express");
var app = express();

app.get("/hello", function (req, res) {
  res.send("Hello World hello!");
});

app.listen(3001);
