<template>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8">
          <v-card v-if="pokemon" class="pokemon-card">
            <!-- Bouton X pour fermer et revenir à la page précédente -->
            <v-btn icon class="close-button" @click="$router.go(-1)">
              <v-icon>mdi-close</v-icon>
            </v-btn>
  
            <v-row no-gutters>
              <v-col cols="4">
            <!-- Ajout de l'icone LIKE avec un message en toolip-->            
    <v-tooltip text="Liké ce Pokémon (il sera ajouté à votre page Membre)">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" icon @click="handleLike"> 
        <v-icon :color="iconColor">mdi-heart</v-icon>
       </v-btn>
      </template> 
    </v-tooltip>

    
                <v-img :src="pokemon.sprites.front_default" height="200px" contain></v-img>
              </v-col>
              <v-col cols="8">
                <!-- Bouton "Add to Cart" en haut à droite -->
                <v-row class="d-flex align-center justify-start">
                  <v-col cols="auto">
                    <v-btn color="red" @click="handleAddToCart">Catch</v-btn>
                  </v-col>
                </v-row>
                <!-- Titre, ID et Price -->
                <v-row>
                  <v-col cols="6">
                    <v-card-title class="text-uppercase">
                        {{ pokemon.name }}
                     </v-card-title>
                    <v-card-subtitle>ID: {{ pokemon.id }}</v-card-subtitle>
                  </v-col>
                  <v-col cols="6" class="text-right">
                    <v-card-subtitle>Price: ${{ getPokemonPrice() }}</v-card-subtitle>
                  </v-col>
                </v-row>
                
                <v-divider></v-divider>
  
                <!-- Détails du Pokémon -->
                <v-card-text>
                  <v-list dense>
                    <v-list-item>
                      <v-list-item-title class="font-weight-bold">Height:</v-list-item-title>
                      <v-list-item-subtitle>{{ pokemon.height }}</v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title class="font-weight-bold">Weight:</v-list-item-title>
                      <v-list-item-subtitle>{{ pokemon.weight }}</v-list-item-subtitle>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item v-for="(type, index) in pokemon.types" :key="index">
                      <v-list-item-title class="font-weight-bold">Type {{ index + 1 }}:</v-list-item-title>
                      <v-list-item-subtitle>{{ type }}</v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item v-for="(ability, index) in pokemon.abilities" :key="index">
                      <v-list-item-title class="font-weight-bold">Ability {{ index + 1 }}:</v-list-item-title>
                      <v-list-item-subtitle>{{ ability }}</v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item v-for="(stat, index) in pokemon.stats" :key="index">
                      <v-list-item-title class="font-weight-bold">{{ stat.name }}:</v-list-item-title>
                      <v-list-item-subtitle>{{ stat.base_stat }}</v-list-item-subtitle>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
          <!-- Alert masquée pendant le chargement -->
          <v-alert v-else-if="pokemon === null" type="error" class="mt-4">Failed to load Pokémon details.</v-alert>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { useCartStore } from '@/stores/cartStore';
  import { usePokemonStore } from '@/stores/pokemonStore';
  import { useMembersStore } from '@/stores/MembersStore';
 
  
  const router = useRouter();
  const cartStore = useCartStore();
  const pokemonStore = usePokemonStore();
  const membersStore = useMembersStore();
  
  const pokemonId = Number(router.currentRoute.value.params.pokemonId);
  const pokemon = computed(() => pokemonStore.pokemons.find(p => p.id === pokemonId));
  
  const handleAddToCart = () => {
    console.log(pokemon.value)
    if (!pokemon.value) {
      console.error('Pokemon details not loaded yet.');
      return;
    }
    cartStore.addToCart(pokemon.value);
    console.log('Added to cart:', pokemon.value.name);
  };
 
  const getPokemonPrice = () => {
  if (pokemon.value) {
    return pokemon.value.getPrice().toFixed(2); // Utilise getPrice() de la classe Pokemon pour obtenir le prix
}
  return 'N/A';
};
let isLiked = false;
const iconColor = ref('grey');

const handleLike = () => {
  isLiked = !isLiked;
  console.log('Pokemon liked:', isLiked);
  iconColor.value = isLiked ? 'red' : 'grey';
  if (isLiked) {
    addToLikedPokemons(pokemon.value);
  } else {
    removeLikedPokemon(pokemonId)
  }
};

const addToLikedPokemons = (pokemon) => {
  if (pokemon) {
    membersStore.addLikedPokemon(pokemon);
   
  }
};
const removeLikedPokemon = (pokemonId) => {
  if (pokemonId) {
    membersStore.removeLikedPokemon(pokemonId);
    
  }
};


  </script>
  
  <style scoped>
  .pokemon-card {
    max-width: 600px;
    margin: auto;
    padding: 16px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .close-button {
    position: absolute;
    top: 10px; /* Ajustez selon votre besoin */
    right: 10px; /* Ajustez selon votre besoin */
    background-color: #1976D2; /* Couleur de fond bleue */
    border-radius: 50%; /* Pour rendre le bouton rond */
    padding: 8px;
    color: white; /* Couleur du texte */
  }
  
  .close-button:hover {
    background-color: red; /* Couleur de fond bleue foncée au survol */
  }
  
  .font-weight-bold {
    font-weight: bold;
  }
  
  .text-uppercase {
    text-transform: uppercase;
  }
  </style>
  