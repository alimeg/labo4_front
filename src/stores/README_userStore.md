Ce code définit un magasin Vuex nommé `user` qui stocke les informations de l'utilisateur connecté. Le magasin a un état `user` qui est initialisé à `null`.

Il y a trois actions définies dans ce magasin :

* `setUser` : met à jour l'état `user` avec l'objet `user` passé en argument.
* `clearUser` : réinitialise l'état `user` à `null`.
* `logoutUser` : appelle la méthode `clearUser` pour réinitialiser l'état `user` à `null`, puis supprime le jeton d'authentification du stockage local.

Il y a également deux getters définis dans ce magasin :

* `isAuthenticated` : renvoie `true` si l'état `user` n'est pas `null`, `false` sinon.
* `userFullName` : renvoie le nom complet de l'utilisateur en concaténant ses prénom et nom, ou la chaîne `'Invité'` si l'état `user` est `null`.