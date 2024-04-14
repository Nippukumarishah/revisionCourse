document.querySelector("form").addEventListener("submit",formSubmit);
    var userStack = JSON.parse(localStorage.getItem("DB")) || [];
    function formSubmit(Event) {
        event.preventDefault();
        
        var email = document.querySelector("#email").value;
        var pass = document.querySelector("#pass").value;
        var user = document.querySelector("#user").value;
        var mbl = document.querySelector("#mbl").value;
        
           if(email.length == 0 || pass.length == 0 || user.length == 0 ||  mbl.length == 0 )
           {
               alert("Please Fill All The Filled")
           }
           else{
          var userData = {
            emailAdd :email,
            passwd : pass,
            userName: user, 
            mblNum  :mbl
        };
        userStack.push(userData);
     
         
        
        localStorage.setItem("DB",JSON.stringify(userStack));
        alert("Sign Up Success");
         window.location.href = "login.html";
    
         console.log(userStack);
    }}