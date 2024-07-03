<template>
  <v-tooltip open-delay="50" text="Cliquer pour avoir accès à plus de détails !" location="top">
  <template v-slot:activator="{ props }">
    <v-card v-if="pokemon" v-bind="props" @click="goToDetails" class="pokemon-card">
      <v-card-title class="text-uppercase">
        {{ pokemon.name }}
      </v-card-title>
      <v-card-subtitle>ID: {{ pokemon.id }}</v-card-subtitle>
      <v-img :src="pokemon.sprites.front_default" height="200px"></v-img>
      <v-card-subtitle>
        Price: ${{ getPokemonPrice().toFixed(2) }}
      </v-card-subtitle>
    </v-card>
    <v-alert v-else-if="!pokemon" type="error">Pokemon not found.</v-alert>
  </template>
</v-tooltip>

  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import Pokemon from '@/models/pokemons'; 
  import { useCartStore } from '@/stores/cartStore';

  const cartStore = useCartStore();
  // Définition des props
  const props = defineProps({
    pokemon: {
      type: Object,
      required: true,
    },
 /*   showCatchButton: {
    type: Boolean,
    default: true, // Default to true if not provided
  },*/
  });
  
  // Utilisation du routeur pour la navigation
  const router = useRouter();
  
  // Fonction pour naviguer vers les détails du Pokémon
  const goToDetails = () => {
    router.push(`/details/${props.pokemon.id}`);
  };
  
// Function pour recuperer le prix du Pokemon 
const getPokemonPrice = () => {
  const pokemonInstance = new Pokemon(props.pokemon.id, props.pokemon);
  return pokemonInstance.getPrice();
};


  </script>
  
  <style scoped>
  /* Ajoutez du style si nécessaire */
  .pokemon-card {
    cursor: pointer;
  }
  
  .text-uppercase {
    text-transform: uppercase;
  }
  </style>
  