<template>
  <v-container fluid>
    <v-row justify="space-between" align="center">
      <v-col cols="auto">
        <v-tabs scrollable>
          <v-tab v-for="tab in tabs" :key="tab.id" :to="tab.route" exact>
            {{ tab.name }}
          </v-tab>
        </v-tabs>
      </v-col>
      <v-col cols="auto">
        <v-menu offset-y>
          <template v-slot:activator="{ props }">
            <v-btn icon dark v-bind="props" :class="{ 'logged-in': isAuthenticated }">
              <v-icon dark>mdi-account-circle</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-if="isAuthenticated" @click="logout">
              <v-list-item-title>Se déconnecter</v-list-item-title>
            </v-list-item>
            <v-list-item v-else @click="goToLogin">
              <v-list-item-title>Se connecter / S'inscrire</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn icon dark @click="goToCart" class="ml-3" :class="{ 'cart-icon-active': cartItemCount > 0 }">
          <v-icon dark>mdi-cart</v-icon>
          <div class="cart-icon-wrapper" @click="goToCart">
            <v-badge
              :content="cartItemCount"
              color="red"
              v-if="cartItemCount > 0"
              overlap
              class="cart-badge"
            ></v-badge>
          </div>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import { useCartStore  } from '@/stores/cartStore';

const tabs = ref([
  { id: 1, name: 'Accueil', route: '/accueil' },
  { id: 2, name: 'Les Pokémons', route: '/pokemon' },
  { id: 3, name: 'Membres', route: '/Membres' },
]);

const userStore = useUserStore();
const router = useRouter();
const cartStore = useCartStore();

const isAuthenticated = computed(() => userStore.isAuthenticated);

const goToLogin = () => {
  router.push('/login');
};

const goToCart = () => {
  router.push('/cart');
};

const cartItemCount = computed(() => cartStore.cartItemCount);

const logout = () => {
  userStore.logoutUser();
  window.location.reload(); // Recharger la page après déconnexion
  router.push('/login');
};
</script>

<style scoped>
/* Styles si nécessaire */
.logged-in {
  background-color: #1976D2;
}
.cart-icon-active {
  background-color: #1976D2;
}
</style>
