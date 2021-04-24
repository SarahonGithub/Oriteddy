/*var myForm = document.getElementById("form-contact")
myForm.addEventListener("submit", function(e) {

}*/


//Ecoute du btn "valider le formulaire"
document.getElementById("form-submit").addEventListener("click", function(e) {

  

  let firstName = document.getElementById("firstName");
  let myRegex = /^[a-zA-Z-\s]+$/;

  let lastName = document.getElementById("lastName");
  let myRegex2 = /^[a-zA-Z-\s]+$/;

 /* let adress = document.getElementById("adress");
  let myRegex3 = /^([0-9]) ([a-zA-Z])$/;*/

 /* let city = document.getElementById("city");
  let myRegex4 = ;*/


/*

if (firstName.value.trim() = "") {
  let myError = document.getElementById('error');
  myError.innerHTML = "Le champs est requis";
  myError.style.color = "red";
  e.preventDefault();
}

else if (myRegex.test(firstName.value) == false) {
  let myError = document.getElementById('error');
  myError.innerHTML = "Le mot doit comporter des lettres et des tireets uniquement";
  myError.style.color = "red";
  e.preventDefault();
}

*/

    //Récupération de l'objet contact et du tableau des produits(id)

    if (myRegex.test(firstName.value) == true && myRegex2.test(lastName.value) == true /*&& myRegex3.test(adress.value)*/) {
    
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


    if(localStorage.getItem('orderData') !== null ) {
    document.location="commande.html";
    }
})



  .catch(function (error) {
    console.log(error);
  })


 e.preventDefault()

}

})