$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items:2,
    loop: true,
    margin: 20,
    dots: false,
    
  });

  $(".reviews-header__button-prev").on("click", function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
  });

  $(".reviews-header__button-next").on("click", function () {
    $(".owl-carousel").trigger("next.owl.carousel");
  });
});
