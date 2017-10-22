(() => {
  function GeneralCtrl($scope, $http) {
    console.log('GeneralCtrl');
    $scope.articleImgPath = '../';

    $http.get('jsons/general.json').then((data) => {
      $scope.articles = data.data;
      console.log(data.data);
    })
  }

  GeneralCtrl.$inject = ['$scope', '$http'];
  zemlyakiApp.controller('GeneralCtrl', GeneralCtrl)
})();



