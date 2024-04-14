document.querySelector(".name").innerHTML =
localStorage.getItem("login_user_name");
document.querySelector("#name").innerHTML =
localStorage.getItem("login_user_name");


var cart = document.querySelector("#cart");
cart.addEventListener('click', function(){
  window.location.href ="cartPage.html"
})
 var wishlist = document.querySelector("#wishlist");
wishlist.addEventListener('click', function(){
  window.location.href ="wishlist.html"
})
 var discount = document.querySelector("#discount");
discount.addEventListener('click', function(){
  window.location.href ="discount.html"
})
  
   var logo = document.querySelector(".logo");
logo.addEventListener('click', function(){
  window.location.href ="index.html"
})