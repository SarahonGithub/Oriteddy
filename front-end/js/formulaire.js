//Ecoute du btn "valider le formulaire"
document.getElementById("form-submit").addEventListener("click", function(event) {

    event.preventDefault();

    //Récupération de l'objet contact et du tableau des produits(id)
    let body = {
        contact : {
            firstName : document.getElementById("firstName").value,
            lastName : document.getElementById("lastName").value,
            adress : document.getElementById("adress").value,
            city : document.getElementById("city").value,
            email : document.getElementById("email").value
    },
    products : []
}

let basketArray = JSON.parse(localStorage.getItem('selectedTeddies'))
//Parcourir le panier
for (i = 0; i < basketArray.length; i++) {
    body.products.push(tableauPaniers[i].id)
}

//Requête POST pour envoyer le formulaire et le panier au serveur
    fetch('http://localhost:3000/api/teddies/order', {
    method: 'post',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
    body: body
}).then(function (response) {
    return response.json();
}).then function(json)
console.log(json)

  .catch(function (error) {
    console.log('Request failed', error);
  })
})