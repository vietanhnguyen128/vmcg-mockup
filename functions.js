var myLogo = document.getElementById("logo")

window.onscroll = function() {
  if (window.scrollY >= 50 ) {
    myLogo.src = "../images/VMCGLogoBlack.png";


  } 
  else {
    myLogo.src = "../images/VMCGLogoWhiteBrown.png";

    
  }
};