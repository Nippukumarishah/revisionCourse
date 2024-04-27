let loginUser = JSON.parse(localStorage.getItem("loginUser"));
    document.getElementById("name").textContent = `Welcome ${loginUser.name}`;
    console.log(loginUser.name);


    let container = document.getElementById("container");
    

    async function getData(){
        let res = await fetch("http://localhost:3000/products")
        let data = await res.json()
        console.log(data)
        displayData(data)
        totalCartValue();
    }
    getData();

    function displayData(arr){
        arr.forEach((ele, i) => {
            let productCard = document.createElement("div");
            let img = document.createElement("img")
            img.src = ele.src;
            let h3 = document.createElement("h3");
            h3.textContent = `Title: ${ele.title}`;
            let p = document.createElement("p");
            p.textContent = `Price: ${ele.price}`;
            let p2 = document.createElement("h6");
            p2.textContent = `Ratings: ${ele.ratings}`;
            let addBtn = document.createElement("button");
            addBtn.textContent = "Add to Cart";
            addBtn.addEventListener("click", function(){
                addFn(ele, i);
            })
            let delBtn = document.createElement("button");
            delBtn.textContent = "DELETE 🗑️";
            delBtn.addEventListener("click", () =>{
                handleDelete(ele, productCard)
            })
            
            

            productCard.append(img,h3,p,p2,addBtn,delBtn);
            container.append(productCard)
        });
    }
    function logout(){
        localStorage.removeItem("loginUser");
        alert("Logout successFull");
        window.location.href = "index.html"   
         }
         let handleDelete =(id) =>{
            fetch(`http://localhost:3000/products/${id}`,{
                method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }

            })
         }

         async function addFn(ele, i){
            let res = await fetch("http://localhost:3000/allUsersCart");
            let data = await res.json();

            if(data[loginUser.name] == undefined){
                data[loginUser.name] = [];
                data[loginUser.name].push(ele);
            }
            else{
                data[loginUser.name].push(ele);
            }
            fetch("http://localhost:3000/allUsersCart",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         })
         .then(() => {
            console.log("Product added to cart page");
            alert("Product added to cart page");
            window.location.href = "cart.html"
         }).catch((err) => {
            console.log("err", err);
         });
         totalCartValue();
         }

         async function totalCartValue(){
            let res = await fetch("http://localhost:3000/allUsersCart");
            let data = await res.json();
            if(data[loginUser.name] == undefined){
                document.getElementById("total").textContent = `Your total Cart Value is Rs: 0`;
            }else{
                let sum = data[loginUser.name].reduce((a, ele, i) => {
                    return a + ele.price;
                },0);
                document.getElementById("total").textContent = `Your Total Cart Value is Rs: ${sum}`;
            }
         }