(() => {
  const zemlyakiApp = angular.module('zemlyakiApp', []);

  function ContentCtrl($scope, $http) {

    $scope.goToGeneral = goToGeneral
    $scope.goToActivity = goToActivity
    $scope.goToCooperation = goToCooperation
    $scope.goToNews = goToNews
    $scope.articleImgPath = ''

    function goToGeneral() {
      console.log($('nav__link'));
      $http.get('jsons/general.json').then((data) => {
        console.log(data.data);
        $scope.articles = data.data;
      });
    }

    function goToActivity() {
      console.log($('goToActivity'));
      $http.get('jsons/activity.json').then((data) => {
        console.log(data.data);
        $scope.articles = data.data;
      });
    }

    function goToCooperation() {
      console.log($('goToCooperation'));
      $http.get('jsons/cooperation.json').then((data) => {
        console.log(data.data);
        $scope.articles = data.data;
      });
    }

    function goToNews() {
      console.log($('goToNews'));
      $http.get('jsons/news.json').then((data) => {
        console.log(data.data);
        $scope.articleImgPath = 'img/photos/news/';
        $scope.articles = data.data;
      });
    }

    $http.get('jsons/general.json').then((data) => {
      console.log(data.data);
      $scope.articles = data.data;
    });


  }

  ContentCtrl.$inject = ['$scope', '$http'];
  zemlyakiApp.controller('ContentCtrl', ContentCtrl)


})();