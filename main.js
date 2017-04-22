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
var fs = require('fs');
var mysql = require('mysql');				// the database
var bodyParser = require('body-parser');	// body-parser extract the entire body portion of an incoming request stream
var express = require('express');			//
var path = require('path');					//
var url = require('url');					
var http = require("http");					
var app = express();
var PORT = 3300; 		// process environment

// =================
// DEPENDENCIES
// =================

var server = http.createServer(handleRequest);

function handleRequest(req, res){
	
	var urlParts = url.parse(req.url);
	
//	path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
//	 Returns: '/foo/bar/baz/asdf'

	switch (urlParts.pathname) {
		
		case "/":

			fs.readFile("index.html", function(err, data) {
				res.writeHead(200, { "Content-Type": "text/html" });	
				res.end(data);
			});
			break;

		case '/reserve':
			fs.readFile('reserve.html', function(err, data) {
				res.writeHead(200, {'Content-Type': 'text/html'});	
				res.end(data);
			});

			break;

		case '/tables':
			fs.readFile('tables.html', function(err, data) {
				res.writeHead(200, {'Content-Type': 'text/html'});	
				res.end(data);
			});

			break;

		// case '/tables':
		// 	fs.readFile('tables.html', function(err, data) {
		// 		res.writeHead(200, {'Content-Type': 'text/html'});	
		// 		res.end(data);
		// 	});

		// break;

		default:
			fs.readFile('index.html', function(err, data) {
				res.writeHead(200, {'Content-Type': 'text/html'});	
				res.end(data);
			})
			break;
	}

}
server.listen(PORT, function() {
	console.log('server is listening to PORT: ' + PORT);
});


// connecting to the database
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3300,
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
// MYSQL DATABASE 
// ==============================================

// dataList = 'SELECT * FROM products';

// ==============================================
// Sets up the Express app to handle data parsing
// ==============================================
// app.use(bodyParser.json());
// // I don't know what this does
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// // ==============================================
// // DATA
// // ==============================================

// var forms = [{}];

// // ==============================================
// // ROUTES
// // ==============================================

// // Basic route that sends the user first to the AJAX Page



// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// app.get("/reserve", function(req, res) {
//   res.sendFile(path.join(__dirname, "reserve.html"));
// });

// app.get("/tables", function(req, res) {
//   res.sendFile(path.join(__dirname, "tables.html"));
// });

// // Search for Specific Character (or all characters) - provides JSON
// app.get("/api/:forms?", function(req, res) {
//   var chosen = req.params.forms;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < forms.length; i++) {
//       if (chosen === forms[i].routeName) {
//         return res.json(forms[i]);
//       }
//     }

//     return res.json(false);
//   }
//   return res.json(forms);
// });

// // // Create New Characters - takes in JSON input
// app.post("/api/new", function(req, res) {
//   var newcharacter = req.body;
//   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newcharacter);

//   characters.push(newcharacter);

//   res.json(newcharacter);
// });

