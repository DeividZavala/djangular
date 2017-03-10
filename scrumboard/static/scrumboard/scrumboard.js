(function () {

            "use strict"

            angular
                    .module("scrumboard",[])
                    .controller("scrumCtrl", scrumCtrl);

            function scrumCtrl($http) {

                var ctrl = this;

                ctrl.add = add;
                ctrl.login = login;

                function login() {
                    console.log("login")
                    $http.post('/auth_api/login/',
                    {'username':'moss','password':'elmeromero'})
                        .then(function () {
                            window.location.reload()
                        })
                }
                
                $http.get("/scrumboard/lists/")
                    .then(function (response) {
                        ctrl.data = response.data
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
                                    ctrl.data = response.data
                                })
                        },function (error) {
                            console.log(error)
                        })
                    
                }

            }

        })();