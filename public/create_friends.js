$(document).ready(function () {
    $('#createFriendsBtn').click( function(){
        var payload = {
            UserID: $('#UserID').val(),
            FriendID: $('#FriendID').val()
         };

        $.ajax({
            url: $("#create_friends_form").attr("action"),
            type: "POST",
            contentType: "application/json",
            processData: false,
            data: JSON.stringify(payload),
            complete: function(data) {window.location.replace('/profile/?userid=' + $('#UserID').val());
            }
        });
    });
});