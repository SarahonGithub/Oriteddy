

var sumPrice = 0
var basket = JSON.parse(localStorage.getItem('selectedTeddies'))

//Objet.keys = Tableau contenant les id, clés de l'objet
//forEach = éxécute la fonction sur chaque id, éléement de l'objets
Object.keys(basket).forEach(function (key) {

    //Passage en paramètre de fetch de l'id et de sa quantité associée
        fetch('http://localhost:3000/api/teddies/' + key) 
        .then(function(response){
            return response.json()
        })
        .then(function (produit){

            var qty = basket[produit._id];
            var price = produit.price/100;

            sumPrice += price * qty
            totalPrice = '<p>PRIX TOTAL : ' + sumPrice + ' euros</p>';
            document.getElementById("orderPrice").innerHTML = totalPrice;
        })
    })

        

var orderData = JSON.parse(localStorage.getItem('orderData'))
Object.keys(orderData)
var orderId = orderData["orderId"]

Object.keys(orderData)
var nameData = orderData.contact["firstName"]

var orderConfirmation = document.getElementById("idOrder")
orderConfirmation.innerHTML = '<h1>Merci pour votre commande ' + nameData + ' !</h1><p>IDENTIFIANT DE LA COMMANDE : ' + orderId + '</p>'