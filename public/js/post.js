$(document).ready(function() {
    /* global moment */

    // Set global variables to store form data

    var postBodyInput = $("#post-body");
    // The below two are hardcoded placeholder for the moment
    var postTypeInput = "status-update";
    // var userIdInput = "1";

    var commentBodyInput = $("#comment-body");
    var commentPostId = $("#comment-body").data('postid');
    // The below two are hardcoded placeholder for the moment
    // var commentUserIdInput = "2";

    $("#post-submit").on("click", function() {
        event.preventDefault();
        // Wont submit the post if we are missing a body
        if (!postBodyInput.val().trim()) {
            return;
        }

        var newPost = {
            body: postBodyInput.val().trim(),
            postType: postTypeInput,
            userId: userId
        }

        console.log(newPost);

        submitPost(newPost);

    })

    $("#comment-submit").on("click", function() {
        event.preventDefault();
        // Wont submit the comment if we are missing a body
        if (!commentBodyInput.val().trim()) {
            return;
        }

        var newComment = {
            body: commentBodyInput.val().trim(),
            postId: commentPostId,
            userId: userId
        }

        console.log(newComment);

        submitComment(newComment);
    });

    function submitPost(Post) {
        $.post("/api/posts/", Post, function() {
            location.reload();
        });
    }

    function submitComment(Comment) {
        $.post("/api/comment/", Comment, function() {
            location.reload();
        });
    }
});