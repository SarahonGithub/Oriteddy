var orderData = JSON.parse(localStorage.getItem('orderData'))
Object.keys(orderData)
var orderId = orderData["orderId"]
var orderConfirmation = document.getElementById("idOrder")
orderConfirmation.innerHTML = '<h1>Merci pour votre commande !</h1><p>IDENTIFIANT DE LA COMMANDE : ' + orderId + '</p>'