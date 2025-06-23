$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      1050: {
        items: 2,
      },
    },
  });

  $(".reviews-header__button-prev").on("click", function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
  });

  $(".reviews-header__button-next").on("click", function () {
    $(".owl-carousel").trigger("next.owl.carousel");
  });
});
