composant PopUp

Ce composant représente une boîte de dialogue pop-up qui affiche un message et un bouton OK. Lorsque le bouton OK est cliqué, l'utilisateur est redirigé vers la page de connexion.

Template
Le template contient une div avec une classe "popup-dialog" qui n'est affichée que si la propriété "showDialog" est vraie. À l'intérieur de cette div se trouvent un paragraphe affichant le message et un bouton OK.

Script
Le script exporte un objet par défaut avec les propriétés et les méthodes suivantes :

Propriétés
showDialog : une valeur booléenne qui détermine si la boîte de dialogue est affichée ou non.
message : une chaîne de caractères qui contient le message à afficher dans la boîte de dialogue.
Méthodes
show(message) : une méthode qui affiche la boîte de dialogue en définissant showDialog sur true et en définissant le message à afficher.
hide() : une méthode qui masque la boîte de dialogue en définissant showDialog sur false.
handleOk() : une méthode qui est appelée lorsque le bouton OK est cliqué. Elle masque la boîte de dialogue et redirige l'utilisateur vers la page de connexion à l'aide de Vue Router.
Style
Il n'y a pas de style défini pour ce composant.