(() => {
    function MainCtrl($scope, $location) {
        $scope.menuClass = (page) => {
            const current = $location.path().substring(1);
            return page === current ? "nav__link--checked" : "";
        }
    }

    MainCtrl.$inject = ['$scope', '$location'];
    zemlyakiApp.controller('MainCtrl', MainCtrl)
})();
