HeaderProf Component

Un composant Vue.js pour afficher un en-tête avec des onglets de navigation et un menu déroulant pour l'authentification et le panier d'achat.

Utilisation
Pour utiliser ce composant, ajoutez-le à votre fichier .vue comme suit :


<template>
  <v-app>
    <HeaderProf />
    <!-- Autres composants -->
  </v-app>
</template>

<script setup>
import Header from '@/components/HeaderProf.vue';
</script>

Props
Aucun.

Événements
Aucun.

Méthodes
Aucune.

Slots
Aucun.

Détails de l'implémentation
Le composant Header utilise les composants Vuetify suivants :

v-container
v-row
v-col
v-tabs
v-tab
v-menu
v-list
v-list-item
v-btn
v-icon
v-badge
Il utilise également les hooks Vue suivants :

ref
computed
useRouter
useUserStore
useCartStore

Le composant affiche les onglets de navigation à gauche et le menu déroulant à droite. Le menu déroulant affiche l'icône du compte utilisateur et l'icône du panier d'achat. Si l'utilisateur est authentifié, le menu déroulant affiche une option pour se déconnecter. Si l'utilisateur n'est pas authentifié, le menu déroulant affiche une option pour se connecter ou s'inscrire.

Le composant utilise le store Vuex userStore pour vérifier si l'utilisateur est authentifié et pour se déconnecter. Il utilise également le store Vuex cartStore pour afficher le nombre d'articles dans le panier d'achat.

Le composant utilise le routeur Vue pour naviguer vers les différents onglets de navigation et vers la page du panier d'achat.

Stylisation
Le composant Header utilise les classes CSS suivantes :

logged-in : appliquée à l'icône du compte utilisateur lorsque l'utilisateur est authentifié.
cart-icon-active : appliquée à l'icône du panier d'achat lorsqu'il y a des articles dans le panier.
Vous pouvez personnaliser ces classes CSS en les redéfinissant dans votre propre feuille de style