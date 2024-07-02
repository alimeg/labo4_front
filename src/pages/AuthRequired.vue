<template>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title class="headline red--text mb-4">Authentification Requise</v-card-title>
        <v-card-text>
          <p class="mb-4">Vous devez être authentifié avant de pouvoir accéder à cette page.</p>
          <router-link to="/login">
            <v-btn color="primary" class="mr-4">Se Connecter / S'Inscrire</v-btn>
          </router-link>
        </v-card-text>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'AuthRequired',
    setup() {
      const router = useRouter();
      const dialog = ref(true); // Pour afficher la popup par défaut
  
      return {
        dialog,
        goToLogin: () => {
          router.push('/login');
          dialog.value = false; // Ferme la popup après avoir redirigé vers la page de connexion
        }
      };
    }
  });
  </script>
  
  <style scoped>
  /* Centrer la popup */
  .v-dialog--active .v-dialog__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  /* Styling spécifique à la popup */
  .v-card {
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px; /* Ajouter un peu de padding à la carte */
  }
  
  .red--text {
    color: red; /* Couleur rouge pour le texte du titre */
  }
  
  /* Rendre la popup responsive */
  @media screen and (max-width: 600px) {
    .v-dialog.v-dialog--active .v-dialog__content {
      width: calc(100% - 20px); /* Ajuster la largeur en fonction de l'écran */
      max-width: 100%;
      margin: 10px;
    }
  }
  </style>
  