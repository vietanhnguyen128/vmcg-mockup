var navbar = document.getElementsByClassName("navbar-container")[0];
var menumain = document.getElementsByClassName("menu-main")[0];
var myLogo = document.getElementById("logo");
var navbarLink = document.getElementsByClassName("navbar-link")

window.onscroll = function() {
  if (window.scrollY >= 50 ) {
    navbar.classList.add("navbar-container--white");
    menumain.classList.add("menu-main--white");

    for (var item of navbarLink) {
      item.classList.add("navbar-link--dark");
    }

    myLogo.src = "../images/VMCGLogoBlack.png";
  } 
  else {
      navbar.classList.remove("navbar-container--white");
      menumain.classList.remove("menu-main--white");

      for (var item of navbarLink) {
        item.classList.remove("navbar-link--dark");
      }

      this.myLogo.src = "../images/VMCGLogoWhiteBrown.png";
  }
};