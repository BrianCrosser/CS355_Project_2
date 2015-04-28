$(document).ready(function () {
    $('#editProfileBtn').click( function(){
        var payload = {
            UserID: $('#UserID').val(),
            FirstName: $('#FirstName').val(),
            LastName: $('#LastName').val(),
            Email: $('#Email').val()
        };

        $.ajax({
            url: $("#edit_profile_form").attr("action"),
            type: "POST",
            contentType: "application/json",
            processData: false,
            data: JSON.stringify(payload),
            complete: function(data) {
                console.log(data.responseText);
                $('#output').html(data.responseText);
                $('#output').show();
            }
        });
    });
});