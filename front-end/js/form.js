//Ecoute du btn "valider le formulaire"
document.getElementById("form-submit").addEventListener("click", function(e) {
  
  e.preventDefault()

  let firstName = document.getElementById("firstName");

  let lastName = document.getElementById("lastName");

  let address = document.getElementById("address")

  let city = document.getElementById("city")

  let email = document.getElementById("email");

  let myRegex = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  /*Vérification des champs du formulaire*/
  if (firstName.value != "" && lastName.value != "" && myRegex.test(email.value) == true && address.value != "" && city.value != "") {
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
    
    .then (function(data){
      localStorage.setItem('orderData', JSON.stringify(data));
      localStorage.getItem('orderData')
      
      /*Vérification du contenu du panier*/
      if(localStorage.getItem('selectedTeddies') !== null && localStorage.getItem('selectedTeddies')!="{}") {
        document.location="order.html";
      }
      
      else { 
        alert("Votre panier est vide")
      }
    
    })
    
    .catch(function (error) {
      console.log(error);
    })
  
  }

else {
  var error = document.getElementById("error")
  error.innerHTML = 'Veuillez remplir tous les champs correctement'
}

})