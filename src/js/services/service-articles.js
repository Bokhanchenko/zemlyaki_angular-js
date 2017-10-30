zemlyakiApp
    .factory('serviceArticles', ['$route', 'batchLog', '$rootScope', '$http',
    function($route, batchLog, $rootScope, $http) {

        function getGeneralArticles() {

        }

        return {
            getGeneralArticles: () => {
                return "hello"
                // return $http.get('jsons/general.json')
                //     .then(data => data)
                //     .catch(e => console.log(e))
            }
        };
    }]);


