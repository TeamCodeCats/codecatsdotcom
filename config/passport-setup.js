// Dependencies
// ========================================================
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');
var keys = require('./keys');
var db = require('../models');


passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	db.User.findById(id).then((user) => {
		done(null, user);
	});
});

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
		db.User.findOne({where: {googleID: profile.id}}).then((currentUser) => {
			if (currentUser) {
				console.log('user is: ');
				console.log(currentUser);
				done(null, currentUser);
			}
			else {
				db.User.create({username: profile.displayName, googleID: profile.id}).then((newUser) => {
					console.log('new user created: ' + newUser);
					done(null, newUser);
				});
			}
		});
		


	})
)