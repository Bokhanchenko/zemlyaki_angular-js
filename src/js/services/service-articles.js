zemlyakiApp
  .factory('serviceArticles', ['$http',
    function ($http) {

      function getArticles(name) {
        return $http.get(`jsons/${name}.json`)
          .then(data => {
            return data.data
          })
          .catch(e => console.log(e))
      }

      return {
        getArticles
      };
    }]);


