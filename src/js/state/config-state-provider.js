const zemlyakiApp = angular.module('zemlyakiApp', ["ui.router"])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('general', {
      url: '/',
      templateUrl: 'template/articles.html',
      controller: 'GeneralCtrl',
      // resolve: {
      //   'articles': () => {
      //       return 'err';
      //   }}
      // resolve: {
      //   'articles': serviceArticles=>serviceArticles.getGeneralArticles(),
      // }
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

