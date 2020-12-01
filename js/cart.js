let dolar = 40;
let productCost = 0;
let productCount = 0;
let deliveryPercentage = 0.15;
let MONEY_SYMBOL = "$ ";
let DOLLAR_SYMBOL = "USD ";
let PESO_SYMBOL = "UYU ";

function showCartProductList(cartProducts){
    let htmlContentToAppend = "";
    for(let i = 0; i < cartProducts.length; i++){
        let products = cartProducts[i];

        if (products.currency === "USD"){
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action" id="product` + i + `">
                <div class="row">
                    <div class="col-3">
                        <a href="product-info.html?name=` + products.name + `" class="list-group-item list-group-item-action prodbr">
                            <img src="` + products.src + `" alt="` + products.name + `" class="img-thumbnail">
                        </a>
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">` + products.name + `</h4>
                            <small class="text-muted" id="subT` + i + `"></small>
                        </div>
                        <p class="mb-1">Costo: UYU ` + (products.unitCost*dolar) + `</p>
                        <p class="mb-1">Nro: <input class="shorty" id="countT` + i + `" type="number" value="`+ products.count +`"
                        min="1" max="99"></input></p>
                        <button type="button" class="close btn-mine" style="background-color: red;" aria-label="Close" onclick="deleto(` + i + `)">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </div>
            `
        } else {
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action" id="product` + i + `">
            <div class="row">
                <div class="col-3">
                    <a href="product-info.html?name=` + products.name + `" class="list-group-item list-group-item-action prodbr">
                        <img src="` + products.src + `" alt="` + products.name + `" class="img-thumbnail">
                    </a>
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">` + products.name + `</h4>
                        <small class="text-muted" id="subT` + i + `"></small>
                    </div>
                    <p class="mb-1">Costo: UYU ` + products.unitCost +`</p>
                    <p class="mb-1">Nro: <input class="shorty" id="countT` + i + `" type="number" value="`+ products.count +`"
                    min="1" max="99"></input></p>
                    <button type="button" class="close btn-mine" style="background-color: red;" aria-label="Close" onclick="deleto(` + i + `)">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        </div>
        `
        }     
    }

    document.getElementById("prod-list-container-cart").innerHTML = htmlContentToAppend;
}

function deleto(num) {
    for(let i = 0; i < cartProducts.length; i++) {
        if (num === i) {
            document.getElementById("countT" + i).value = 0;
            document.getElementById('product' + i).style.display = "none";
            calcOne(cartProducts);
            calcTwo(cartProducts);
            updateTotalCostsCart();
        }
    }
}

function calcOne(cartProducts) {
    for(let i = 0; i < cartProducts.length; i++){

        if (cartProducts[i].currency === "USD") {
            document.getElementById("subT" + [i]).innerHTML = "SubTotal: UYU " + (document.getElementById("countT" + [i]).value*(cartProducts[i].unitCost*dolar))
        } else {
            document.getElementById("subT" + [i]).innerHTML = "SubTotal: UYU " + (document.getElementById("countT" + [i]).value*cartProducts[i].unitCost)
        }
        
    }
}

function calcTwo(cartProducts) {
    var sum = 0;
    
    for(var i=0; i < cartProducts.length; i++){

        if (cartProducts[i].currency === "USD") {
            sum += parseInt((document.getElementById("countT" + [i]).value*(cartProducts[i].unitCost*dolar)));
        } else {
            sum += parseInt((document.getElementById("countT" + [i]).value*cartProducts[i].unitCost));
        }
    }
    productCost = sum;
}

function updateTotalCostsCart(){
    let unitProductCostHTML = document.getElementById("totalBox");
    let deliveryCostHTML = document.getElementById("deliveryBox");
    let totalCostHTML = document.getElementById("totalCostBox");

    let unitCostToShow = PESO_SYMBOL + productCost;
    let deliveryToShow = PESO_SYMBOL + (Math.round(productCost * deliveryPercentage * 100) / 100);
    let totalCostToShow = PESO_SYMBOL+ (productCost+(Math.round(productCost * deliveryPercentage * 100) / 100));

    unitProductCostHTML.innerHTML = unitCostToShow;
    deliveryCostHTML.innerHTML = deliveryToShow;
    totalCostHTML.innerHTML = totalCostToShow;
}

