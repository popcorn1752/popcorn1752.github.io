$(document).ready(function() {

    $("#contactform").submit(function() {
        alert("submitted");
        $.ajax({
            url: "https://formspree.io/tester1752@gmail.com",
            method: "POST",
            data: {
                message: "tteessteer....!"
            },
            dataType: "json"
        });
    });


});
