// Front end
	// Home
	// View Table
		// Current reservation
		// Waiting List
	 
	// Make a reservation
		// goes to route /reserve
			// which is a form
				// 
				// form will push to the database
				// ***** wait list is route /table
				// pops up an alert

// =================
// DEPENDENCIES
// =================
var mysql = require('mysql');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
	// process environment
var PORT = process.env.PORT || 3306;

// connecting to the database
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'Hot_restaurantDB'
});

// connected to the server
connection.connect(function(err) {
    if (err){
    	console.log('the error is' + err);
	} else {
	    console.log('connected...');
	}
});

// ending the connection
var end = function() {
    connection.end(function(err) {
        // The connection is terminated now
    });
}

// ==============================================
// Sets up the Express app to handle data parsing
// ==============================================
app.use(bodyParser.json());
// I don't know what this does
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// ==============================================
// DATA
// ==============================================

var forms = [{}];

// ==============================================
// ROUTES
// ==============================================

// Basic route that sends the user first to the AJAX Page



app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:forms?", function(req, res) {
  var chosen = req.params.forms;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < forms.length; i++) {
      if (chosen === forms[i].routeName) {
        return res.json(forms[i]);
      }
    }

    return res.json(false);
  }
  return res.json(forms);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  var newcharacter = req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});
