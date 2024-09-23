//offer bar close button

var offerBaropen = document.getElementById("offerbar-open");
var offerClose = document.getElementById("offer-close");

offerClose.onclick = function () {
    offerBaropen.style.display = "none";
};


//side navbar functionality

var navbaractivate = document.getElementById("navbar-activate");
var sidenavbar = document.getElementById("sidenavbar");

navbaractivate.addEventListener("click", function () {
    sidenavbar.style.left = "0";
});

document.getElementById("side-navbar-close").addEventListener("click", function () {
    sidenavbar.style.left = "-50%";
});

//SEARCH

var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productList.length; count++) {
        var productName = productList[count].querySelector("h1").textContent.toUpperCase();

        if (productName.indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
});

