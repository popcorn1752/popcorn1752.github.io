$(document).ready(function() {
    $('#contact-form').submit(function(e) {
        var name = document.getElementById('inputName')
        var email = document.getElementById('inputEmail')
        var message = document.getElementById('inputMessage')

        if (!name.value || !email.value || !message.value) {
            alert("Please check your entries");
            return false;
        } else {
            $.ajax({
                method: 'POST',
                url: 'https://formspree.io/tester1752@gmail.com',
                data: $('#contact-form'),
                datatype: 'json'
            });
            //e.preventDefault();
            //$(this).get(0).reset();
            alert("Message sent");
        }
    });
});
