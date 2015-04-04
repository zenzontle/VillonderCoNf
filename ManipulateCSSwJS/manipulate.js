var square = document.getElementById("square");
var clickMe = document.getElementById("clickMe"); //Keeping it unobstrusive
function doDemo () {
 
  var button = this;
  square.style.backgroundColor = "#fa4";
  square.style.marginLeft = "20em";
  button.setAttribute("disabled", "true");
  setTimeout(clearDemo, 1000, button);
}
 
function clearDemo (button) {
  var square = document.getElementById("square");
  square.style.backgroundColor = "transparent";
  square.style.marginLeft = "0em";
  button.removeAttribute("disabled");
}
 
clickMe.onclick = doDemo;