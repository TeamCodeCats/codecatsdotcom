// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var keys = require('./config/keys');
var cookieSession = require('cookie-session');
var passportSetup = require('./config/passport-setup');
var passport = require('passport');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

// ?
app.use(methodOverride('X-HTTP-Method-Override'));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Use cookie-sessions - encrypt cookie, make sure its a day long max, then send it to the browser (all happens when the user is logged in)
app.use(cookieSession({
	maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey],
  httpOnly: false
}));

// Initialize Passport
app.use(passport.initialize());	// middleware to initialize passport
app.use(passport.session()); 	// use passport session cookies

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse Application/JSON
app.use(bodyParser.json());

var db = require("./models");

// Set Handlebars.
var exphbs = require("express-handlebars");
var Handlebars = require("handlebars");
var MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);

// Use Handlebars as the default view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
require("./routes/html-routes.js")(app);
require("./routes/auth-routes.js")(app);
require("./routes/post-api-routes.js")(app);

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});






