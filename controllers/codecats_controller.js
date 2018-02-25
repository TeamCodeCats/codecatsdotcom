var express = require('express');

var router = express.Router();

// Main router functionality
router.get("/", function(req, res) {
    res.render("landing");
});

router.get("/index", function(req, res) {
    res.render("index");
});

module.exports = router;