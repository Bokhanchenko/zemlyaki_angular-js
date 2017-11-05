'use strict';

zemlyakiApp.factory('serviceArticles', ['$http', function ($http) {

  function getArticles(name) {
    return $http.get('jsons/' + name + '.json').then(function (data) {
      return data.data;
    }).catch(function (e) {
      return console.log(e);
    });
  }

  return {
    getArticles: getArticles
  };
}]);