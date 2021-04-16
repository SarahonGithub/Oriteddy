//Récupération de l'Id

var productsPage = '';

const url = new URL(window.location.href);
const parameters = new URLSearchParams(url.search);
const id = parameters.get("id");

fetch('http://localhost:3000/api/teddies/' + id)
.then(function(response){
    return response.json()
})
.then(function (produit){

            
            //Récupération de l'image, du prix et du nom liés à l'Id
            

            productsPage = '<img class="Img_produit" src="' + produit.imageUrl + '">';
            productsPage = productsPage + '<p class="prix">' + produit.price/100 + '€</p>';
            productsPage = productsPage + '<h2 id="productName">' + produit.name + '</h2>';
            productsPage = productsPage + '<button id="ajouterPanier">Ajouter au panier</button>';
            productsPage = productsPage + '<input  type="hidden" name="produit" id="IdProduit" value=' + produit._id + '>';
              
            document.getElementById('produit').innerHTML = productsPage
            
            
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
                
                var selectedId = document.getElementById("IdProduit").value;

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
                      }
                });

                //L'article n'existe pas dans le panier
                if(blnTrouve==false) {
                     baskets[selectedId] = 1;
                }
            
                //Transformation en format JSON et envoi à la key du localStorage
                localStorage.setItem('selectedTeddies', JSON.stringify(baskets));

             })
})
    
    .catch(function(error) {
        alert(error)
})
