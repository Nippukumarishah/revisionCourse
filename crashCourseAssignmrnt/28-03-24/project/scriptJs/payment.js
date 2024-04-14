document.querySelector("form").addEventListener("submit", payment);



    function payment(event) {
        event.preventDefault();

        var user = document.querySelector("#user").value;
        var card = document.querySelector("#card").value;
        var expiry = document.querySelector("#expiry").value;
        var cvv = document.querySelector("#cvv").value;

        if (user.length == 0 || card.length == 0 || expiry.length == 0 || cvv.length == 0) {
            alert("Please Fill All The Filled")
        }
        else {
            window.location.href = "paymentStatus.html";
        }

    }
