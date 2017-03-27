(function () {

    "use strict"

    var card = {
        templateUrl:'/static/html/card.html',
        controller: cardCtrl,
        bindings: {
            info:"<",
            list:"<",
            data:"<"
        }
    }

    function cardCtrl($http) {
        var card = this;
        var url = '/scrumboard/cards/'

        card.update = update;
        card.deleteCard = deleteCard;
        card.move = move;

        function move() {
            if(card.destList === undefined){
                return;
            }
            card.info.list = card.destList.id 
        }
        console.log(card.list)

        function deleteCard() {
            if(confirm("Seguro que quieres borrar?")){
                //console.log(card.info.id)
                $http.delete(url + card.info.id)
                    .then(function () {
                        //console.log(card.list)
                        var cards = card.list.cards;
                        cards.splice(
                            cards.indexOf(card.info),1
                        )
                    })
            }
        }


        function update() {
            $http.put(url + card.info.id +'/', card.info)
        }

    }
    
    angular
        .module('scrumboard')
        .component("scrumboardCard",card);

})();