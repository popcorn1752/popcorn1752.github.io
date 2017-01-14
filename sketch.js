$(document).ready(function() {

    $("#data").submit(function() {
        alert("submitted");
        $.ajax({
            url: "https://formspree.io/tester1752@gmail.com",
            method: "POST",
            data: $("#data").serialize(),
            dataType: "json"
        });
    });


});
