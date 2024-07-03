Composant PokemonCard

Le composant PokemonCard affiche une carte avec des informations sur un Pokémon, y compris son nom, son ID, son image et son prix. Lorsque la carte est cliquée, l'utilisateur est redirigé vers la page de détails du Pokémon.

Utilisation
Pour utiliser le composant PokemonCard, vous devez passer une propriété pokemon, qui doit être un objet contenant les données du Pokémon. Voici un exemple :


<PokemonCard :pokemon="monPokemon" />

Dans cet exemple, monPokemon est un objet contenant les données d'un seul Pokémon.

Props
pokemon (Object) : L'objet de données du Pokémon. Cette propriété est requise.
Slots
Ce composant n'utilise pas de slots.

Événements
Ce composant n'émet aucun événement.

Méthodes
goToDetails() : Redirige vers la page de détails du Pokémon lorsque la carte est cliquée.
Classes CSS
pokemon-card : Applique un style de curseur à la carte lorsqu'elle est survolée.
text-uppercase : Applique une transformation de texte en majuscules au nom du Pokémon.