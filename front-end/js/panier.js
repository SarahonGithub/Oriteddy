var basketPage = '';
var totalPrice = '';
var sumPrice = 0;
basket = JSON.parse(localStorage.getItem('selectedTeddies'))

//Objet.keys = Tableau contenant les id, clés de l'objet
//forEach = éxécute la fonction sur chaque id, éléement de l'objets
Object.keys(basket).forEach(function (key) {

    //Passage en paramètre de fetch de l'id et de sa quantité associée
        fetch('http://localhost:3000/api/teddies/' + key) 
        .then(function(response){
            return response.json()
        })
        .then(function (produit){
        
                    
                    //Récupération de l'image, du prix, du nom et de la quantité liés à l'Id
                    basketPage = '<img class="Img_produit" src="' + produit.imageUrl + '">';
                    basketPage = basketPage + '<p class="prix">' + produit.price/100 + '€</p>';
                    basketPage = basketPage + '<h2 id="productName">' + produit.name + '</h2>';
                    basketPage = basketPage + '<p id="id">' + produit._id + '</p>';
                    basketPage = basketPage + '<p id="qty">' + basket[produit._id] + '</p>';
                    basketPage = basketPage + '<button id="remove">Supprimer</button>';
                    document.getElementById("products").innerHTML += basketPage;

                    //qty = valeur associée à l'id qui est la clé de l'objet 
                    var qty = basket[produit._id];

                    //Supression du ou des produits de même id 
                    document.getElementById("remove").addEventListener("click", function() {
                        deleteItem(produit._id)
                    })


                    sumPrice += (produit.price/100) * qty
                    totalPrice = '<p>' + sumPrice + '</p>';
                    document.getElementById("totalPrice").innerHTML = totalPrice;

                    //Suppression de tout le panier
                    document.getElementById("removeAll").addEventListener("click", function() {
                        deleteAll(produit._id);
                    })     
    })

    
    
});

//Supression du ou des produits de même id
function deleteItem(id) {
    Object.keys(basket).forEach(function (key) {
        if(id == key) {
            delete basket[key]
            // basket.splice(basket.indexOf('key'), 1) 
            localStorage.setItem('selectedTeddies', JSON.stringify(basket));
            document.location.reload();
        }
    })
}

//Suppression de tout le panier
function deleteAll(id) {
    Object.keys(basket).forEach(function (key) {
        if(id == key) {
            basket ={}
            localStorage.setItem('selectedTeddies', JSON.stringify(basket));
            document.location.reload();
        }
    })

}

