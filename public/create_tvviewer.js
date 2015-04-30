$(document).ready(function () {
    $('#createTVViewerBtn').click( function(){
        var payload = {
            UserID: $('#UserID').val(),
            TVShowID: $('#TVShowID').val()
         };

        $.ajax({
            url: $("#create_tvviewer_form").attr("action"),
            type: "POST",
            contentType: "application/json",
            processData: false,
            data: JSON.stringify(payload),
            complete: function(data) {window.location.replace('/profile/?userid=' + $('#UserID').val());
            }
        });
    });
});