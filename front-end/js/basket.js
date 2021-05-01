var basketPage = '';
var totalPrice = '';
var sumPrice = 0;
var baskets = JSON.parse(localStorage.getItem('selectedTeddies'))


//Objet.keys = Tableau contenant les id, clés de l'objet
//forEach = éxécute la fonction sur chaque id, éléement de l'objets
Object.keys(baskets).forEach(function (key) {

    

    //Passage en paramètre de fetch de l'id et de sa quantité associée
        fetch('http://localhost:3000/api/teddies/' + key)
        .then(function(response){
            return response.json()
        })
        .then(function (produit){

            document.getElementById("emptyBasket").innerHTML=""
        
                    
                    //Récupération de l'image, du prix, du nom et de la quantité liés à l'Id
                    basketPage = '<div class="product">'
                    basketPage = basketPage + '<div class="flex">'
                    basketPage = basketPage + '<img class="basketImg" src="' + produit.imageUrl + '">';
                    basketPage = basketPage + '<div id="descr">'
                    basketPage = basketPage + '<h2 id="productName">' + produit.name + '</h2>';
                    basketPage = basketPage + '<p id="id">' + produit._id + '</p>';
                    basketPage = basketPage + '<p id="qty">Quantité : ' + baskets[produit._id] + '</p>';
                    basketPage = basketPage + '<div id="priceQty">'
                    basketPage = basketPage + '<button class="remove" onclick="deleteItem(\''+ produit._id+'\')">Supprimer</button>';
                    basketPage = basketPage + '<p class="price">' + produit.price/100 + '€</p>';
                    basketPage = basketPage + '</div>'
                    basketPage = basketPage + '</div>'
                    basketPage = basketPage + '</div>'           
                    basketPage = basketPage + '</div>'
                    document.getElementById("products").innerHTML += basketPage; 

                    //qty = valeur associée à l'id qui est la clé de l'objet 
                    var qty = baskets[produit._id];



                    sumPrice += (produit.price/100) * qty
                    totalPrice = '<p class="totalPrice">Prix total : ' + sumPrice + ' €</p>';
                    document.getElementById("totalPrice").innerHTML = totalPrice

                    //Suppression de tout le panier
                    document.getElementById("removeAll").addEventListener("click", function() {
                        deleteAll();
                    })     
    })
    
});