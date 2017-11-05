(() => {
  function GeneralCtrl($scope, $http) {
    console.log('GeneralCtrl');

    let ctrl = this

    ctrl.articleImgPath = '../';

    $http.get('jsons/general.json').then((data) => {
      ctrl.articles = data.data;
      console.log(data.data);
    })
  }

  GeneralCtrl.$inject = ['$scope', '$http'];
  zemlyakiApp.controller('GeneralCtrl', GeneralCtrl)
})();



