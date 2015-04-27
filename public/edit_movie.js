$(document).ready(function () {
    $('#editMovieBtn').click( function(){
        var payload = {
            MovieID: $('#MovieID').val(),
            MovieName: $('#MovieName').val(),
            YearReleased: $('#YearReleased').val(),
            Rating: $('#Rating').val(),
            Genre: $('#Genre').val()
        };

        $.ajax({
            url: $("#edit_movie_form").attr("action"),
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