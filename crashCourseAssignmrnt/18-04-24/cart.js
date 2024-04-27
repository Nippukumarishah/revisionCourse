
let loginUser = JSON.parse(localStorage.getItem("loginUser"));
document.getElementById("name").textContent = `Welcome ${loginUser.name}`;

let cont = document.getElementById("cont");
async function getData() {
  let res = await fetch("http://localhost:3000/allUsersCart");
  let data = await res.json();
  console.log(data[loginUser.name])
  displayData(data[loginUser.name]);
}
getData();

function displayData(arr) {
  arr.forEach((el, i) => {
    let card = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.src;
    let h3 = document.createElement("h3");
    h3.textContent = `title:- ${el.title}`;
    let h4 = document.createElement("h4");
    h4.textContent = `title:- ${el.price}`;
    let h5 = document.createElement("h5");
    h5.textContent = `title:- ${el.ratings}`;
    let addBtn = document.createElement("button");
    addBtn.textContent = "Add to Cart";
    addBtn.addEventListener("click", function () {
      addFn(el, i);
    });
    let delBtn = document.createElement("button");
    delBtn.textContent = "delete";
    card.append(img, h3, h4, h5, addBtn, delBtn);
    cont.append(card);
  });
}
function logout() {
  localStorage.removeItem("loginUser");
  alert("Loged out...");
  window.location.href = "index.html";
}

async function addFn(el, i) {
  let res = await fetch("http://localhost:3000/allUsersCart");
  let data = await res.json();

  data[loginUser.name].push(el)

  fetch("http://localhost:3000/allUsersCart",{
    method:"POST", 
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
  }).then(()=>{
    console.log("Product added to cart")
  }).catch((err)=>{
    console.log("err",err)
  })
  
}