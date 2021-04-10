document.getElementById("form-submit").addEventListener("click", function() {

let form = document.getElementById("form-contact")

    let getForm = new FormData(form)
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