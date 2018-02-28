// Dependencies
// ========================================================
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');
var keys = require('./keys');
var db = require('../models');

passport.use(
	new GoogleStrategy({
	// Options for Google strategy
	callbackURL: '/auth/google/redirect',
	clientID: keys.google.clientID,
	clientSecret: keys.google.clientSecret
	}, (accessToken, refreshToken, profile, done) => {
		// passport callback function
		// this piece of code runs when Google sends back the 'user-code' to our app after the user allows access

		// console.log('passport cb fired');
		// console.log(profile);

		// Create a new User in Sequelize
		// (CAN USE findOrCreate HERE)
		db.User.create({username: profile.displayName, googleID: profile.id}).then((newUser) => {
			console.log(newUser);
		});

		
	})
)