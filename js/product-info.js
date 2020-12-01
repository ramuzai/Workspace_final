var product = {};

function showImagesGallery(array){

    let htmlContentToAppend1 = "";
    let htmlContentToAppend2 = "";

    htmlContentToAppend1 += `<li data-target="#my-slider" data-slide-to="0" class="active"></li>`
    for(let i = 1; i < array.length; i++){

        htmlContentToAppend1 += `
        <li data-target="#my-slider" data-slide-to="` + i +`"></li>
        `   
    }

    htmlContentToAppend2 += `
    <div class="carousel-item active">
    <img src=` + array[0] + ` class="d-block w-100"/>
    </div>
    `
    for(let i = 1; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend2 += `
        <div class="carousel-item">
        <img src=` + imageSrc + ` class="d-block w-100" />
        </div>
        `

        
    }
    document.getElementById("productImagesGallery1").innerHTML = htmlContentToAppend1;
    document.getElementById("productImagesGallery2").innerHTML = htmlContentToAppend2;
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return false;
}

var productNameHTML  = document.getElementById("productName");
productNameHTML.innerHTML = getQueryVariable("name");

function showComments(){

    let htmlContentToAppend = "";
    for(let i = 0; i < comments.length; i++){
        let comm = comments[i];

        if (comm.score == 0){
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">` + comm.user + `</h4>
                            <small class="text-muted">` + comm.dateTime + `</small>
                        </div>
                        <p class="mb-1">` + comm.description + `</p>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
            </div>`
        } else if (comm.score == 1){
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">` + comm.user + `</h4>
                            <small class="text-muted">` + comm.dateTime + `</small>
                        </div>
                        <p class="mb-1">` + comm.description + `</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
            </div>`
        } else if (comm.score == 2){
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">` + comm.user + `</h4>
                            <small class="text-muted">` + comm.dateTime + `</small>
                        </div>
                        <p class="mb-1">` + comm.description + `</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
            </div>`
        } else if (comm.score == 3){
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">` + comm.user + `</h4>
                            <small class="text-muted">` + comm.dateTime + `</small>
                        </div>
                        <p class="mb-1">` + comm.description + `</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
            </div>`
        } else if (comm.score == 4){ 
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">` + comm.user + `</h4>
                            <small class="text-muted">` + comm.dateTime + `</small>
                        </div>
                        <p class="mb-1">` + comm.description + `</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
            </div>`
        } else if (comm.score == 5){
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">` + comm.user + `</h4>
                            <small class="text-muted">` + comm.dateTime + `</small>
                        </div>
                        <p class="mb-1">` + comm.description + `</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </div>
                </div>
            </div>`
        }
    }    
    document.getElementById("comm-list-container").innerHTML = htmlContentToAppend;
}

function newComments(magicz){

    let htmlContentToAppend = "";
    let comm = magicz;

    if (comm.score == 0){
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">` + comm.user + `</h4>
                            <small class="text-muted">` + comm.dateTime + `</small>
                        </div>
                        <p class="mb-1">` + comm.description + `</p>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
            </div>`
        } else if (comm.score == 1){
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">` + comm.user + `</h4>
                            <small class="text-muted">` + comm.dateTime + `</small>
                        </div>
                        <p class="mb-1">` + comm.description + `</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
            </div>`
        } else if (comm.score == 2){
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">` + comm.user + `</h4>
                            <small class="text-muted">` + comm.dateTime + `</small>
                        </div>
                        <p class="mb-1">` + comm.description + `</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
            </div>`
        } else if (comm.score == 3){
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">` + comm.user + `</h4>
                            <small class="text-muted">` + comm.dateTime + `</small>
                        </div>
                        <p class="mb-1">` + comm.description + `</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
            </div>`
        } else if (comm.score == 4){ 
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">` + comm.user + `</h4>
                            <small class="text-muted">` + comm.dateTime + `</small>
                        </div>
                        <p class="mb-1">` + comm.description + `</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
            </div>`
        } else if (comm.score == 5){
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">` + comm.user + `</h4>
                            <small class="text-muted">` + comm.dateTime + `</small>
                        </div>
                        <p class="mb-1">` + comm.description + `</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </div>
                </div>
            </div>`
        }   
        document.getElementById("comm-list-container").innerHTML += htmlContentToAppend;
};

function showRelatedProducts() {

    let htmlContentToAppend = "";
    for(let i = 0; i < relProduct.length; i++){
        let products = relProduct[i];
        let relState = product.relatedProducts;
        if (relState.includes(i)) {

            htmlContentToAppend += `
            <div class="col-md-4">
              <a href="product-info.html?name=` + products.name + `" class="card mb-4 shadow-sm custom-card">
                <img class="bd-placeholder-img card-img-top"  src="` + products.imgSrc + `">
                <h3 class="m-3">` + products.name + `</h3>
                <div class="card-body">
                  <p class="card-text">Precio: $ ` + products.cost + `</p>
                </div>
              </a>
            </div>`
        }     
    }
    document.getElementById("related-list-container").innerHTML = htmlContentToAppend;
}

function defaultValue() {
    var z = localStorage.getItem("user");
    document.getElementById("userName").value = z;
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productDescriptionHTML = document.getElementById("productDescription");
            let productCountHTML = document.getElementById("productCount");
            let productPriceHTML = document.getElementById("productPrice");

            productDescriptionHTML.innerHTML = product.description;
            productCountHTML.innerHTML = product.soldCount;
            productPriceHTML.innerHTML = "$ " + product.cost;

            showImagesGallery(product.images);

            getJSONData(PRODUCTS_URL).then(function(resultObj2){
                if (resultObj2.status === "ok")
                {
                    relProduct = resultObj2.data;
                    showRelatedProducts();
                }
            })
        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            comments = resultObj.data;
            showComments(comments);
        }
    });

    defaultValue();
});

document.getElementById("crik").addEventListener("click", function(e){
    
    function starChecker() {
        for (let i = 0; i < document.getElementsByName("starValue").length; i++) {
            if (document.getElementsByName("starValue")[i].checked){
                return document.getElementsByName("starValue")[i].value
            }
        }
    }

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    let newComment = [{
        "score": "",
        "description": "",
        "user":  "",
        "dateTime": ""
    }];

    newComment.score = starChecker() || 0;
    newComment.description = document.getElementById("userComment").value;
    newComment.user = document.getElementById("userName").value;
    newComment.dateTime = dateTime;

    console.log(newComment);

    newComments(newComment);
});

