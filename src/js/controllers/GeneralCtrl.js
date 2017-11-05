(() => {
  function GeneralCtrl($scope, $http, serviceArticles) {
    $scope.articleImgPath = '../';

    serviceArticles.getArticles('general').then(data => {
      $scope.articles = data
    });

  }

  GeneralCtrl.$inject = ['$scope', '$http', 'serviceArticles'];
  zemlyakiApp.controller('GeneralCtrl', GeneralCtrl)
})();
