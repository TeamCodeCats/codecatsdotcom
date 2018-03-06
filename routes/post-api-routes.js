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
                    include: [ db.User],
                    order: [
                        ['createdAt', 'DESC']
                    ]
                }
            ],
            order: [
                ['createdAt', 'DESC']
            ]
            }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    app.get("/api/posts/:id", function(req, res) {
        // GET route for only getting a specific userId's posts.
        db.Post.findOne({
            where: {
            UserIs: req.params.id
            },
            include: [db.User]
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    app.post("/api/posts/", function(req, res) {
        console.log("/api/posts call made");
        db.Post.create({
            body: req.body.body,
            postType: req.body.postType,
            UserId: req.body.userId
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    app.post("/api/comment/", function(req, res) {
        console.log("/api/comment call made");
        db.Comment.create({
            where: {
                UserIs: req.params.id
            },
            PostId: req.body.postId,
            body: req.body.body,
            UserId: req.body.userId
        }).then(function(dbComment) {
            console.log("Comment created!")
            res.json(dbComment);
        });
    });

    app.put("/api/profile/update/", function(req, res) {
        console.log("Updating profile");
        console.log(req.body.id); 
        db.User.update(req.body, { 
            where: {
                id: req.body.id
            }
       
        //     selector,
        //     firstName: req.params.firstName,
        //     lastName: req.params.lastName,
        //     employer: req.params.employer,
        //     location: req.params.location,
        //     hometown: req.params.hometown,
        //     introMsg: req.params.intro,
        //     profileImgUrl: req.params.profileUrl,
        //     backgroundColor: req.params.bgColor,
        //     GitHubUrl: req.params.GitHubUrl,
        //     StackOverFlowUrl: req.params.StackOverFlowUrl,
        //     LinkedInUrl: req.params.LinkedInUrl,
        //     FacebookUrl: req.params.FacebookUrl
        }).then(function(dbUser) {
            // res.json(dbUser);
            res.json(dbUser);
        });
    });
}

// firstName: $('#firstName').val().trim(),
// lastName: $('#lastName').val().trim(),
// employer: $('#employer').val().trim(),
// location: $('#location').val().trim(),
// hometown: $('#hometown').val().trim(),
// intro: $('#intro').val().trim(),
// profileUrl: catUrl,
// bgColor: colorCode