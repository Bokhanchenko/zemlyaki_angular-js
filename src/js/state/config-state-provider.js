// (() => {
const zemlyakiApp = angular.module('zemlyakiApp', ['ngRoute']);

  zemlyakiApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'template/articles.html',
        controller: 'GeneralCtrl'
      })
      .when('/activity', {
        templateUrl: 'template/articles.html',
        controller: 'ActivityCtrl'
      })
      .when('/cooperation', {
        templateUrl: 'template/articles.html',
        controller: 'CooperationCtrl'
      })
      .when('/news', {
        templateUrl: 'template/articles.html',
        controller: 'NewsCtrl'
      })
      .when('/contacts', {
        templateUrl: 'template/contacts.html',
        controller: 'ContactsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })


  }])
// })();


