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
// var express = require("express");
// var app = express();

// app.get("/things/:id([0-9]{5})", function (req, res) {
//   res.send("id: " + req.params.id);
// });

// app.get("*", function (req, res) {
//   res.send("Sorry, this is an invalid URL.");
// });

// app.listen(3000);

//Example 10 Middleware
// var express = require("express");
// var app = express();

// //Simple request time logger
// app.use(function (req, res, next) {
//   console.log("A new request received at " + Date.now());

//   //This function call is very important. It tells that more processing is
//   //required for the current request and is in the next middleware function route handler.
//   next();
// });

// app.listen(3000);

//Example 11 Order of Middleware Calls

// var express = require("express");
// var app = express();

// //First middleware before response is sent
// app.use(function (req, res, next) {
//   console.log("Start");
//   next();
// });

// //Route handler
// app.get("/", function (req, res, next) {
//   res.send("Middle");
//   next();
// });

// app.use("/", function (req, res) {
//   console.log("End");
// });

// app.listen(3000);

// Example 12 body-parser to parse the body of requests which have payloads attached to them

// var bodyParser = require("body-parser");

// //To parse URL encoded data
// app.use(bodyParser.urlencoded({ extended: false }));

// //To parse json data
// app.use(bodyParser.json());

//Example 13 cookie-parser
// var cookieParser = require("cookie-parser");
// app.use(cookieParser());

//Example 14 PUG
// var express = require("express");
// var app = express();
// app.set("view engine", "pug");
// app.set("views", "./views");

// app.get("/first_template", function (req, res) {
//   res.render("first_view");
// });
// app.listen(3000);

//Example 15 Restful APIS

// var express = require("express");
// var bodyParser = require("body-parser");
// var cookieParser = require("cookie-parser");
// //Multer is a node. js middleware for handling multipart/form-data , which is primarily used for uploading files.
// var multer = require("multer");
// var upload = multer();

// var app = express();

// app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(upload.array());

// //Require the Router we defined in movies.js
// var movies = require("./movies.js");

// //Use the Router on the sub route /movies
// app.use("/movies", movies);

// app.listen(3005);

//Example 16 User api creation using sequelize

// var express = require("express");
// var bodyParser = require("body-parser");
// var cookieParser = require("cookie-parser");
// //Multer is a node. js middleware for handling multipart/form-data , which is primarily used for uploading files.
// var multer = require("multer");
// var upload = multer();

// var app = express();

// app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(upload.array());

// //Require the Router we defined in movies.js
// var userlist = require("./test.js");

// //Use the Router on the sub route /movies
// app.use("/test", userlist);

// app.listen(3005);
