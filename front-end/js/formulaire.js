//Ecoute du btn "valider le formulaire"
document.getElementById("form-submit").addEventListener("click", function() {

    window.location.assign("https://sarahongithub.github.io/Oriteddy/front-end/commande.html");

    //Récupération de l'objet contact et du tableau des produits(id)
    let body = {
        contact : {
            firstName : firstName.value,
            lastName : lastName.value,
            address : address.value,
            city : city.value,
            email : email.value
    },
    products : []
}



let basketArray = JSON.parse(localStorage.getItem('selectedTeddies'))
//Parcourir le panier

var id = Object.keys(basketArray)

body.products.push(id)

//Requête POST pour envoyer le formulaire et le panier au serveur
    fetch('http://localhost:3000/api/teddies/order', {
    method: 'post',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
    body: JSON.stringify(body)


}).then (response => {
    return response.json();
})
.then(function(data){
    localStorage.setItem('orderData', JSON.stringify(data));
    localStorage.getItem('orderData')
})

  .catch(function (error) {
    console.log(error);
  })
})