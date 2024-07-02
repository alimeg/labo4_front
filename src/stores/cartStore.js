
import { defineStore } from 'pinia';
import { useUserStore } from '@/stores/userStore';

import Pokemon from '@/models/pokemons'; // Adjust the path to your Pokemon model

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: []
  }),
  actions: {
    addToCart(pokemonData) {
      // Verify the data received here
      console.log('Pokemon data received:', pokemonData);

      // Check the necessary data properties to create an instance of Pokemon
      if (!pokemonData || !(pokemonData instanceof Pokemon)) {
        console.error('Invalid or undefined pokemonData:', pokemonData);
        return;
      }

      // Create an instance of Pokemon if not already
      const pokemon = pokemonData instanceof Pokemon ? pokemonData : new Pokemon(pokemonData.id, pokemonData);

      // Check if the Pokemon instance is valid
      if (!pokemon || !pokemon.id || !pokemon.name || !pokemon.sprites || !pokemon.stats) {
        console.error('Missing or invalid data properties in Pokemon instance:', pokemon);
        return;
      }

      // Find if the Pokemon is already in the cart
      const existingItem = this.items.find(item => item.id === pokemon.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        const price = pokemon.getPrice(); // Use getPrice() method of Pokemon
        if (isNaN(price)) {
          console.error(`Invalid price for pokemon: ${pokemon.name}`, pokemon);
        } else {
          this.items.push({ ...pokemon, price: Number(price), quantity: 1 });
        }
      }

      console.log('Items after adding:', this.items);
      this.saveCart();
    },
      
    removeFromCart(pokemonId) {
      const index = this.items.findIndex(item => item.id === pokemonId);
      if (index !== -1) {
        if (this.items[index].quantity > 1) {
          this.items[index].quantity--;
        } else {
          this.items.splice(index, 1);
        }
        console.log('Items after removal:', this.items);
        this.saveCart();
      }
    },
    clearCart() {
      this.items = [];
      console.log('Items after clearing:', this.items);
      this.saveCart();
    },
    saveCart() {
      const userStore = useUserStore();
      if (userStore.user) {
        localStorage.setItem(`cartItems_${userStore.user.userId}`, JSON.stringify(this.items));
      }
    },
    initializeCart() {
      const userStore = useUserStore();
      if (userStore.user) {
        const savedCart = localStorage.getItem(`cartItems_${userStore.user.userId}`);
        this.items = savedCart ? JSON.parse(savedCart) : [];
        console.log('Initialized cart:', this.items);
      }
    }
  },
  getters: {
    cartItems: (state) => state.items,
    cartItemCount: (state) => {
      return state.items.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
    },
   
    totalPrice: (state) => {
        return state.items.reduce((total, item) => {
          const itemPrice = item.price;
          return total + (itemPrice * item.quantity);
        }, 0);
      }
  
}
});


    
 