function addBasket(id_product) {

    var selectedId = id_product;
    var baskets = {};
    
    //Si le panier contient quelque chose
    if (localStorage.getItem('selectedTeddies') !== null) {
        baskets = JSON.parse(localStorage.getItem('selectedTeddies'));
    }

    let blnTrouve = false

    Object.keys(baskets).forEach(function (key) {
        if (key === selectedId) {
            baskets[key]++;
            blnTrouve = true;
            alert("Le produit a été ajouté au panier")
            }
    });

    //L'article n'existe pas dans le panier
    if(blnTrouve==false) {
            baskets[selectedId] = 1;
            alert("Le produit a été ajouté au panier")
    }
    
    //Transformation en format JSON et envoi à la key du localStorage
    localStorage.setItem('selectedTeddies', JSON.stringify(baskets));

}


//Supression du ou des produits de même id
function deleteItem(id) {
    if (localStorage.getItem('selectedTeddies') !== null) {
        var basket = JSON.parse(localStorage.getItem('selectedTeddies'));
    }
    Object.keys(basket).forEach(function (key) {
        if(id == key) {
            delete basket[key]
            localStorage.setItem('selectedTeddies', JSON.stringify(basket));
            document.location.reload();
        }
    })
}

//Suppression de tout le panier
function deleteAll() {
    baskets ={};
    localStorage.setItem('selectedTeddies', JSON.stringify(baskets));
    document.location.reload();
}