const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
};

if (!localStorage.getItem("logged") && !window.location.href.endsWith("login.html")) {
      window.location = "login.html"
    };

var username = document.getElementById('userBox');
var pw = document.getElementById('elPassword');

function store() {
    localStorage.setItem('user', username.value);
    localStorage.setItem('pw', pw.value);
}

function myFunction() {
  var x = localStorage.getItem("user");
  document.getElementById("arriba").innerHTML = x + `<img id="comp" src="img/arrow.png">`;
}

document.addEventListener("submit", function(e){
  store();
});

function showFunction() {
  var z = document.getElementById("dropList");
  if (z.style.display === 'block') {
    z.style.display = 'none';
  } else {
    z.style.display = 'block';
  }
}

function bye() {
  localStorage.removeItem("logged");
  localStorage.removeItem("pw");
  localStorage.removeItem("user");
  localStorage.removeItem("datosP");
  localStorage.removeItem("imgP");
  window.location = "./login.html";
}

document.addEventListener("DOMContentLoaded", function(e){
  document.getElementById("coso").innerHTML +=
  `<ul>
    <a class="py-2 d-none d-md-inline-block" id="arriba" onclick="showFunction()"></a>
      <ul id="dropList">
        <li><a class="py-2 d-none d-md-inline-block" href="my-profile.html">Perfil</a></li>
        <li><a class="py-2 d-none d-md-inline-block" href="cart.html">Mi carrito</a></li>
        <li><button id="abajo" onclick="bye()">Cierre de Sesión</button></li>
      </ul>
  </ul>`;
  myFunction();
});

