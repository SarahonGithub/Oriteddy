var basketPage = '';
var totalPrice = '';
var sumPrice = 0;
basketArray = JSON.parse(localStorage.getItem('selectedTeddies'))
//Parcourir le panier
for (i = 0; i < basketArray.length; i++) {

    
    
    var id = basketArray[i].id;
    var qty = basketArray[i].quantity;

    fetch('http://localhost:3000/api/teddies/' + id) 
    .then(function(response){
        return response.json()
    })
    .then(function (produit){
    
                
                //Récupération de l'image, du prix et du nom liés à l'Id
                
    
                basketPage = '<img class="Img_produit" src="' + produit.imageUrl + '">';
                basketPage = basketPage + '<p class="prix">' + produit.price/100 + '€</p>';
                basketPage = basketPage + '<h2 id="productName">' + produit.name + '</h2>';
                basketPage = basketPage + '<p id="id">' + produit._id + '</p>';
                basketPage = basketPage + '<p id="qty">' + qty + '</p>';
                basketPage = basketPage + '<button id="remove">Supprimer</button>';
                document.getElementById("products").innerHTML += basketPage;
                
                sumPrice += (produit.price/100) * qty
                totalPrice = '<p>' + sumPrice + '</p>';
                document.getElementById("totalPrice").innerHTML = totalPrice;

                document.getElementById("remove").addEventListener("click", function() {
                    localStorage.removeItem("selectedTeddies"[i]);
                })

})   
}