function cleanFields() {

    let tarjNumberInput = document.getElementById("tarjNumber");
    let tarjSecuInput = document.getElementById("tarjSecu");
    let tarjExpInput = document.getElementById("tarjExp");
    let accNumberInput = document.getElementById("accNumber");

    tarjNumberInput.value = "";
    tarjSecuInput.value = "";
    tarjExpInput.value = "";
    accNumberInput.value = "";
}

function setPayMethod() {
    let cond1 = document.getElementById("tarjRadio");
    let cond2 = document.getElementById("transfRadio");
    let payMethod = document.getElementById("cartPay");
    let payInputText = document.getElementById("cartPayText");

    if (cond1.checked) {
        payMethod.innerHTML = "Tarjeta de credito";
        payInputText.style.display = "none";
    } else if (cond2.checked) {
        payMethod.innerHTML = "Transferencia bancaria";
        payInputText.style.display = "none";
    }
}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData("https://japdevdep.github.io/ecommerce-api/cart/654.json").then(function(resultObj){
        if (resultObj.status === "ok"){
            cartProducts = resultObj.data.articles;

            showCartProductList(cartProducts);
            calcOne(cartProducts);
            calcTwo(cartProducts);
            updateTotalCostsCart();
        }
    });

    document.getElementById("prod-list-container-cart").addEventListener("change", function(){
        calcOne(cartProducts);
        calcTwo(cartProducts);
        updateTotalCostsCart();
    });

    document.getElementById("premium2radio").addEventListener("change", function(){
        deliveryPercentage = 0.15;
        updateTotalCostsCart();
    });
    
    document.getElementById("expressradio").addEventListener("change", function(){
        deliveryPercentage = 0.07;
        updateTotalCostsCart();
    });

    document.getElementById("standard2radio").addEventListener("change", function(){
        deliveryPercentage = 0.05;
        updateTotalCostsCart();
    });

    var cartForm = document.getElementById("cart-info");

    cartForm.addEventListener("submit", function(e){

        let streetNameInput = document.getElementById("streetName");
        let sNameRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü. ]{1,32}$/;
        let sNameError = document.getElementById("sNameFeedback");
        let streetNumberInput = document.getElementById("streetNumber");
        let sNumberRegex = /^\d{3,5}$/
        let sNumberError = document.getElementById("sNumberFeedback");
        let street2NameInput = document.getElementById("street2Name");
        let s2NameError = document.getElementById("s2NameFeedback");
        let payInput = document.getElementById("cartPay");
        let payInputText = document.getElementById("cartPayText");
        let infoMissing = false;

        streetNameInput.classList.remove('is-invalid');
        streetNumberInput.classList.remove('is-invalid');
        street2NameInput.classList.remove('is-invalid');
        sNameError.innerHTML = "La Calle es requerida.";
        sNumberError.innerHTML =  "El Numero es requerido.";
        s2NameError.innerHTML = "La Esquina es requerida.";

        if (streetNameInput.value === "") {
            streetNameInput.classList.add('is-invalid');
            infoMissing = true;
        } else if (!sNameRegex.test(streetNameInput.value)) {
            sNameError.innerHTML = "Ingrese una Calle valida.";
            streetNameInput.classList.add('is-invalid');
            infoMissing = true;
        }
        
        if (streetNumberInput.value <= 0) {
            streetNumberInput.classList.add('is-invalid');
            infoMissing = true;
        } else if (!sNumberRegex.test(streetNumberInput.value)) {
            sNumberError.innerHTML =  "Ingrese un Numero valido.";
            streetNumberInput.classList.add('is-invalid');
            infoMissing = true;
        }

        if (street2NameInput.value === "") {
            street2NameInput.classList.add('is-invalid');
            infoMissing = true;
        } else if (!sNameRegex.test(street2NameInput.value)) {
            s2NameError.innerHTML =  "Ingrese una Calle valida.";
            street2NameInput.classList.add('is-invalid');
            infoMissing = true;
        }

        if (payInput.innerHTML === "No ha seleccionado")
        {
            payInputText.style.display = "block";
            infoMissing = true;
        }

        if(!infoMissing)
        {
            document.getElementById("alertResultCart").classList.add("show");
            document.getElementById("alertResultCart").classList.add('alert-success');
            e.preventDefault;
        }

        if (e.preventDefault) e.preventDefault();
            return false;
    });

    var cartModal = document.getElementById("paymModal");


    cartModal.addEventListener("change", function(e){
  
    let cond1 = document.getElementById("tarjRadio");
    let cond2 = document.getElementById("transfRadio");
    let tarjNumberInput = document.getElementById("tarjNumber");
    let tarjSecuInput = document.getElementById("tarjSecu");
    let tarjExpInput = document.getElementById("tarjExp");
    let accNumberInput = document.getElementById("accNumber");

    if (cond1.checked) {
        accNumberInput.disabled = true;
        accNumberInput.value = "";
        tarjNumberInput.disabled = false;
        tarjSecuInput.disabled = false;
        tarjExpInput.disabled = false;
        e.preventDefault();

    } else if (cond2.checked) {
        tarjNumberInput.disabled = true;
        tarjSecuInput.disabled = true;
        tarjExpInput.disabled = true;
        tarjNumberInput.value = "";
        tarjSecuInput.value = "";
        tarjExpInput.value = "";
        accNumberInput.disabled = false;
        e.preventDefault();
    }

    });

    var confButton = document.getElementById("confirmModal");

    confButton.addEventListener("click", function(e){

        let cond1 = document.getElementById("tarjRadio");
        let cond2 = document.getElementById("transfRadio");
        let tarjNumberInput = document.getElementById("tarjNumber");
        let tNumberRegex = /^((\d{4}[- ]){3}\d{4}|\d{13,18})$/;
        let tNumberError = document.getElementById("tarjNumberFeedback");
        let tarjSecuInput = document.getElementById("tarjSecu");
        let tSecuRegex = /^\d{3,4}$/;
        let tSecuError = document.getElementById("tarjSecuFeedback");
        let tarjExpInput = document.getElementById("tarjExp");
        let tExpRegex =  /^((0[1-9])|(1[0-2]))\/(\d{2})$/;
        let tExpError =  document.getElementById("tarjExpFeedback");
        let accNumberInput = document.getElementById("accNumber");
        let aNumberRegex = /^\d{10,18}$/;
        let aNumberError = document.getElementById("accNumberFeedback");
        let infoMissing = false;

        tarjNumberInput.classList.remove('is-invalid');
        tarjSecuInput.classList.remove('is-invalid');
        tarjExpInput.classList.remove('is-invalid');
        accNumberInput.classList.remove('is-invalid');
        confButton.setAttribute("data-dismiss", "");

        if (cond1.checked) {
            tNumberError.innerHTML = "El Número de tarjeta es requerido.";
            tSecuError.innerHTML = "El codigo de seguridad es requerido.";
            tExpError.innerHTML = "El vencimiento es requerido.";
            
            if (tarjNumberInput.value === "") {
                tarjNumberInput.classList.add('is-invalid');
                infoMissing = true;
            } else if (!tNumberRegex.test(tarjNumberInput.value)) {
                tNumberError.innerHTML = "Ingrese un Numero de tarjeta valido.";
                tarjNumberInput.classList.add('is-invalid');
                infoMissing = true;
            }

            if (tarjSecuInput.value <=0) {
                tarjSecuInput.classList.add('is-invalid');
                infoMissing = true;
            } else if (!tSecuRegex.test(tarjSecuInput.value)) {
                tSecuError.innerHTML = "Ingrese un Codigo de seguridad valido.";
                tarjSecuInput.classList.add('is-invalid');
                infoMissing = true;
            }

            if (tarjExpInput.value === "") {
                tarjExpInput.classList.add('is-invalid');
                infoMissing = true;
            } else if (!tExpRegex.test(tarjExpInput.value)) {
                tExpError.innerHTML = "Ingrese una Fecha de vencimiento valida.";
                tarjExpInput.classList.add('is-invalid');
                infoMissing = true;
            }
            
        } else if (cond2.checked) {
            aNumberError.innerHTML = "El Número de cuenta es requerido.";

            if (accNumberInput.value === "") {
                accNumberInput.classList.add('is-invalid');
                infoMissing = true;
            } else if (!aNumberRegex.test(accNumberInput.value)) {
                aNumberError.innerHTML = "Ingrese un Numero de cuenta valido.";
                accNumberInput.classList.add('is-invalid');
                infoMissing = true;
            }
    
        }
        
        if(!infoMissing)
        {
            confButton.setAttribute("data-dismiss", "modal");
            cleanFields();
            setPayMethod();
        }

        if (e.preventDefault) e.preventDefault();
            return false;
    });
});
