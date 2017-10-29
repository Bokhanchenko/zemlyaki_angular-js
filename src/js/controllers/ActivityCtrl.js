(() => {
  function ActivityCtrl($scope, $http) {
    console.log('ActivityCtrl');
    $scope.articleImgPath = 'img/photos/';

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
    }

    $http.get('jsons/activity.json').then((data) => {
      $scope.articles = data.data;
      console.log(data.data);
    }).then(initSlider);
  }

  ActivityCtrl.$inject = ['$scope', '$http'];
  zemlyakiApp.controller('ActivityCtrl', ActivityCtrl)
})();
