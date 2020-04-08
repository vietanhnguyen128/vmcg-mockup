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

  this.rangeOfBusinessAnimation();
  this.incubatorAnimation();
  this.contactAnimation();
};

var rangeOfBusinessAnimation = function() {
  var $detailArticles = $(".detail-article:not(.animated)");

  var $window = $(window);
  var scrollDistance = $window.scrollTop() + $window.height();

  if ($detailArticles.length !== 0) {
    $detailArticles.each(function (index) {
      var $this = $(this);
  
      var thisPos = $this.offset().top;
  
      if (thisPos < scrollDistance) {
        $this.addClass("animated slideInUp");
      }
    })
  }
}

var incubatorAnimation = function() {
  var $incubatorArticles = $(".incubator-article:not(.animated)");

  var $window = $(window);
  var scrollDistance = $window.scrollTop() + $window.height();

  if ($incubatorArticles.length !== 0) {
    $incubatorArticles.each(function (index) {
      var $this = $(this);
  
      var thisPos = $this.offset().top;
  
      if (thisPos < scrollDistance) {
        $this.addClass("animated slideInUp");
      }
    })
  }
}

var contactAnimation = function() {
  var $banner = $(".banner-contact-us:not(.animated)");

  var $window = $(window);
  var scrollDistance = $window.scrollTop() + $window.height();
  
  if ($banner.length !== 0) {
    var bannerPos = $($banner["0"]).offset().top;
    if (bannerPos < scrollDistance) {
      $($banner["0"]).addClass("animated fadeIn");
    }
  }
}