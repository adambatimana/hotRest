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

//create object from jquery to PUSH INTO object arrays

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
let waitList = [{}];


// ====================================
//             ROUTING
// ====================================

app.get("/api/:tables?", function(req, res) {
  let newTable = req.params.tables;
    return res.json(newTable)
});

// app.get("/api/tables", function(req, res) {
//   let newTable = req.params.tables;
//   res.json(newTable)
// });

app.get("/", function(req, res) {
  res.send("THIS IS THE HOMEPAGE!")
  // res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.send("THIS IS THE TABLES PAGE!")

  // res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.send("THIS IS THE Reservation page!")

  // res.sendFile(path.join(__dirname, "index.html"));
});



// app.get("/api/waitlist", function(req, res) {
//   res.json();
// });


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
