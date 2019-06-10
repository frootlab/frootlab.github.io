// Add event listener, to execute scripts, when the DOM is ready,
// i.e. when the document has been parsed
document.addEventListener("DOMContentLoaded", function() {

    // Fix title-page
    if (document.querySelector("#front")) {

      // Calc 1rem in pixels
      var rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

      // Select DOM element
      var oCont = document.querySelector("#front .content");

      // Fix padding-top
      var oCrum = document.querySelector("#breadcrumb");
      oCont.style.paddingTop = (oCrum.clientHeight + rem).toString() + "px";

      // Fix padding-bottom
      var oBand = document.querySelector("#front .banderole");
      oCont.style.paddingBottom = (oBand.clientHeight + rem).toString() + "px";
  }
});
