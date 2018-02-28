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

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse Application/JSON
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

// Use Handlebars as the default view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Passport Authentication Setup
var passportSetup = require('./config/passport-setup');

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/auth-routes.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening at localhost: " + PORT);
  });
});
