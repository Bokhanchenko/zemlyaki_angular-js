(() => {
  function GeneralCtrl($scope, $http) {
    $scope.articleImgPath = '../';

    // console.log('articles', articles);

    $http.get('jsons/general.json').then((data) => {
      $scope.articles = data.data;
      console.log(data.data);

    })
  }

  GeneralCtrl.$inject = ['$scope', '$http'];
  zemlyakiApp.controller('GeneralCtrl', GeneralCtrl)
})();
