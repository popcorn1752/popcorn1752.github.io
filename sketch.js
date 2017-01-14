var form = document.getElementByName("data");

$.ajax({
    url: "https://formspree.io/tester1752@gmail.com",
    method: "POST",
    data: form,
    dataType: "json"
});
