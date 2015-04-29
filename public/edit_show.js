$(document).ready(function () {
    $('#editShowBtn').click( function(){
        var payload = {
            ShowID: $('#ShowID').val(),
            ShowName: $('#ShowName').val(),
            Seasons: $('#Seasons').val(),
            Rating: $('#Rating').val(),
            Genre: $('#Genre').val(),
            AirTime: $('#AirTime').val()
        };

        $.ajax({
            url: $("#edit_show_form").attr("action"),
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