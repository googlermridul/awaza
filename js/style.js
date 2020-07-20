$(document).ready(function() {

   /*-- NAVIGRATION --*/
   $("#hamburger").click(function() {
      $(this).toggleClass("active");
   })

   $(".nav-link").click(function(){
      $(".navbar-collapse").collapse("hide");
      $("#hamburger").removeClass("active");
   });

   $(".nav-item > a").click(function() {
      $(".nav-item > a").removeClass("active");
      $(this).addClass("active");
   });

   $(window).scroll(function() {
      var st = $(this).scrollTop();
      if( st > 10 ) {
         $(".navbar").css({
            background: "rgba(0, 0, 0, .8)"
         });
         $(".collapse").css({
            background: "none"
         });
      } else {
         $(".navbar").css({
            background: "none"
         });
         $("#hamburger").click(function() {
            $(".navbar").css({
               background: "rgba(0, 0, 0, .8)"
            });
         })
      }
   });

   /*-- TEAM SECTION CAROUSEL PLUGIN --*/
   $('#teamSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 33,
      nav: false,
      autoplay: true,
      responsive: {
         0: {
            items:2
         }
      }
   });

   /*-- SKILL BAR SECTION --*/
   $(".skill-per").each(function() {
      var $this = $(this);
      var per = $this.attr("per");
      $this.css("width",per + "%");
      $({animatedValue: 0}).animate({animatedValue: per},{
         duration: 2000,
         step: function() {
            $this.attr("per", Math.floor(this.animatedValue) + "%");
         },
         complete: function() {
            $this.attr("per", Math.floor(this.animatedValue) + "%");
         }
      })
   })

   /*-- PORTFOLIO SECTION MIXITUP PLUGIN --*/
   var mixer = mixitup('#portfolio');

   $("#portfolioSection .mixer").click(function() {
      $("#portfolioSection .mixer").removeClass("active");
      $(this).addClass("active");
   });

   /*-- TESTIMONIAL SECTION CAROUSEL PLUGIN --*/
   $('#testimonialSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 33,
      nav: false,
      autoplay: true,
      responsive: {
         0: {
            items:1
         }
      }
   });

   /*-- PROJECT SECTION COUNTERUP PLUGIN --*/
   $(".counter").counterUp({
      delay: 10,
      time: 2000
   });

   /*-- PARTNER SECTION CAROUSEL PLUGIN --*/
   $('#partnerSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      responsive: {
         0: {
            items:2
         },
         552: {
            items:3
         },
         768: {
            items:4
         },
         992: {
            items:6
         }
      }
   });

   /*-- SCROLL UP --*/
   $(function () {
       $.scrollUp({
          scrollDistance: 250,
          scrollSpeed: 1000,
          animationSpeed: 500
       });
   });

   AOS.init({
      duration: 1200
   });

})
