// index
let btn=document.getElementById("icont");

btn.addEventListener("click",function(){
  window.location.href = "account.html";
});

let serAcc=document.getElementById("mybtn");

serAcc.addEventListener("click",function(){
  window.location.href="customservice.html"
})





// Cart Functionality

function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = document.getElementById("cart-items");
  const count = document.getElementById("cart-count");

  cartIcon.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCart();
    };

    li.appendChild(removeBtn);
    cartList.appendChild(li);
  });

  count.textContent = cart.length;
}

function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
}

window.onload = loadCart;
/////////////////////// User Account Section//////////////////////////////
function myMenuFunction(){
  var i= document.getElementById("navMenu");
    if(i.className==="nav-menu"){
      i.className +="responsive";
    }else{
      i.className = "nav-menu";
  }
}

function data(params) {
  var mail=document.getElementById("Email").value;
  var number=document.getElementById("Mo.number").value;
  var password=document.getElementById("password").value;
  var username=document.getElementById("username").value;

  if(mail==" "||number==" "||password==" "||username==" "){
    alert("All Fields are mendatory")
    return false;
  }else if(number.length<10||number.length>10){
    alert("Please Enter Valid number!")
    return false;
  }else if(isNaN(number)){
    alert("Please Enter Valid number!")
    return false;
  }else{
    return true;
  }
}




