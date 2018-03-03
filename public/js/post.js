$(document).ready(function() {
    /* global moment */

    // Set global variables to store form data

    var postBodyInput = $("#post-body");
    // The below two are hardcoded placeholder for the moment
    var postTypeInput = "status-update";
    var userIdInput = "1";

    $("#post-submit").on("click", function() {
        event.preventDefault();
        // Wont submit the post if we are missing a body
        if (!postBodyInput.val().trim()) {
            return;
        }

        var newPost = {
            body: postBodyInput.val().trim(),
            postType: postTypeInput,
            userId: userIdInput
        }

        console.log(newPost);

        submitPost(newPost);

    })

    function submitPost(Post) {
        $.post("/api/posts/", Post, function() {
            location.reload();
        });
    }

});