const zemlyakiApp = angular.module('zemlyakiApp', ['ui.router']);

zemlyakiApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('general', {
        url: '/',
        templateUrl: 'template/articles.html',
        controller: 'articlesCtrl',
      })
      .state('activity', {
        url: '/activity',
        templateUrl: 'template/articles.html',
        controller: 'articlesCtrl'
      })
      .state('cooperation', {
        url: '/cooperation',
        templateUrl: 'template/articles.html',
        controller: 'articlesCtrl'
      })
      .state('news', {
        url: '/news',
        templateUrl: 'template/articles.html',
        controller: 'articlesCtrl'
      })
      .state('documents', {
        url: '/document',
        templateUrl: 'template/articles.html',
        controller: 'articlesCtrl'
      })
      .state('contacts', {
        url: '/contacts',
        templateUrl: 'template/contacts.html',
        controller: 'articlesCtrl'
      });
  }]);

