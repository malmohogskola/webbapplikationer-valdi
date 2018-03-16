/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var showMenu = document.querySelector("#menu-btn");

showMenu.addEventListener("click", function() {
  console.log("inside the function")
  var nav = document.querySelector("#nav");
  if (window.innerWidth <= 480) {
    if (nav.style.display === "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  }
});
