//Example 16 Notification api creation using sequelize

var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
//Multer is a node. js middleware for handling multipart/form-data , which is primarily used for uploading files.
var multer = require("multer");
var upload = multer();

var app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

//Require the Router we defined in movies.js
var notificationlist = require("./test2.js");

//Use the Router on the sub route /movies
app.use("/test2", notificationlist);

app.listen(3005);
