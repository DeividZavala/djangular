(function () {
    "use strict"

    angular
        .module('scrumboard')
        .config(routes)
        .run(config);

    function routes($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: '/static/html/scrumboard.html',
                controller: 'scrumCtrl',
            })
            .when('/login',{
                templateUrl:'/static/html/login.html',
                controller: 'LoginCtrl',
            })
            .otherwise({
                redirectTo: '/'
            })
    }

    function config($http) {
        
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }


})();