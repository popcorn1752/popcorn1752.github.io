//var form = document.getElementByName("data");

$(.but).on("click", function() {
            $.ajax({
                url: "https://formspree.io/tester1752@gmail.com",
                method: "POST",
                data: {
                    message: "hello!"
                },
                dataType: "json"
            });
        };
