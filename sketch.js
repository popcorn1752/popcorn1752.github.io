$(document).ready(function() {

    $("#but").click(function() {
        //alert($("#name").val());
        $.ajax({
            url: "https://formspree.io/tester1752@gmail.com",
            method: "POST",
            data: $("#txt"),
            dataType: "json"
        });
    });


});
