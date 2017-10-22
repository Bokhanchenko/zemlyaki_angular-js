(() => {
  const zemlyakiApp = angular.module('zemlyakiApp', []);

  function ContentCtrl($scope, $http) {

    $scope.goToGeneral = goToGeneral
    $scope.goToActivity = goToActivity
    $scope.goToCooperation = goToCooperation
    $scope.goToNews = goToNews
    $scope.articleImgPath = ''

    function initSlider() {
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
        console.log('timeout')
      }, 500)

    }

    function goToGeneral() {
      $http.get('jsons/general.json').then((data) => {
        $scope.articles = data.data;
      }).then(initSlider);+
    }

    function goToActivity() {
      $http.get('jsons/activity.json').then((data) => {
        $scope.articleImgPath = 'img/photos/';
        $scope.articles = data.data;
      }).then(initSlider);
    }

    function goToCooperation() {
      $http.get('jsons/cooperation.json').then((data) => {
        $scope.articleImgPath = 'img/photos/';
        $scope.articles = data.data;
      }).then(initSlider);
    }

    function goToNews() {
      $http.get('jsons/news.json').then((data) => {
        $scope.articleImgPath = 'img/news/';
        $scope.articles = data.data;,
      }).then(initSlider)
    }

    $http.get('jsons/general.json').then((data) => {
      $scope.articles = data.data;
    });
    initSlider()
  }

  ContentCtrl.$inject = ['$scope', '$http'];
  zemlyakiApp.controller('ContentCtrl', ContentCtrl)

})();
