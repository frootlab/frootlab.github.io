// Set the width of the side navigation to 250px and the left margin of the page
// content to 250px and add a black background color to body
function openNav() {
  document.getElementById("Overlay").style.width = "100%";
  document.getElementById("Overlay").style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  document.getElementById("mySidenav").style.width = "250px";
}

// Set the width of the side navigation to 0 and the left margin of the page
// content to 0, and the background color of body to white
function closeNav() {
  setTimeout(
    function() {
      document.getElementById("Overlay").style.width = "0";
    }, 500);

  document.getElementById("Overlay").style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.getElementById("mySidenav").style.width = "0";
}
