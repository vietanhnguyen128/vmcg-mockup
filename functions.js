var myLogo = document.getElementById("logo")
var wrapper =  document.getElementsByClassName("wrapper")[0];
var menu = document.getElementsByClassName("menu-main")[0];

window.onscroll = function() {
  if (window.scrollY >= 50 ) {
    myLogo.src = "../images/VMCGLogoBlack.png";

    wrapper.classList.add("white");
    menu.classList.add("white");
  } 
  else {
    myLogo.src = "../images/VMCGLogoWhiteBrown.png";

    wrapper.classList.remove("white");
    menu.classList.remove("white");
  }
};