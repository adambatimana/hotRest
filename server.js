// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// ====================================
//             jQuery
// ====================================

// //create new tables takes in json input
// app.post("/api/new", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   var newTable = req.body;
//
//   console.log(newTable);
//
//   // We then add the json the user sent to the character array
//   tables.push(newTable);
//
//   // We then display the JSON to the users
//   res.json(newTable);
// });
//GET information from frontend to put into array for tables
let tables = [
  {
  name: "Adam",
  phone:"808-888-8888",
  email: "adam@gmail.com",
  id: "adamTable"
  }
];


//GET information from frontend to put into array for the waitlist
let waitList = [{
  name: "Adam",
  phone:"808-888-8888",
  email: "adam@gmail.com",
  id: "adamTable"
}];


// ====================================
//             ROUTING
// ====================================


app.get("/", function(req, res) {
  // res.send("THIS IS THE HOMEPAGE!")
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  // res.send("THIS IS THE TABLES PAGE!")
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  // res.send("THIS IS THE Reservation page!")
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
  res.json(tables)
});

app.get("/api/waitlist", function(req, res) {
  res.json(waitList);
});


// ====================================
//             GET REQUEST
// ====================================

// app.get("/api/:characters?", function(req, res) {
//   var chosen = req.params.characters;
//
//   return res.json();
// });


// ====================================
//            POST REQUEST
// ====================================

// app.post("/api/new", function(req, res) {
//
//   var newTable = req.body;
//
//   console.log(newTable);
//
//   "table".push();
//
//
//   res.json();
// });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
