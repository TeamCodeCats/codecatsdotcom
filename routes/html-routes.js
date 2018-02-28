// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
//var router = require("express").Router();

// Routes
// =============================================================
module.exports = function(app) {
	app.get("/", function(req, res) {
	    res.render("landing");
	});

	app.get("/index", function(req, res) {
	    res.render("index");
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