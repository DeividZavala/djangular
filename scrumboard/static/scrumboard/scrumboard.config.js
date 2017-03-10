(function () {
    "use strict"

    angular
        .module('scrumboard')
        .run(config);

    function config($http) {
        
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }


})();