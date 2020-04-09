var myLogo = document.getElementById("logo")
var wrapper =  document.getElementsByClassName("wrapper")[0];
var menu = document.getElementsByClassName("menu-main")[0];

// Scroll animation
var scrollBanner = document.getElementsByClassName('scroll-banner')[0];

var $window = $(window);
var scrollDistance = $window.scrollTop() + $window.height();

var $banner = $(scrollBanner);
var $bannerToTop = $banner.offset().top;

scrollBanner.style.backgroundPosition = "0px " + $bannerToTop + "px";

// onscroll 

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

  scrollDistance = $window.scrollTop();
  var newPosition = scrollDistance - $bannerToTop + 65;

  scrollBanner.style.backgroundPosition = "0px " + newPosition + "px";

  this.rangeOfBusinessAnimation();
  this.incubatorAnimation();
  this.contactAnimation();
  this.academyAnimation();
  this.businessBannerAnimation();
  this.blogAnimation();
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

var academyAnimation = function() {
  var $academy = $(".academy-detail:not(.animated)")

  var $window = $(window);
  var scrollDistance = $window.scrollTop() + $window.height();
  
  if ($academy.length !== 0) {
    $academy.each(function (index) {
      var $this = $(this);
  
      var thisPos = $this.offset().top;
  
      if (thisPos < scrollDistance) {
        $this.addClass("animated slideInRight");
      }
    })
  }
}

var businessBannerAnimation = function() {
  var $image = $(".banner-business-image:not(.animated)")
  var $text = $(".banner-business-text:not(.animated)")

  var $window = $(window);
  var scrollDistance = $window.scrollTop() + $window.height();

  console.log("inside");

  if ($image.length !== 0) {
    var imagePos = $($image["0"]).offset().top;

    if (imagePos < scrollDistance) {
      $($image["0"]).addClass("animated slideInLeft");
      $($text["0"]).addClass("animated slideInRight");
    }

    console.log(imagePos);
  }
}

var blogAnimation = function() {
  var $blogs = $(".blog-post:not(.animated)");

  var $window = $(window);
  var scrollDistance = $window.scrollTop() + $window.height();

  if ($blogs.length !== 0) {
    $blogs.each(function (index) {
      var $this = $(this);
  
      var thisPos = $this.offset().top;
  
      if (thisPos < scrollDistance) {
        $this.addClass("animated slideInUp");
      }
    })
  }
}