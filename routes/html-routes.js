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

	app.get("/profile/:id", function(req, res) {
		db.Post.findAll({
			where: {
				id: req.params.id
			},
			include: [
				db.User, 
				{
					model: db.Comment,
					include: [ 
						db.User 
					]
				}
			],
			order: [
				['createdAt', 'DESC']
			]
			}).then(posts => {
			var hbsObject = {
				hbPosts: posts
			}
			res.render("profile", hbsObject);
		});
	});
};