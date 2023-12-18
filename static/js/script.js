$(document).ready(function(){
    $('#slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
      $('.innerdiv').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
      });

      // product detail
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay:true
      });
      $('.slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true,
        autoplay:true
      });
      $( function() {
        $( "#tabs" ).tabs();
      } );

$('.tab1').click(function(){
  $('.tab1').addClass("active")
  $('.tab2').removeClass("active")
})


$('.tab2').click(function(){
  $('.tab2').addClass("active")
  $('.tab1').removeClass("active")
})


// star

$('#star1').click(function(){
  $('#star1').addClass("checked")
  $('#star2').removeClass("checked")
  $('#star3').removeClass("checked")
  $('#star4').removeClass("checked")
  $('#star5').removeClass("checked")
})
$('#star2').click(function(){
  $('#star1').addClass("checked")
  $('#star2').addClass("checked")
  $('#star3').removeClass("checked")
  $('#star4').removeClass("checked")
  $('#star5').removeClass("checked")
})
$('#star3').click(function(){
  $('#star1').addClass("checked")
  $('#star2').addClass("checked")
  $('#star3').addClass("checked")
  $('#star4').removeClass("checked")
  $('#star5').removeClass("checked")
})
$('#star4').click(function(){
  $('#star1').addClass("checked")
  $('#star2').addClass("checked")
  $('#star3').addClass("checked")
  $('#star4').addClass("checked")
  $('#star5').removeClass("checked")
})
$('#star5').click(function(){
  $('#star1').addClass("checked")
  $('#star2').addClass("checked")
  $('#star3').addClass("checked")
  $('#star4').addClass("checked")
  $('#star5').addClass("checked")
})


// popup
$('#place-order').click(function(){
$('#popup').addClass("show");
$('#popup').removeClass("hidden");
$('a').addClass("disabled")

})
$('#close').click(function(){
  $('#popup').addClass("hidden");
  $('#popup').removeClass("show");
$('a').removeClass("disabled")

  })

  // $('#popup').magnificPopup({
  //   delegate: 'a',
  //   removalDelay: 500, //delay removal by X to allow out-animation
  //   callbacks: {
  //     beforeOpen: function() {
  //        this.st.mainClass = this.st.el.attr('data-effect');
  //     }
  //   },
  //   midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  // });
  

// wishlist

  $('#cart').click(function(){
    $('#popup2').removeClass("hidden");
    $('#popup2').addClass("show");
    $('a').addClass("disabled")
    
    })
    $('#close').click(function(){
      $('#popup2').addClass("hidden");
      $('#popup2').removeClass("show");
    $('a').removeClass("disabled")
    
      })
  

})



