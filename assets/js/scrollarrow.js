// On Scroll hide the Scroll Arrow
window.onscroll = function() {
  if (window.pageYOffset > 10) {
    document.getElementById("scroll").style.display = "none";
  }
}
