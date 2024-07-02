import { defineStore } from 'pinia';
import { useUserStore } from '@/stores/userStore';

const likedPokemons = computed(() => membersStore.likedPokemonsList);

export const useMembersStore = defineStore({
  id: 'members',
  state: () => ({
    likedPokemons: []
  }),
  actions: {
    addLikedPokemon(pokemon) {
      // Vérifie si le Pokémon est déjà dans likedPokemons
      if (!this.likedPokemons.some(p => p.id === pokemon.id)) {
        this.likedPokemons.push(pokemon);
        console.log('Added to likedPokemons:', pokemon.name);
        this.saveMembersStore();
      }
    },
    removeLikedPokemon(pokemonId) {
      const index = this.likedPokemons.findIndex(p => p.id === pokemonId);
      if (index !== -1) {
        this.likedPokemons.splice(index, 1);
        console.log('Removed from likedPokemons:', pokemonId);
        this.saveMembersStore();
      }
    },
   
   
    clearLikedPokemons() {
      this.likedPokemons = [];
      console.log('Cleared likedPokemons.');
      this.saveMembersStore();
    },
   
    saveMembersStore() {
      const userStore = useUserStore();
      if (userStore.user) {
        const userKey = `members_store_${userStore.user.userId}`;
        localStorage.setItem(userKey, JSON.stringify(this.likedPokemons));
      } else {
        console.error('User not authenticated. Cannot save members store.');
      }
    },
    
  
    loadMembersStore() {
      const userStore = useUserStore();
      if (userStore.user) {
        const userKey = `members_store_${userStore.user.userId}`;
        const storedData = localStorage.getItem(userKey);
        if (storedData) {
          this.likedPokemons = JSON.parse(storedData);
        } else {
          this.likedPokemons = []; // Assurez-vous que likedPokemons est initialisé au cas où il n'y aurait pas de données
        }
      } else {
        console.error('User not authenticated. Cannot load members store.');
      }
    },
  
    initializeMembersStore() {
      const userStore = useUserStore();
      if (userStore.user) {
        const userKey = `members_store_${userStore.user.userId}`;
        const storedData = localStorage.getItem(userKey);
        if (storedData) {
          this.likedPokemons = JSON.parse(storedData);
          console.log('Initialized likedPokemons:', this.likedPokemons);
        }
      } else {
        console.error('User not authenticated. Cannot initialize members store.');
      }
    }
  },
  getters: {
    likedPokemonsList: state => state.likedPokemons
  }
});
