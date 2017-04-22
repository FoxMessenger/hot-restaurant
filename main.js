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

var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');


// =================
var app = express();
	// process environment
var PORT = process.env.PORT || 3000;
