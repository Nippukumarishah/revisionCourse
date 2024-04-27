function signUp(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {name, email, password};
    

    fetch("http://localhost:3000/users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(() => {
        console.log("SignUp Sucessfull");
        alert("SignUp sucessfull, Please Login...")
    }).catch((err)=>{
        console.log("error", err)
    })
}