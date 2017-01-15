$(document).ready(function() {
    $('#contact-form').submit(function() {
        var name = document.getElementById('inputName')
        var tet = document.getElementById('inputTET')
        var message = document.getElementById('inputMessage')

        if (!name.value || !tet.value || !message.value) {
            alert("Please check your entries");
            return false;
        } else {
            $.ajax({
                method: 'POST',
                url: "https://formspree.io/tester1752@gmail.com",
                data: $('#contact-form').serialize(),
                datatype: 'json'
            });
            //e.preventDefault();
            //$(this).get(0).reset();
            alert("Message sent");
        }
    });
});
