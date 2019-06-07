// Set the width of the side navigation to 250px and the left margin of the page
// content to 250px and add a black background color to body
function openNav() {
  document.getElementById("sideoverlay").style.width = "100%";
  document.getElementById("sideoverlay").style.backgroundColor = "#00000066";
  document.getElementById("sidenav").style.width = "250px";
}

// Set the width of the side navigation to 0 and the left margin of the page
// content to 0, and the background color of body to white
function closeNav() {
  setTimeout(
    function() {
      document.getElementById("sideoverlay").style.width = "0";
    }, 500);

  document.getElementById("sideoverlay").style.backgroundColor = "#00000000";
  document.getElementById("sidenav").style.width = "0";
}
