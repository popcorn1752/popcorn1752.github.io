$(document).ready(function() {

    $("#but").click(function() {
        alert("submitted");
        $.ajax({
            url: "https://formspree.io/tester1752@gmail.com",
            method: "POST",
            data: $("#data").serialize(),
            dataType: "json"
        });
    });


});
