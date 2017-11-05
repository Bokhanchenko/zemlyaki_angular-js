const zemlyakiApp = angular.module('zemlyakiApp', ['ui.router']);

zemlyakiApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('general', {
        url: '/',
        templateUrl: 'template/articles.html',
        controller: 'GeneralCtrl',
      })
      .state('activity', {
        url: '/activity',
        templateUrl: 'template/articles.html',
        controller: 'ActivityCtrl'
      })
      .state('cooperation', {
        url: '/cooperation',
        templateUrl: 'template/articles.html',
        controller: 'CooperationCtrl'
      })
      .state('news', {
        url: '/news',
        templateUrl: 'template/articles.html',
        controller: 'NewsCtrl'
      })
      .state('contacts', {
        url: '/contacts',
        templateUrl: 'template/contacts.html',
        controller: 'ContactsCtrl'
      });
  }]);

