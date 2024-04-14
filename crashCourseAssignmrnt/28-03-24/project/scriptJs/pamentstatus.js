document.querySelector("form").addEventListener("submit", payment);



function payment(event) {
  event.preventDefault();
    var otpValue=document.querySelector(".otp").value;
    if(otpValue==1234){
        alert("Payment Success, Redirect to Home Page");
        window.location.href ="index.html";
        localStorage.setItem("cartItems",null)
    }
    else{
        document.querySelector(".otp").value=null;
        alert("Wrong OTP, Re-enter OTP again");
    }
   
}