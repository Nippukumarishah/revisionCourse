async function login(){
    let loginEmail = document.getElementById("loginEmail").value;
    let loginPassword = document.getElementById("loginPassword").value;

    let res =await fetch("http://localhost:3000/users");
    let data = await res.json()
    console.log(data);
    let flag = true;
    data.forEach((ele,i)=>{
        
        if(ele.email == loginEmail){
            if(ele.password == loginPassword){
                flag = true;
            alert("Login Sucessfull")
            window.location.href = "product.html"
        }else{
            alert("Wrong Password")
        }
        }
    })
    if(flag == false){
        alert("User Not Found, Please Register")
    }
   }