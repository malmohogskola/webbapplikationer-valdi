/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var showMenu = document.querySelector("#menu-btn");
var ringar = document.querySelector("#dropdown-ringar");


ringar.addEventListener("mouseover", function(){
  /* Tar bort classen som lägger ringar-menyn till vänster
  om det är den mobila versionen */
  var ringarClass = document.querySelector("#delete-class");
  if (window.innerWidth <= 480) {
    ringarClass.removeAttribute("class");
  }
});


showMenu.addEventListener("click", function() {
  /* Genom knappklick visas Menyn om den döljs och döljs
  om den visas */
  var nav = document.querySelector("#nav");
  if (window.innerWidth <= 480) {
    if (nav.style.display === "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  }
});
