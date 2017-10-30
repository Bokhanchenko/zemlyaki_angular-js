zemlyakiApp
    .factory('serviceArticles', ['$route', 'batchLog', '$rootScope', '$http',
    function($route, batchLog, $rootScope, $http) {

      console.log('kddddddjsi')
        function getGeneralArticles() {

        }

        return {
            getGeneralArticles: () => {

                console.log('kdjsi')
                return "hello"
                // return $http.get('jsons/general.json')
                //     .then(data => data)
                //     .catch(e => console.log(e))
            }
        };
    }]);


