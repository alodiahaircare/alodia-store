
  $('.testimonials').slick({
    slidesToShow: 1,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 9000,
    arrows: true,
    responsive: [
    {
      breakpoint: 980,
      settings: {
        arrows: false,
      }
    }
   ]
  });