(function () {

    "use strict"

    var card = {
        templateUrl:'/static/scrumboard/card.html',
        controller: cardCtrl,
        bindings: {
            info:"<",
            list:"<"
        }
    }

    function cardCtrl($http) {
        var card = this;
        var url = '/scrumboard/cards/'

        card.update = update;
        card.deleteCard = deleteCard;
        //console.log(card.list.cards)
        console.log(card.info.id)

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