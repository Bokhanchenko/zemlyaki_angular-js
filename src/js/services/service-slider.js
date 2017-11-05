(() => {
  function initSlider() {
    angular.element(document).ready(() => {
      const allSliderFor = $('.slider-for');
      const allSliderNav = $('.slider-nav');

      for (let i = 0, l = allSliderFor.length; i < l; i++) {
        $(allSliderFor[i]).addClass(`slider-for${i}`);
        $(allSliderNav[i]).addClass(`slider-nav${i}`);

        $(`.slider-for${i}`).slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: false,
          asNavFor: `.slider-nav${i}`
        });

        $(`.slider-nav${i}`).slick({
          slidesToShow: 3,
          slidesToScroll: 3,
          asNavFor: `.slider-for${i}`,
          focusOnSelect: true,
          dots: false,
          infinite: true,
          speed: 300,
          variableWidth: true,
          centerMode: true,
        });
      }
    })
  }
})();
