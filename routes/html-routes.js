// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
//var router = require("express").Router();

// Adding a little piece of middleware to check if a user is logged in
var authCheck = function(req, res, next) {
	if (!req.user) {
		res.redirect('/auth/login');
	}
	else {
		next();
	}
}

// Routes
// =============================================================
module.exports = function(app) {
	app.get("/", function(req, res) {
	    res.render("landing");
	});

	app.get("/index", authCheck, function(req, res) {
	    res.render("index", {user: req.user});
	    console.log('sent the user');
	});

};


// Check with Jayson/Coop on how to make this work with a router instance
// ======================================================================
// module.exports = function(app) {
// 	router.route('/')
// 	.get(function(req, res) {
// 	    res.render("landing");
// 	});

// 	router.route('/index')
// 	.get(function(req, res) {
// 	    res.render("index");
// 	});

// };