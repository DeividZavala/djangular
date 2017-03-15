(function () {

            "use strict"

            angular
                    .module("scrumboard",['ngRoute'])
                    .controller("scrumCtrl", scrumCtrl);

            function scrumCtrl($http,$scope,$location) {

                $scope.add = add;
                $scope.logout= logout

                function logout() {
                    $http.get('/auth_api/logout/')
                        .then(function () {
                            $location.url('/login');
                        })
                }
                
                $http.get("/scrumboard/lists/")
                    .then(function (response) {
                        $scope.data = response.data
                        console.log($scope.data)
                    })

                function add(list, title) {

                    var card = {
                        list: list.id,
                        title: title
                    }

                    $http.post('/scrumboard/cards/',card)
                        .then(function (response) {
                            list.cards.push(card)
                            $http.get("/scrumboard/lists/")
                                .then(function (response) {
                                    $scope.data = response.data
                                })
                        },function (error) {
                            console.log(error)
                        })
                    
                }

            }

        })();