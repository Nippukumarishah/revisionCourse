
   
    var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

  
    var cartArr = JSON.parse(localStorage.getItem("cartItems"))||[];
    console.log("Cart: ",cartArr);
     displayCart(cartArr);



    function displayCart(cartArr){
        document.querySelector(".cart-product").innerHTML="";
        cartArr.map(function (data,index){
        var divCartlft = document.createElement("div");
        divCartlft.id="divCartlft"
        //Image Creation
        var image = document.createElement("img");
        image.setAttribute ("src",data.image_url)

        //Name Creation
        var name = document.createElement("p");
        name.id="name";
        name.textContent = data.name;

        //Image & Name in one div;
        var divImgName = document.createElement("div");
        divImgName.id="divImgName"
        divImgName.append(image,name)

        //Price Creation

        var price = document.createElement("p");
        price.textContent = data.price;
        

        //Increment/Decrement Added Product Creation
        var divBox = document.createElement("div");
        divBox.id = "divBox"
        var divRmv = document.createElement("div");
        divRmv.id="divRmv";
        divRmv.innerHTML='<i class="fas fa-trash"></i>';
        var divDec = document.createElement("div");
        divDec.id="divDec";
        divDec.innerHTML='<i class="fas fa-minus-circle"></i>'
        var divQty = document.createElement("div");
        divQty.id="divQty";
        divQty.textContent= data.count;
        var divInc = document.createElement("div");
        divInc.id="divInc";
        divInc.innerHTML='<i class="fas fa-plus-circle"></i>'

        var divPriceBox = document.createElement("div");
        divPriceBox.id="divPriceBox";
    
        //Append to divBox
        divBox.append(divRmv,divDec,divQty,divInc,divPriceBox);
        
        var divQtyP = document.createElement("div");
        divQtyP.id ="divQtyP";
        divQtyP.textContent=data.count;

        var divMul = document.createElement("div");
        divMul.id ="divMul";
        divMul.textContent="x";

        var divPrice = document.createElement("div");
        divPrice.id ="divPrice";
        divPrice.textContent=data.price;

        var divEqual = document.createElement("div");
        divEqual.id ="=";
        divEqual.textContent="=";

        var divPTotal = document.createElement("div");
        divPTotal.id ="divPTotal";
        divPTotal.textContent = data.price * data.count;

        //Append to divPriceBox
        divPriceBox.append(divQtyP,divMul,divPrice,divEqual,divPTotal)
       

        //Append to divCartlft
        divCartlft.append(divImgName,divBox);
        document.querySelector(".cart-product").append(divCartlft);

        
        
        divRmv.addEventListener("click",function(){
            removeItem(index);
        });

        //Increment function Call 
        divInc.addEventListener("click",function(){
            incrementProduct(index);
        });

        //Decreement function Call 
        divDec.addEventListener("click",function(){
            decrementProduct(index);
        });
    });
}

    
     //Total calculate
     var total = cartArr.reduce(function(acc,cv){
        return (acc + cv.price*cv.count);
    },0);
    localStorage.setItem("total",total);

    console.log("Total: ",total);

    document.querySelector(".smry-cart-total").textContent=`Cart Total : ${total} `
    
    //Coupon Apply
    document.querySelector("#cart-total").textContent=total;
    localStorage.setItem("discountPrice",0);

    var discPrice = JSON.parse(localStorage.getItem("discountPrice"));

    

    //Check didcount =0
    if(discPrice==0){
        document.querySelector("#disc-applied").textContent=0;
        document.querySelector("#pay-amount").textContent=total;
    }

    document.querySelector("form").addEventListener("submit", discount);
     //Apply Discount
     function discount(event){
        event.preventDefault(); 
        var coupon = document.querySelector("#coupon").value;
        if(coupon=='masai30'){
            document.querySelector(".invalid-coupon").textContent="";
            document.querySelector(".valid-coupon").textContent="Coupon Applied Successfully";
            var discountPrice = total * 0.7;

            localStorage.setItem("discountPrice",discountPrice);
            document.querySelector("#disc-applied").textContent=total*0.3;
            document.querySelector("#pay-amount").textContent=discountPrice;

            console.log("discount:",discountPrice);
        }
        else{
            // localStorage.setItem("discountPrice",0);
            document.querySelector(".valid-coupon").textContent="";
            document.querySelector(".invalid-coupon").textContent="Invalid Coupon";
            
        }
        
       
    }

   

    //Redirect to payment page
    document.getElementById("checkOut").addEventListener("click",checkOut);
    function checkOut(event){
        total = JSON.parse(localStorage.getItem("total"));
        // window.location.href = "payment.html"
        if(total!=0){
            window.location.href = "payment.html"
        }
        else{
            alert("Cart Empty");
        }
        
    }
   


 //Remove From Cart
 function removeItem(index){
    event.preventDefault();
         console.log(index);

         total = JSON.parse(localStorage.getItem("total"));
         var newTotal=total-cartArr[index].price;
         localStorage.setItem("total",newTotal);
        
         //If cart become empty then below code is executed
         if(newTotal==0){
            document.querySelector("#cart-container").remove();
            var emptyCart = document.createElement("div");
            emptyCart.id="emptyCart";
            emptyCart.innerHTML= "<h2>Hey! It's lonely here Your bag seems to have no company.Why not add some products</h2>";
           

            var emptyBtn = document.createElement("div");
            emptyBtn.id="emptyBtn";
            emptyBtn.innerHTML="<h3>HomePage</h3>"
            // emptyBtn.innerHTML="<button>Home Page</button>";

            document.querySelector(".icon-div").append(emptyCart,emptyBtn);

            emptyBtn.addEventListener("click",function(){
                emptyBtnClick(index);
            });

            function emptyBtnClick(event){
                window.location.href = "payment.html"
            }

    
         
         //When item is removed from cart then Discount Applied vis changed
         var coupon = document.querySelector("#coupon").value;
        if(coupon=='masai30'){
        var newCount= --cartArr[index].count;
        console.log(newCount)
        localStorage.setItem("cartItems",JSON.stringify(cartArr));

    



            var disRemove = total*.3 - cartArr[index].price * 0.3;
            console.log("dis ",disRemove);
            document.querySelector("#disc-applied").textContent=disRemove;

            
            
        }
        else{
            localStorage.setItem("discountPrice",0);
            document.querySelector("#total").textContent=`Cart Total : ${newTotal} `
             document.querySelector("#cart-total").textContent=newTotal;
            document.querySelector("#pay-amount").textContent=newTotal;
        }
         //new change
         
        

         cartArr.splice(index,1);
        
         localStorage.setItem("cartItems",JSON.stringify(cartArr));
       
         console.log(cartArr)
         displayCart(cartArr);
         
         console.log(newTotal);
         
         document.querySelector("#total").textContent=`Cart Total : ${newTotal} `
         document.querySelector("#cart-total").textContent=newTotal;
         document.querySelector("#pay-amount").textContent=newTotal;
       
     }

     //Increment Product
     function incrementProduct(index){
        event.preventDefault();

        var newCount= ++cartArr[index].count;
       
        var x = document.querySelectorAll("#divQty");
        x[index].textContent=newCount;

       //Update Quantiity to on when incremented(On divPriceBox)
        var y = document.querySelectorAll("#divQtyP");
        y[index].textContent=newCount;

        
        //Uodate Total Price when increment Product
        var z = document.querySelectorAll("#divPTotal");
        z[index].textContent = cartArr[index].price * cartArr[index].count

        /////////
        console.log(newCount)
        localStorage.setItem("cartItems",JSON.stringify(cartArr));

        
        

        //DDiscount Applied Update after product Increment
        var disAdd = total*.3 + cartArr[index].price * 0.3;
        console.log("dis ",disAdd);
        document.querySelector("#disc-applied").textContent=disAdd;
        //Update Card Total
        total +=  cartArr[index].price;
        console.log("Total after inc. ",total)
        localStorage.setItem("total",total);
        document.querySelector("#total").textContent=`Cart Total : ${total} `;
        document.querySelector("#cart-total").textContent=total;
        document.querySelector("#pay-amount").textContent=total;

        
     
        

     }
     
     //Decrement Product
     function decrementProduct(index){
        index.preventDefault();
        count=cartArr[index].count;
        if(count==1){
            removeItem(index);
        }
        else{
            var newCount=--cartArr[index].count;
            localStorage.setItem("cartItems",JSON.stringify(cartArr));

             //Update Quantiity when incremented
            var x = document.querySelectorAll("#divQty");
            x[index].textContent=newCount;
            console.log(newCount)

            //Update Quantiity to on when Decrement(On divPriceBox)
            var y = document.querySelectorAll("#divQtyP");
            y[index].textContent=newCount;

    
            //Uodate Total Price when Decrement Product
            var z = document.querySelectorAll("#divPTotal");
            z[index].textContent = cartArr[index].price * cartArr[index].count
            //DDiscount Applied Update after product decrement
            var disRemove = total*.3 - cartArr[index].price * 0.3;
            console.log("dis ",disRemove);
            document.querySelector("#disc-applied").textContent=disRemove;
            //Update Card Total
            total -=  cartArr[index].price;
            console.log("Total after dec. ",total)
            localStorage.setItem("total",total);
            document.querySelector("#total").textContent=`Cart Total : ${total} `;
            document.querySelector("#cart-total").textContent=total;
            document.querySelector("#pay-amount").textContent=total;

            
        
        }
        
     }

      document.querySelector(".name").innerHTML= localStorage.getItem("login_user_name");
    }