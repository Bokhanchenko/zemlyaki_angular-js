"use strict";

(function () {
  function MainCtrl($scope, $location) {
    $scope.menuClass = function (page) {
      var current = $location.path().substring(1);
      return page === current ? "nav__link--checked" : "";
    };
  }

  MainCtrl.$inject = ['$scope', '$location'];
  zemlyakiApp.controller('MainCtrl', MainCtrl);
})();