PagePanier = '';

let panier = (localStorage.getItem('selectedTeddies'))
//Parcourir le panier
for (i = 0; i < panier.length; i++) {
    
    var id = panier[i].id;
    var qty = panier[i].quantity;

    fetch('http://localhost:3000/api/teddies/' + id) 
    .then(function(response){
        return response.json()
    })
    .then(function (produit){
    
                
                //Récupération de l'image, du prix et du nom liés à l'Id
                
    
                PagePanier = '<img class="Img_produit" src="' + produit.imageUrl + '">';
                PagePanier = PagePanier + '<p class="prix">' + produit.price/100 + '€</p>';
                PagePanier = PagePanier + '<h2 id="productName">' + produit.name + '</h2>';
                PagePanier = PagePanier + '<p id="id">' + produit._id + '</p>';
                PagePanier = PagePanier + '<p id="qty">' + qty + '</p>';
    
    
    document.getElementById("products").innerHTML = PagePanier;

})   
}
