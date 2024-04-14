document.querySelector("form").addEventListener("submit", login);
    let regdUsers = JSON.parse(localStorage.getItem("DB"));

    function login(event){
        event.preventDefault();

        let password = document.querySelector("#pass").value;
        let userName = document.querySelector("#user").value;


        let flag = false;
        for(let i = 0; i < regdUsers.length; i++){
            if(regdUsers[i].userName == userName && regdUsers[i].password == password){
                flag = true;
                localStorage.setItem("login_user_name", user);
            }
        }
        if(flag == true){
            window.location.href = "wishlist.html";
        }
        else{
            alert("Please Enter current Password and User Name");
        }
    }