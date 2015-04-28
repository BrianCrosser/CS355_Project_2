$(document).ready(function () {
    $('#createProfileBtn').click( function(){
        var payload = {
            Email: $('#Email').val(),
            FirstName: $('#FirstName').val(),
            LastName: $('#LastName').val()
        };

        $.ajax({
            url: $("#create_profile_form").attr("action"),
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