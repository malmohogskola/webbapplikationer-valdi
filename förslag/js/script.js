/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var showMenu = document.querySelector("#menu-btn");
var rings = document.querySelector("#dropdown-rings");
var necklace = document.querySelector("#necklace")


rings.addEventListener("mouseover", function(){
  /* Tar bort classen som lägger ringar-menyn till vänster
  om det är den mobila versionen */
  var ringsClass = document.querySelector("#delete-class");
  if (window.innerWidth <= 480) {
    ringsClass.removeAttribute("class");
  }
});

necklace.addEventListener("mouseover", function(){
  /* Tar bort classen som lägger ringar-menyn till vänster
  om det är den mobila versionen */
  var necklaceClass = document.querySelector("#delete-class");
  if (window.innerWidth <= 480) {
    necklaceClass.classList.add("class-hidden");
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

function initMap() {
  var uluru = {lat: 56.663582, lng: 16.362649};
  var map = new google.maps.Map(document.querySelector("#map"), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

initMap()
