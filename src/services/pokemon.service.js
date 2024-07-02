import Pokemon from '@/models/pokemons'; // Assurez-vous d'importer correctement le chemin de votre modèle Pokemon

const fetchPokemonById = async (pokemonId) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    if (!response.ok) {
      throw new Error('Pokemon not found');
    }
    const data = await response.json();
    console.log(data); // Pour vérification dans la console
    const pokemon = new Pokemon(pokemonId, data); // Créez une instance de Pokemon en utilisant la classe Pokemon
    return pokemon;
  } catch (error) {
    console.error('Error fetching Pokemon:', error.message);
    throw error; // Propagez l'erreur pour que le gestionnaire de l'appel puisse la gérer
  }
};

export default fetchPokemonById;
