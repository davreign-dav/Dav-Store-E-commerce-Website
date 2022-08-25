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
var proimg = document.getElementById("proimg");
var smallimg = document.getElementsByClassName("small-img");
smallimg[0].onclick = function () {
    proimg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
    proimg.src = smallimg[1].src;
}
smallimg[2].onclick = function () {
    proimg.src = smallimg[2].src;
}
smallimg[3].onclick = function () {
    proimg.src = smallimg[3].src;
}