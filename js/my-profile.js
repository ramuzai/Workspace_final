const imgPlink = "https://careerrealtalk.com/wp-content/uploads/2017/09/profile-pic.jpeg";
var creationDate = new Date();
var currentMonth = String(creationDate.getMonth() + 1);
var imgInfo = 
{
    "link": imgPlink,
    "date": currentMonth
};
var imgPcanvas = document.getElementById("picP");

var userNameP = document.getElementById("nameP");
var userAgeP = document.getElementById("ageP");
var userMailP = document.getElementById("mailP");
var userTelP = document.getElementById("telP");

var newUserNameP = document.getElementById("namePmodal");
var newUserAgeP = document.getElementById("agePmodal");
var newUserMailP = document.getElementById("mailPmodal");
var newUserTelP = document.getElementById("telPmodal");

var datosPinfo = 
{
    "nombre": "",
    "edad": "",
    "mail": "",
    "tel": ""
};

function setValuesP() {
    if (!localStorage.getItem("datosP")) {
        userNameP.innerHTML = " ";
        userAgeP.innerHTML = " ";
        userMailP.innerHTML = " ";
        userTelP.innerHTML = " ";
    } else if (localStorage.getItem("datosP")) {
        userNameP.innerHTML = JSON.parse(localStorage.getItem("datosP")).nombre;
        userAgeP.innerHTML = JSON.parse(localStorage.getItem("datosP")).edad;
        userMailP.innerHTML = JSON.parse(localStorage.getItem("datosP")).mail;
        userTelP.innerHTML = JSON.parse(localStorage.getItem("datosP")).tel;
    }
}

document.addEventListener("DOMContentLoaded", function (e) {

    if (!localStorage.getItem("imgP")) {
        localStorage.setItem("imgP", JSON.stringify(imgInfo));
    }

    var picPdata = JSON.parse(localStorage.getItem("imgP"));
    
    if (picPdata.date === currentMonth) {
        imgPcanvas.src = picPdata.link;
    } else if (picPdata.date != currentMonth) {
        localStorage.removeItem("imgP");
        imgPcanvas.src = "img/car1.jpg";
    }
    
    setValuesP();

    document.getElementById("actPdatos").addEventListener("click", function (e) {
        localStorage.removeItem("datosP");
    })

    document.getElementById("confirmModalP").addEventListener("click", function (e) {
        datosPinfo.nombre = newUserNameP.value;
        datosPinfo.edad = newUserAgeP.value;
        datosPinfo.mail = newUserMailP.value;
        datosPinfo.tel = newUserTelP.value;
        localStorage.setItem("datosP", JSON.stringify(datosPinfo));
        setValuesP();
    })
});
