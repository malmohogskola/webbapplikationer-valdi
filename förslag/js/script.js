/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = start;

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

function start(){
    console.log("Hej");
    document.getElementById("mobilMenu").addEventListener("click", mobilNav);
}

function mobilNav(){
    var menu = document.getElementById("menu");
    if(menu.className === "none"){
        menu.className = "";
    }else{
        menu.className = "none";
    }
}
