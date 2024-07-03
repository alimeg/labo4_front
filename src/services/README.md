Cette fonction `fetchPokemonById` utilise la méthode `fetch` pour récupérer les données d'un Pokémon depuis l'API PokéAPI en utilisant son ID. Elle prend un paramètre `pokemonId` qui est l'ID du Pokémon à récupérer.

La fonction commence par essayer de récupérer les données en utilisant `await fetch()`. Si la réponse n'est pas OK (c'est-à-dire si le code d'état HTTP n'est pas dans la plage 200-299), une erreur est levée avec le message "Pokemon not found".

Si la réponse est OK, les données sont converties en JSON avec `await response.json()`. Ensuite, une nouvelle instance de la classe `Pokemon` est créée en utilisant l'ID et les données récupérées, et cette instance est renvoyée.

Si une erreur se produit à n'importe quel moment pendant la récupération des données, elle est capturée dans le bloc `catch`, affichée dans la console avec `console.error()` et propagée à l'appelant avec `throw error`. Cela permet à l'appelant de gérer l'erreur de manière appropriée.