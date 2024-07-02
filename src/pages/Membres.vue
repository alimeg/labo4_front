
<template>
  <v-container fluid>
    <!-- Ajout du texte en haut de la page -->
    <v-alert
      v-if="likedPokemons.length === 0"
      dense
      outlined
      color="info"
      icon="mdi-heart"
    >
    Cet emplacement est dédié à la préservation de vos cartes Pokémon préférées.
Veuillez cliquer sur le cœur présent sur la carte détaillée, accessible depuis la page "LES POKÉMONS", réservée exclusivement à nos précieux clients fidèles.
    </v-alert>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <v-row justify="center">
          <v-col v-for="pokemon in likedPokemons" :key="pokemon.id" cols="12" md="4">
            <v-card class="pokemon-card">
              <PokemonCard :pokemon="pokemon" />
              <v-btn color="red" @click="removeLikedPokemon(pokemon.id)">Relacher</v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
import { computed, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cartStore';
import { usePokemonStore } from '@/stores/pokemonStore';
import { useMembersStore } from '@/stores/MembersStore';

const router = useRouter();
const cartStore = useCartStore();
const pokemonStore = usePokemonStore();
const membersStore = useMembersStore();

// Définition de cartItems comme une référence réactive
const cartItems = ref([]);


const likedPokemons = computed(() => membersStore.likedPokemonsList);
const pokemonId = Number(router.currentRoute.value.params.pokemonId);
const pokemon = computed(() => pokemonStore.pokemons.find(p => p.id === pokemonId));

// Call initializeMembersStore on component mount
onMounted(() => {
  membersStore.initializeMembersStore();
  membersStore.loadMembersStore();
});

/*
const handleAddToCart = () => {
  if (!pokemon.value) {
    console.error('Pokemon details not loaded yet.');
    return;
  }
  cartStore.addToCart(pokemon.value);
  console.log('Added to cart:', pokemon.value.name);
};*/


let isLiked = false;
const iconColor = ref('grey');

const handleLike = (pokemon) => {
  const isLiked = membersStore.isPokemonLiked(pokemon.id);
  if (isLiked) {
    membersStore.removeLikedPokemon(pokemon.id);
  } else {
    membersStore.addLikedPokemon(pokemon);
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
