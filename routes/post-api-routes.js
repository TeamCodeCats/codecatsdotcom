// Requiring our models
var db = require("../models");

module.exports = function(app) {

    // GET route for getting all of the posts
    app.get("/api/posts/", function(req, res) {
        console.log("/api/posts call made");
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
            ]
            }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    app.get("/api/posts/:id", function(req, res) {
        // GET route for only getting a specific userId's posts.
        db.Post.findOne({
            where: {
            id: req.params.id
            },
            include: [db.User]
        }).then(function(dbPost) {
          res.json(dbPost);
        });
    });
}