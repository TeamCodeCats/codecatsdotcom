// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
	app.get("/", function(req, res) {
	    res.render("landing");
	});

	app.get("/index", function(req, res) {
		console.log("Before the get attempt");
		var query = {};
        if (req.query.user_id) {
          query.UserId = req.query.user_id;
        }
		db.Post.findAll({
			where: query,
			include: [
                db.User, 
                {
                    model: db.Comment,
                    include: [ db.User]
                }
			],
			order: [
                ['createdAt', 'DESC']
            ]
			}).then(posts => {
			var hbsObject = {
				hbPosts: posts
			}
			// console.log(hbsObject);
			// console.log(hbsObject.hbPosts[0].Comments[0].User);
			res.render("index", hbsObject);		
		});
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