var name = "";
var price = "";
var id = "";
var image = "";

let panier = JSON.parse(localStorage.getItem('selectedTeddies'))
//Parcourir le panier
for (let products in panier) {
    
    name = products.name;
    price = products.price;
    id = products.id;
    image = products.image;

    document.getElementById("name").innerHTML = name;
    document.getElementById("price").innerHTML = price;
    document.getElementById("id").innerHTML = id;
    document.getElementById("image").attributes.src.value = image;
}