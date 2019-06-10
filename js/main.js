// Google Analytics, Use Anonymize IP
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '{{ site.google-analytics }}', { 'anonymize_ip': true });

// Open Navigation Sidebar
function openNav() {
  var oOverlay = document.getElementById("overlay");
  var oSideNav = document.getElementById("sidenav");

  oOverlay.style.width = "100%";
  oOverlay.style.backgroundColor = "#00000066";
  oSideNav.style.width = "250px";
}

// Close Navigation Sidebar
function closeNav() {
  setTimeout(function() {document.getElementById("overlay").style.width = "0";}, 500);

  document.getElementById("overlay").style.backgroundColor = "#00000000";
  document.getElementById("sidenav").style.width = "0";
}

// On Scroll hide the Scroll Arrow (if shown)
window.onscroll = function() {
  if (window.pageYOffset > 10) {
    document.getElementById("scroll").style.display = "none";
  }
}

// Fix title-page padding
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("front")) {
      var rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
      var oCont = document.querySelector("#front .content");
      var oCrum = document.getElementById("crumbs");
      oCont.style.paddingTop = (oCrum.clientHeight + rem).toString() + "px";
      var oBand = document.querySelector("#front .banderole");
      oCont.style.paddingBottom = (oBand.clientHeight + rem).toString() + "px";
  }
});
