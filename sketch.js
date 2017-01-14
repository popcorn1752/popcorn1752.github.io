// $(document).ready(function() {
//     $('#contact-form').submit(function(e) {
//         var name = $('#inputName')
//         var email = $('#inputEmail')
//         var message = $('#inputMessage')
//
//         if (name.val() == "" || email.val() == "" || message.val() == "") {
//             $('.submit-fail').fadeToggle(400);
//             return false;
//         } else {
//             $.ajax({
//                 method: 'POST',
//                 url: 'formspree.io/tester1752@gmail.com',
//                 data: $('#contact-form'),
//                 datatype: 'json'
//             });
//             e.preventDefault();
//             $(this).get(0).reset();
//         }
//     });
// });
