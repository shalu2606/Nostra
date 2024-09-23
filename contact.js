
//side navbar functionality

var navbaractivate = document.getElementById("navbar-activate");
var sidenavbar = document.getElementById("sidenavbar");

navbaractivate.addEventListener("click", function () {
    sidenavbar.style.left = "0";
});

document.getElementById("side-navbar-close").addEventListener("click", function () {
    sidenavbar.style.left = "-50%";
});