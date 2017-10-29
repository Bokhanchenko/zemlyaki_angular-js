const zemlyakiApp = angular.module('zemlyakiApp', ['ngRoute']);

zemlyakiApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'template/articles.html',
      controller: 'GeneralCtrl',
      resolve: {
          articles: () => {
              return 'err';
          }}
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

// zemlyakiApp.config(($stateProvider) => {
//     $stateProvider
//         .state('/', {
//           templateUrl: 'template/articles.html',
//           controller: 'GeneralCtrl'
//         })
//         .state('/activity', {
//           templateUrl: 'template/articles.html',
//           controller: 'ActivityCtrl'
//         })
//         .state('/cooperation', {
//           templateUrl: 'template/articles.html',
//           controller: 'CooperationCtrl'
//         })
//         .state('/news', {
//           templateUrl: 'template/articles.html',
//           controller: 'NewsCtrl'
//         })
//         .state('/contacts', {
//           templateUrl: 'template/contacts.html',
//           controller: 'ContactsCtrl'
//         })
//         .otherwise({
//           redirectTo: '/'
//         })
// });



