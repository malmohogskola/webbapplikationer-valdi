/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {

    var userFeed = new Instafeed({
        get: 'user',
        userId: '6644124',
        limit: 3,
        resolution: 'standard_resolution',
        accessToken: '6644124.1677ed0.e63015db01954d3d8c26a66e4c20a8b1',
        sortBy: 'most-recent',
        template: '<div class="instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});

