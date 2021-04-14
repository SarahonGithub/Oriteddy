//Ecoute du btn "valider le formulaire"
const myForm = document.getElementById("form-contact")
myForm.addEventListener("click", function(event) {

    event.preventDefault();

    const formData = new FormData(this);

    //Récupération de l'objet contact et du tableau des produits(id)
    let body = {
        contact : {
            formData
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
}).then (response => {
    return response.json();
})
  .catch(function (error) {
    console.log(error);
  })
})