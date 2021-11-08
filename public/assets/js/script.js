(function($) { 
"use strict";

$('[data-toggle="offcanvas"]').on('click', function () {
    $('.navbar-collapse').toggleClass('show');
    });


 
/*MAGNIFIC POPUP JS*/

    $('.video-play').magnificPopup({
        type: 'iframe'
    });
    var magnifPopup = function() {
        $('.work-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function(openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };


/*Vendors*/
//     $(document).ready(function() { 
//      $(".vender_list").owlCarousel({      
//     loop:true,
//     margin:30,
//     nav:false,
//     responsiveClass:true,
//     responsive:{
//      0:{
//     items:2,
//     nav:false
//      },
//      700:{
//     items:4,
//     nav:false
//      },
//      1170:{
//     items:6,
//     nav:false,
//     loop:true
//      }
//     }
     
     
//      }); 
//    });


	

// /*Testimonials*/
//  $(document).ready(function() { 
//      $(".testimonials_list").owlCarousel({          
//       loop:true,
//       margin:0,
//       nav:false,
//       autoplay:true,
//       autoplayTimeout:3000,
//       responsiveClass:true,
//       responsive:{
//        0:{
//         items:1,
//         nav:true
//        },
//        700:{
//         items:2,
//         nav:true
//        },
//        1170:{
//         items:3,
//         nav:true,
//         loop:true
//        }
//       }
//        }); 
//      });



})(jQuery);

(function ($) {
"use strict";
// Preloader
//   setTimeout(function () {
//       $("#loader").fadeOut(600);
//   }, 200);
$(window).on("load", function () {
//   $(".site-preloader-wrap, .slide-preloader-wrap").fadeOut(1000);
});

})(jQuery);