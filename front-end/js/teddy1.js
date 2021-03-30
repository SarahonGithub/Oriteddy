//Récupération de l'Id

var PageProduit = '';

const url = new URL(window.location.href);
const parameters = new URLSearchParams(url.search);
const id = parameters.get("id");

fetch('http://localhost:3000/api/teddies/' + id)
.then(function(response){
    return response.json()
})
.then(function (produit){

            
            //Récupération de l'image, du prix et du nom liés à l'Id
            

            PageProduit = '<img class="Img_produit" src="' + produit.imageUrl + '">';
            PageProduit = PageProduit + '<p class="prix">' + produit.price/100 + '€</p>';
            PageProduit = PageProduit + '<h2 id="productName">' + produit.name + '</h2>';
            PageProduit = PageProduit + '<button id="ajouterPanier">Ajouter au panier</button>';
            PageProduit = PageProduit + '<input  type="hidden" name="prodduit" id="IdProduit" value=' + produit._id + '>';
              
            document.getElementById('produit').innerHTML = PageProduit
            
            
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
                //Récupération des données de l'objet à ajouter au localStorage
                //Récupération des données de l'objet à ajouter au localStorage
                let selectedId = document.getElementById("produit").value
                let imgSrc = document.getElementsByClassName("Img_produit").src
                let productName = document.getElementById("productName").textContent
                let price = document.getElementsByClassName("prix").value

                //Déclaration de l'objet à ajouter
                let teddyObject = { image : imgSrc, name: productName, price : price, id: selectedId, quantity : 1 }
                console.log(teddyObject)

                //Déclaration de la récupération des données
                let panier = JSON.parse(localStorage.getItem('selectedTeddies'))
                console.log(JSON.parse(localStorage.getItem('selectedTeddies')))
                //Parcourir le panier et y ajouter des produits 
                    for (let id in panier) {
                        if(id === selectedId.id) {
                            panier.quantity++;
                        }
                        else {
                            panier.push(selectedId);
                        }
                    }
                
                //Transformation en format JSON et envoi à la key du localStorage
                localStorage.setItem('selectedTeddies', JSON.stringify(teddyObject));
             })
})

/*

             //Ajout des données au localStorage
             const addToBasketBtn = document.getElementById('ajouterPanier').addEventListener("click", function() {
                 if(typeof  != null){

                     return
                 }
             })



             function DepartPanier() {
                 var panier = localStorage.getItem("panier");
                 if(panier != null){
                     return JSON.parse(panier);
                 }else{
                     return ;
                 }
             }

             function ajouterAuPanier(produit){
                 var panier = DepartPanier();
                 //Incrémenter la quatité 
                 var produit = panier.find(function(produit){
                     return produit.id == id);
                 })
                 if()
                 panier.push(produit);
                 panierEnregistre(panier);
             }

             function supprimerDuPanier(produit){

             }

             //fonction commune à ajouterAuPanier et supprimerDuPanier
             function panierEnregistre(panier){
                 localStorage.setItem("panier", JSON.stringify(panier));
             }

*/

    
    .catch(function(error) {
        alert(error)
})





