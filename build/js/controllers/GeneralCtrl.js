'use strict';

(function () {
  function GeneralCtrl($scope, $http, serviceArticles) {
    $scope.articleImgPath = '../';

    serviceArticles.getArticles('general').then(function (data) {
      $scope.articles = data;
    });
  }

  GeneralCtrl.$inject = ['$scope', '$http', 'serviceArticles'];
  zemlyakiApp.controller('GeneralCtrl', GeneralCtrl);
})();