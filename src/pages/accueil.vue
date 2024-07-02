<template>
  <v-container>
    
    <!-- Bannière Principale -->
    <v-row align="center" justify="center" class="hero">
      <v-col cols="12" class="text-center">
        <img src="@/assets/Pikachu.png" alt="Pokémon Cards Banner" class="hero-image">
        <h1 class="display-2 text--primary">Achetez vos cartes Pokémon préférées ici</h1>
        <v-btn color="primary" class="mt-4" @click="goToPokemonsPage">
          Découvrir nos cartes
        </v-btn>
      </v-col>
    </v-row>



    <!-- À Propos de Nous -->
    <v-row align="center" justify="center" class="my-8">
      <v-col cols="12" md="8">
        <h2 class="text-center mb-4">À Propos de Notre Boutique</h2>
        <p class="body-1">
          Bienvenue sur Ma Boutique Pokémon, votre destination ultime pour acheter les cartes Pokémon les plus recherchées et les plus rares. Nous nous engageons à fournir des produits de haute qualité et un service client exceptionnel.
        </p>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToPokemonsPage = () => {
  router.push('/pokemon');
}
</script>


<style scoped>
  /* Ajoutez du style si nécessaire */
  </style>
