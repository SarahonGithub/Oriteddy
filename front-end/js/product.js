//Récupération de l'Id

var productsPage = '';

const url = new URL(window.location.href);
const parameters = new URLSearchParams(url.search);
const id = parameters.get("id");

fetch('http://localhost:3000/api/teddies/' + id)
.then(function(response){
    return response.json()
})
.then(function (produit){
    
    //Récupération de l'image, du prix et du nom liés à l'Id
    productsPage = '<h2 id="productName">' + produit.name + '</h2>';
    productsPage = productsPage + '<img class="productImg" src="' + produit.imageUrl + '">';
    productsPage = productsPage + '<p class="price">' + produit.price/100 + '€</p>';
    productsPage = productsPage + '<input  type="hidden" name="produit" id="IdProduit" value=' + produit._id + '>';
        
    document.getElementById('produit').innerHTML = productsPage
    
    
    //Récupération des couleurs des teddies
    
    for (i = 0; i < produit.colors.length; i++) {
    const personnalisaton = produit.colors[i]

    
    //Création des options de couleurs dans le html
    let selectAcolor = document.getElementById("Couleurs")
    var optionElt = document.createElement("option")
    optionElt.value = personnalisaton;
    optionElt.textContent = personnalisaton;
    selectAcolor.appendChild(optionElt);

}   

//Stockage des données des teddies ajoutés au panier

//Récupération du bouton "ajouter au panier"
document.getElementById("ajouterPanier").addEventListener("click", function() {
    
    var selectedId = document.getElementById("IdProduit").value;

    addBasket(selectedId);

    })
})

.catch(function(error) {
    alert(error)
})
