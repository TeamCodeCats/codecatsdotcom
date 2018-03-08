// *********************************************************************************
// auth-routes.js - this file offers a set of routes for authenticating users with OAuth
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');



// Routes
// =============================================================
module.exports = function(app) {
	
	// // Auth Login
	// app.get("/auth/login", (req, res) => {
	//     res.render("login", {user: req.user});
	// });

	// Auth Logout
	app.get('/auth/logout', (req, res) => {
		// handle with passport

		//console.log(req.session); 	//will show user id as -> {user: x}
		req.logout();	//removes the userID from the cookie
		//console.log(req.session);		//will show an empty object

		res.redirect("/");
	});

	// Auth with Google
	app.get('/auth/google', passport.authenticate('google', {

		// What do we want to retrieve from the user's google+?
		scope: ['profile']
	}));

	// Google Redirect Callback Route
	app.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
		//res.send('Reached callback URI');
		//res.json(req.user);

		//console.log(req.user);
		//res.redirect('/profile/' + req.user.id);		//should redirect to '/profile/req.user.id'

		// console.log(req.user);
		res.redirect('/index');		//should redirect to '/profile/req.user.id'
	});

	app.get('/auth/getuser', function(req, res) {
		var userData = {
			id: req.user.id,
			firstName: req.user.firstName,
			lastName: req.user.lastName,
			employer: req.user.employer,
			location: req.user.location,
			hometown: req.user.hometown,
			profileImgUrl: req.user.profileImgUrl,
			backgroundColor: req.user.backgroundColor,
			GitHubUrl: req.user.GitHubUrl,
			StackOverFlowUrl: req.user.StackOverFlowUrl,
			LinkedInUrl: req.user.LinkedInUrl,
			FacebookUrl: req.user.FacebookUrl,
			introMsg: req.user.introMsg
		}
		res.json(userData);
	});
};
