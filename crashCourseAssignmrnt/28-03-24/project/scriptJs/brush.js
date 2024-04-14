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


var brushData = [
    {
      image_url:
        "https://i.ibb.co/y6GRWj2/Blend-Trend-Face-Brush-006-Highlighter.jpg",
      name: "Blend Trend Dual Eyeshadow",
      price: 599,
      star_url: "https://i.ibb.co/4d3n7ZC/star.png",
      rating: 4.6,
      reviews: "(15)",
      product: "shadow",
      count: 1,
    },
    {
      image_url: "https://i.ibb.co/48bJX9K/Blend-Trend-WBG-images-13.jpg",
      name: "Blend Trend Face Brush",
      price: 349,
      star_url: "https://i.ibb.co/4d3n7ZC/star.png",
      rating: 5,
      reviews: "(3)",
      product: "face",
      count: 1,
    },
    {
      image_url: "https://i.ibb.co/ssJSpWF/Blend-Trend-WBG-images-14-1.jpg",
      name: "Blend Trend Eyeshadow Brush",
      price: 399,
      star_url: "https://i.ibb.co/4d3n7ZC/star.png",
      rating: 5,
      reviews: "(1)",
      product: "shadow",
      count: 1,
    },
    {
      image_url:
        "https://i.ibb.co/gZqXwpV/Blend-Trend-Foundation-Brush-051-Flat.jpg",
      name: "Blend Trend Foundation Brush",
      price: 499,
      star_url: "https://i.ibb.co/4d3n7ZC/star.png",
      rating: 5,
      reviews: "(2)",
      product: "found",
      count: 1,
    },
    {
      image_url:
        "https://i.ibb.co/mcw8MXY/Blend-Trend-Face-Brush-001-Blush.jpg",
      name: "Blend Trend Face Brush - 01",
      price: 369,
      star_url: "https://i.ibb.co/4d3n7ZC/star.png",
      rating: 4.8,
      reviews: "(4)",
      product: "shadow",
      count: 1,
    },
    {
      image_url: "https://i.ibb.co/tQtXRVy/Blend-Trend-WBG-images-5-min.jpg",
      name: "Blend Trend Dual Eyeshadow",
      price: 599,
      star_url: "https://i.ibb.co/4d3n7ZC/star.png",
      rating: 4.9,
      reviews: "(50)",
      product: "shadow",
      count: 1,
    },
    {
      image_url: "https://i.ibb.co/f19n9dz/Blend-Trend-WBG-images-3-min.jpg",
      name: "Blend Trend Eyeshadow Brush",
      price: 399,
      star_url: "https://i.ibb.co/4d3n7ZC/star.png",
      rating: 5,
      reviews: "(1)",
      product: "shadow",
      count: 1,
    },
    {
      image_url: "https://i.ibb.co/dW8ZZx1/Blend-Trend-WBG-images-2-min.jpg",
      name: "Blend Trend Eyeshadow Brush",
      price: 399,
      star_url: "https://i.ibb.co/4d3n7ZC/star.png",
      rating: 5,
      reviews: "(1)",
      product: "shadow",
      count: 1,
    },
    {
      image_url: "https://i.ibb.co/ScNpF3S/Blend-Trend-WBG-images-12-min.jpg",
      name: "Blend Trend Dual Face",
      price: 599,
      star_url: "https://i.ibb.co/4d3n7ZC/star.png",
      rating: 4.8,
      reviews: "(19)",
      product: "shadow",
      count: 1,
    },
    {
      image_url:
        "https://i.ibb.co/1nLCyH5/Blend-Trend-Foundation-Brush-052-Kabuki.jpg",
      name: "Blend Trend Foundation Brush",
      price: 399,
      star_url: "https://i.ibb.co/4d3n7ZC/star.png",
      rating: 4.9,
      reviews: "(7)",
      product: "found",
      count: 1,
    },
    {
      image_url:
        "https://i.ibb.co/WGMpyjX/Blend-Trend-Face-Brush-002-Concealer.jpg",
      name: "Blend Trend Face Brush",
      price: 399,
      star_url: "https://i.ibb.co/4d3n7ZC/star.png",
      rating: 5,
      reviews: "(1)",
      product: "shadow",
      count: 1,
    },
    {
      image_url:
        "https://i.ibb.co/B3nZ113/Blend-Trend-Face-Brush-003-Contour.jpg",
      name: "Blend Trend Face Brush",
      price: 399,
      star_url: "https://i.ibb.co/4d3n7ZC/star.png",
      rating: 5,
      reviews: "(2)",
      product: "shadow",
      count: 1,
    },
    {
      image_url:
        "https://i.ibb.co/PhX4jC4/Blend-Trend-Face-Brush-007-Powder.jpg",
      name: "Blend Trend Face Brush",
      price: 399,
      star_url: "https://i.ibb.co/4d3n7ZC/star.png",
      rating: 5,
      reviews: "(5)",
      product: "shadow",
      count: 1,
    },
    {
      image_url:
        "https://i.ibb.co/2g7GZvb/Beginners-Essentials-Combo1-WBGimages.jpg",
      name: "Beginners Essential Combo 1",
      price: 999,
      star_url: "https://i.ibb.co/4d3n7ZC/star.png",
      rating: 5,
      reviews: "(1)",
      product: "combo",
      count: 1,
    },
    {
      image_url:
        "https://i.ibb.co/qkXn8t5/Beginners-Essentials-Combo2-WBGimages.jpg",
      name: "Beginners Essential Combo 1",
      price: 799,
      star_url: "https://i.ibb.co/4d3n7ZC/star.png",
      rating: 4.4,
      reviews: "(2)",
      product: "combo",
      count: 1,
    },
    {
      image_url:
        "https://i.ibb.co/0crjDZv/Beginners-Essentials-Combo3-WBGimages.jpg",
      name: "Face Essential Combo",
      price: 1499,
      star_url: "https://i.ibb.co/4d3n7ZC/star.png",
      rating: 5,
      reviews: "(1)",
      product: "combo",
      count: 1,
    },
    {
      image_url: "https://i.ibb.co/n6NtFBj/1-1.jpg",
      name: "Eyes & FACE Combo",
      price: 649,
      star_url: "https://i.ibb.co/4d3n7ZC/star.png",
      rating: 5,
      reviews: "(1)",
      product: "combo",
      count: 1,
    },
  ];

  localStorage.setItem("brushData", JSON.stringify(brushData));

  var brushData = JSON.parse(localStorage.getItem("brushData"));
  var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
  var wishlistArr = JSON.parse(localStorage.getItem("listItems")) || [];

  displayData(brushData);

  function filter() {
    var selected = document.querySelector("#filter").value;
    var filterList = brushData.filter(function (elem) {
      return elem.product == selected;
    });
    displayData(filterList);
    document.querySelector("#displayitem").textContent = `Brush - ${filterList.length} items`;
  }

  function handlerPriceSort() {
    var selected = document.querySelector("#priceSort").value;
    if (selected == "high") {
      brushData.sort(function (a, b) {
        return b.price - a.price;
      });
    }
    if (selected == "low") {
      brushData.sort(function (a, b) {
        return a.price - b.price;
      });
    }
    if (selected == "rel") {
      brushData.sort(function (a, b) {
        return b.rating - a.rating;
      });
    }
    displayData(brushData);
  }
  document.querySelector("#displayitem").textContent = `Brush - ${brushData.length} items`;

  function displayData(brushData) {
    document.querySelector("#container-prod").innerHTML = "";
    brushData.map(function (elem) {
      var div = document.createElement("div");
      div.setAttribute("id", "main");

      var img = document.createElement("img");
      img.setAttribute("src", elem.image_url);
      img.setAttribute("id", "image");

      var head = document.createElement("p");
      head.setAttribute("id", "textCenter");
      head.textContent = elem.name;

      var p = document.createElement("p");
      p.textContent = `Rs. ${elem.price} `;
      p.setAttribute("id", "textCenter");

      var div1 = document.createElement("div");
      div1.setAttribute("id", "flex");

      var img1 = document.createElement("img");
      img1.setAttribute("src", elem.star_url);
      img1.setAttribute("id", "star");

      var p1 = document.createElement("p");
      p1.textContent = elem.rating;
      head.setAttribute("id", "textCenter");

      var p2 = document.createElement("p");
      p2.textContent = elem.reviews;
      head.setAttribute("id", "textCenter");

      var div2 = document.createElement("div");
      div2.setAttribute("id", "flex1");

      var btn = document.createElement("button");
      btn.setAttribute("id", "btn");
      btn.innerHTML = "&#129293";
      btn.addEventListener("click", function () {
        wishList(elem);
      });

      var btn1 = document.createElement("button");
      btn1.textContent = "Add to cart";
      btn1.addEventListener("click", function () {
        addToCart(elem);
      });
      btn1.setAttribute("id", "btn1");
      div2.append(btn, btn1);
      div1.append(img1, p1, p2);
      div.append(img, head, p, div1, div2);
      document.querySelector("#container-prod").append(div);
    });
  }

  function addToCart(elem) {
    console.log(elem);
    cartArr.push(elem);
    localStorage.setItem("cartItems", JSON.stringify(cartArr));
    alert("Item added to cart");
  }

  function wishList(elem) {
    wishlistArr.push(elem);
    localStorage.setItem("listItems", JSON.stringify(wishlistArr));
    alert("Item added to wish list");
  }