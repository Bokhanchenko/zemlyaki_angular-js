(() => {
  function NewsCtrl($scope, $http) {

    $scope.articleImgPath = 'img/news/';

    const initSlider = () => {
      setTimeout(()=>{
        $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: false,
          asNavFor: '.slider-nav'
        });

        $('.slider-nav').slick({
          slidesToShow: 3,
          slidesToScroll: 3,
          asNavFor: '.slider-for',
          focusOnSelect: true,
          dots: false,
          infinite: true,
          speed: 300,
          variableWidth: true,
          centerMode: true,
        });
      }, 500)
    };

    $http.get('jsons/news.json').then((data) => {
      $scope.articles = data.data;
    }).then(initSlider)
  }


})();
NewsCtrl.$inject = ['$scope', '$http'];
zemlyakiApp.controller('NewsCtrl', NewsCtrl)
