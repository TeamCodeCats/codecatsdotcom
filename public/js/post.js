$(document).ready(function() {

    // Set global variables to store form data
    var postBodyInput = $("#post-body");
    var postTypeInput = "status-update";

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

    });

    $("#post-body").keydown(function (e) {
        if (e.keyCode == 13) {
            $("#post-submit").click();
        }
    });

    $(".comment-submit").on("click", function() {
        event.preventDefault();
        // Wont submit the comment if we are missing a body
        var postId = $(this).attr('id');
        var commentBodyInput = $("#post-" + postId);
        // var commentPostId = $("#post-" + postId).data('postid');

        if (!commentBodyInput.val().trim()) {
            return;
        }

        var newComment = {
            body: commentBodyInput.val().trim(),
            postId: postId,
            userId: userId
        }

        console.log(newComment);

        submitComment(newComment);
    });

    $(".comment-body").keydown(function (e) {
        if (e.keyCode == 13) {
            $(".comment-submit").click();
        }
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