/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$('.ui.dropdown')
        .dropdown()
;

/*Responsiv mobilmeny*/
if ($(window).width() < 550) {
 $('#dropdown-rings').remove();
 $('#navigering').prepend("<a class='item' href='ringar/forlovningsringar.html'>Förlovningsringar</a>" + "<a class='item' href='ringar/vigselringar.html'>Vigselringar</a>", "<a class='item' href='ringar/ringar.html'>Ringar</a>");
};