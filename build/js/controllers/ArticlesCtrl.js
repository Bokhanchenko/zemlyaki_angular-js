'use strict';

(function () {
  zemlyakiApp.controller('articlesCtrl', ArticlesCtrl);

  ArticlesCtrl.$inject = ['$scope', '$state', 'serviceArticles'];

  function ArticlesCtrl($scope, $state, serviceArticles) {

    var imgPaths = {
      general: './',
      activity: 'img/photos/',
      cooperation: 'img/photos/',
      news: 'img/news/',
      documents: 'img/documents/'
    };

    var stateName = $state.current.name;

    $scope.articleImgPath = imgPaths[stateName];

    var initSlider = function initSlider() {
      var allSliderFor = $('.slider-for');
      var allSliderNav = $('.slider-nav');

      for (var i = 0, l = allSliderFor.length; i < l; i++) {
        $(allSliderFor[i]).addClass('slider-for' + i);
        $(allSliderNav[i]).addClass('slider-nav' + i);

        $('.slider-for' + i).slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: false,
          asNavFor: '.slider-nav' + i
        });

        $('.slider-nav' + i).slick({
          slidesToShow: 3,
          slidesToScroll: 3,
          asNavFor: '.slider-for' + i,
          focusOnSelect: true,
          dots: false,
          infinite: true,
          speed: 300,
          variableWidth: true,
          centerMode: true
        });
      }
    };

    var showFullScreen = function showFullScreen(event) {
      event.stopPropagation();
      var imgContent = $(this).html();

      $('.full-screen-img-box').html(imgContent).click(function () {
        $(this).html('');
      });
    };

    var initClickListener = function initClickListener() {
      $('.slider-for__box').click(showFullScreen);
      $('.content__img-box').click(showFullScreen);
    };

    if (stateName !== 'contacts') {
      serviceArticles.getArticles(stateName).then(function (data) {
        $scope.articles = data;
        return true;
      }).then(function () {
        angular.element(document).ready(function () {
          initSlider();
          initClickListener();
        });
      });
    }
  }
})();