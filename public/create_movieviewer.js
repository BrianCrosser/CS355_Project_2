$(document).ready(function () {
    $('#createMovieViewerBtn').click( function(){
        var payload = {
            UserID: $('#UserID').val(),
            MovieID: $('#MovieID').val()
         };

        $.ajax({
            url: $("#create_movieviewer_form").attr("action"),
            type: "POST",
            contentType: "application/json",
            processData: false,
            data: JSON.stringify(payload),
            complete: function(data) {Window.location.replace('/profile/?userid=' + $('#UserID').val());
            }
        });
    });
});