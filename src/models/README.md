Cette classe `Pokemon` représente un Pokémon avec ses différentes propriétés telles que son nom, son image, son poids, sa taille, ses types, ses statistiques, ses capacités, ses mouvements, son espèce, ses formes, son expérience de base et ses sprites.

La méthode `convertWeight` convertit le poids du Pokémon en kilogrammes et la méthode `convertHeight` convertit la taille du Pokémon en mètres.

La méthode `extractTypes` extrait les types du Pokémon à partir de l'objet `types` et renvoie un tableau contenant les noms des types.

La méthode `extractStats` extrait les statistiques du Pokémon à partir de l'objet `stats` et renvoie un tableau contenant les noms et les valeurs des statistiques.

La méthode `extractAbilities` extrait les capacités du Pokémon à partir de l'objet `abilities` et renvoie un tableau contenant les noms des capacités.

La méthode `extractMoves` extrait les mouvements du Pokémon à partir de l'objet `moves` et renvoie un tableau contenant les noms des mouvements.

La méthode `getPrice` calcule le prix du Pokémon en fonction de ses statistiques de base et d'un multiplicateur.

La méthode `totalBaseStats` calcule la somme des statistiques de base du Pokémon.

Enfin, le constructeur de la classe prend en paramètre un identifiant `id` et un objet `data` contenant les données du Pokémon. Il initialise les propriétés de l'objet à partir des données fournies.