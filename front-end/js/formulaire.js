//Ecoute du btn "valider le formulaire"
document.getElementById("form-submit").addEventListener("click", function() {
    
    //Récupération du formulaire
    let form = document.getElementById("form-contact")

    //FormData représentant les champs du formualire et leur valeur
    let getForm = new FormData(form)

    //Récupération de l'objet contact et du tableau des produits(id)
    var body = {
        contactObjec : {
        firstName : getForm.get("prenom"),
        lastName : getForm.get("nom"),
        adress : getForm.get("adress"),
        city : getForm.get("ville"),
        email : getForm.geet("email")
    },
    productsArray : []
}

let basketArray = JSON.parse(localStorage.getItem('selectedTeddies'))
//Parcourir le panier
for (i = 0; i < basketArray.length; i++) {
    body.productsArray.push(tableauPaniers[i].id)
}

//Requête POST pour envoyer le formulaire et le panier au serveur
    fetch('http://localhost:3000/api/order', {
    method: 'post',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
    body: body
})
  .then(json)
  .then(function (data) {
    console.log('Request succeeded with JSON response', data);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  })
})