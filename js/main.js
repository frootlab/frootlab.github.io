// Google Analytics, Use Anonymize IP
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '{{ site.google-analytics }}', { 'anonymize_ip': true });

/*
  Navigation Sidebar
*/

// Open Navigation Sidebar
function openNav() {
  var oOverlay = document.getElementById("overlay");
  var oSideNav = document.getElementById("sidenav");

  oOverlay.style.width = "100%";
  oOverlay.style.backgroundColor = "rgba(0,0,0,.4)";
  oSideNav.style.width = "250px";

  setTimeout(
    function() {
      document.addEventListener('click', outClick);
    }, 500);
}

// Close Navigation Sidebar
function closeNav() {
  var oOverlay = document.getElementById("overlay");
  var oSideNav = document.getElementById("sidenav");

  setTimeout(function() { oOverlay.style.width = "0"; }, 500);
  oOverlay.style.backgroundColor = "rgba(0,0,0,.0)";
  oSideNav.style.width = "0";

  document.removeEventListener('click', outClick);
}

// Close Navigation Sidebar on click outside
function outClick(event) {
  var oSideNav = document.getElementById("sidenav");
  var isClickInside = oSideNav.contains(event.target);
  if (!isClickInside) {
    closeNav();
  }
}

// On Scroll hide the Scroll Arrow (if shown)
window.onscroll = function() {
  if (document.getElementById("scroll")) {
    if (window.pageYOffset > 10) {
      document.getElementById("scroll").style.display = "none";
    }
  }
}

// Fix title-page padding
var fFixTitlePadding = function() {
  if (document.getElementById("left-page")) {
    var rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    var oCont = document.querySelector("#left-page .content");
    var oCrum = document.getElementById("crumbs");
    var oBand = document.querySelector("#left-page .banderole");
    oCont.style.paddingTop = (oCrum.clientHeight + rem).toString() + "px";
    oCont.style.paddingBottom = (oBand.clientHeight + rem).toString() + "px";
  }
}

document.addEventListener("DOMContentLoaded", fFixTitlePadding);
