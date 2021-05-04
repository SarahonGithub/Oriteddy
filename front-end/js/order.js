/*Affichage du prix total de la commande*/

var sumPrice = 0
var basket = JSON.parse(localStorage.getItem('selectedTeddies'))

//Exécuter la fonction sur chaque id, éléement de l'objet
Object.keys(basket).forEach(function (key) {
    
    //Passage en paramètre de fetch, de l'id et de sa quantité associée
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
    

/*Affichage de l'id de la commande*/
var orderData = JSON.parse(localStorage.getItem('orderData'))
Object.keys(orderData)
var orderId = orderData["orderId"]


/*Phrase de remerciement*/
Object.keys(orderData)
var nameData = orderData.contact["firstName"]

var orderConfirmation = document.getElementById("idOrder")
orderConfirmation.innerHTML = '<h1>Merci pour votre commande ' + nameData + ' !</h1><p class="orderId">IDENTIFIANT DE LA COMMANDE : ' + orderId + '</p>'