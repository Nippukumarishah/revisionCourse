let container = document.getElementById("container");
let userList = document.getElementById("userList");

function display(){
    fetch(`https://reqres.in/api/users`)
    .then(res => res.json())
    .then(details => {
        let output = '';
        details.data.forEach(ele => {
            output +=`
            <div class="user-details">
    <img src="${ele.avatar}" alt="">
    <div class="userDetails">
        <span>Name: ${ele.first_name} ${ele.last_name}</span>
        <span>Email: ${ele.email}</span>
    </div>
</div>
            `
        });
        userList.innerHTML=output;
    })

}