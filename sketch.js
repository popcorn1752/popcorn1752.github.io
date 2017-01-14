$(document).ready(function() {

    $("#data").submit(function(e) {
        alert("submitted");
        $.ajax({
            url: "https://formspree.io/tester1752@gmail.com",
            method: "POST",
            data: $("#data"),
            dataType: "json"
        });
    });


});
