
var menuitems = document.getElementById("menuitems");
menuitems.style.maxHeight = "0px";
function menutoggle() {
    if (menuitems.style.maxHeight == "0px") {
        menuitems.style.maxHeight = "200px";
    }
    else {
        menuitems.style.maxHeight = "0px";
    }
}
var loginForm = document.getElementById("loginform");
var regForm = document.getElementById("regform");
var Indicator = document.getElementById("Indicator");
function register() {
    regForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(140px)";
}
function login() {
    regForm.style.transform = "translateX(350px)";
    loginForm.style.transform = "translateX(350px)";
    Indicator.style.transform = "translateX(0px)";
}