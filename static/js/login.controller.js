(function () {
    "use strict"

    angular
        .module('scrumboard')
        .controller('LoginCtrl',LoginCtrl);

    LoginCtrl.$inject = ['$scope','$http','$location']
    function LoginCtrl($scope,$http,$location) {
        $scope.login = function () {
            $http.post('/auth_api/login/',$scope.user)
                .then(function () {
                    $location.url('/');
                },
                function () {
                    $scope.login_error = "Usuario o contraseña invalidos";
                });
        }
    }
})();