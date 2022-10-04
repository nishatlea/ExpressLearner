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
// var express = require("express");
// var app = express();

// app.get("/hello", function (req, res) {
//   res.send("Hello World!");
// });
//For posting purpose I have to write in the terminal this command:
//curl -X POST "http://localhost:3000/hello"
// app.post("/hello", function (req, res) {
//   res.send("You just called the post method at '/hello'!\n");
// });

// app.listen(3001);

//Example 4 A special method, all, is provided by Express to handle all types of http methods at a particular route using the same function

// var express = require("express");
// var app = express();

// app.all("/test", function (req, res) {
//   res.send("HTTP method doesn't have any effect on this route!");
// });

// app.listen(3001);

//Example 6 Using Express.Router

// var express = require("express");
// var app = express();

// var things = require("./things.js");

// //both index.js and things.js should be in same directory
// app.use("/things", things);

// app.listen(3000);

//Example 7 Using Dynamic Routes
// var express = require("express");
// var app = express();

// app.get("/:id", function (req, res) {
//   res.send("The id you specified is " + req.params.id);
// });
// app.listen(3000);

//Example 8 Complex Dynamic Routes
// var express = require("express");
// var app = express();

// app.get("/things/:name/:id", function (req, res) {
//   res.send("id: " + req.params.id + " and name: " + req.params.name);
// });
// app.listen(3000);

//Example 9 Pattern Matched Routes
var express = require("express");
var app = express();

app.get("/things/:id([0-9]{5})", function (req, res) {
  res.send("id: " + req.params.id);
});

app.get("*", function (req, res) {
  res.send("Sorry, this is an invalid URL.");
});

app.listen(3000);
