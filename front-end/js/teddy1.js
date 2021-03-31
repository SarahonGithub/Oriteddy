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
            PageProduit = PageProduit + '<input  type="hidden" name="produit" id="IdProduit" value=' + produit._id + '>';
              
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
                
                var selectedId = document.getElementById("IdProduit").value;

                var paniers = [];

                //Si le panier contient quelque chose
                if (localStorage.getItem('selectedTeddies') !== null) {
                    paniers = JSON.parse(localStorage.getItem('selectedTeddies'));
                }
                
                let blnTrouve = false

                //Parcourir le panier et y ajouter des produits 
                for(i = 0; i < paniers.length; i++) {
                    if (paniers[i].id === selectedId) {
                      paniers[i].quantity++;
                      blnTrouve = true;
                      break;
                    }
                }

                //L'article n'existe pas dans le panier
                if(blnTrouve==false) {
                    var teddyObject = {id: selectedId, quantity: 1};
                    paniers.push(teddyObject);
                }
            
                //Transformation en format JSON et envoi à la key du localStorage
                localStorage.setItem('selectedTeddies', JSON.stringify(paniers));

             })
})
    
    .catch(function(error) {
        alert(error)
})





