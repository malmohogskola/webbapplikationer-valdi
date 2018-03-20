/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function initMap() {
  /*Visar kartan i kontakt*/
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
