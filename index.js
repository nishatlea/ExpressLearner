//1st example

// var express = require("express");
// var app = express();

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });
// app.listen(3001);

//2nd example

// var express = require("express");
// var app = express();

// app.get("/hello", function (req, res) {
//   res.send("Hello World hello!");
// });

// app.listen(3001);

//Example 3 : Using Multiple methods
var express = require("express");
var app = express();

// app.get("/hello", function (req, res) {
//   res.send("Hello World!");
// });
//For posting purpose I have to write in the terminal this command:
//curl -X POST "http://localhost:3000/hello"
app.post("/hello", function (req, res) {
  res.send("You just called the post method at '/hello'!\n");
});

app.listen(3001);
