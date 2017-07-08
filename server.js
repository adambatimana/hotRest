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



//GET information from frontend to put into array for tables
let tables = [];


//GET information from frontend to put into array for the waitlist
let waitList = [];


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
//            POST REQUEST
// ====================================

app.post("/api/tables", function(req, res) {

  let newTable = req.body;
  console.log(newTable);
  // ====================================
  //            LOGIC
  // ====================================
  //if newtables get to 5 send tables to waitlist
  if (tables.length < 5) {
      tables.push(newTable);
  }else{
      waitList.push(newTable)
      console.log(waitList);
  }
  res.json(newTable);
});

app.post("/api/waitlist", function(req, res) {

  let addToWait = req.body;

  console.log(addToWait);

  waitList.push(addToWait);

  res.json(addToWait);


});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
