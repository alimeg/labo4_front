export default class Pokemon {
    constructor(id, data) {
        this.id = id;
        this.name = data.name;
        this.image = data.sprites.front_default;
        this.weight = this.convertWeight(data.weight);
        this.height = this.convertHeight(data.height);
        this.types = this.extractTypes(data.types); // Utilisation de la méthode extractTypes
        this.stats = this.extractStats(data.stats); // Utilisation de la méthode extractStats
        this.abilities = this.extractAbilities(data.abilities);
        this.moves = this.extractMoves(data.moves);
        this.species = data.species.name;
        this.forms = data.forms.map(form => form.name);
        this.baseExperience = data.base_experience;
        this.sprites = {
            front_default: data.sprites.front_default,
            front_shiny: data.sprites.front_shiny,
            back_default: data.sprites.back_default,
            back_shiny: data.sprites.back_shiny,
        };
    }

    convertWeight(weight) {
        return `${weight / 10} kg`;
    }

    convertHeight(height) {
        return `${height / 10} m`;
    }

    extractTypes(types) {
        if (!types || !Array.isArray(types)) {
            console.error('Invalid types data:', types);
            return [];
        }
        return types.map(type => type.type && type.type.name);
    }

    extractStats(stats) {
        if (!stats || !Array.isArray(stats)) {
            console.error('Invalid stats data:', stats);
            return [];
        }
        return stats.map(stat => ({
            name: stat.stat && stat.stat.name,
            base_stat: stat.base_stat,
        }));
    }

    extractAbilities(abilities) {
        if (!abilities || !Array.isArray(abilities)) {
          console.error('Invalid abilities data:', abilities);
          return [];
        }
      
        try {
          return abilities.map((ability) => {
            return ability.ability && ability.ability.name ? ability.ability.name : 'Unknown';
          });
        } catch (error) {
          console.error('Error extracting abilities:', error.message);
          return [];
        }
      }      
      


      extractMoves(moves) {
        if (!moves) return [];
        try {
          return moves.map(move => ({
            name: move.name,
          }));
        } catch (error) {
          console.error('Error extracting moves:', error.message);
          return [];
        }
      }
      

      getPrice() {
        const baseStatsTotal = this.totalBaseStats();
        const priceMultiplier = 0.1; // Multiplier par 0.5
        const price = baseStatsTotal * priceMultiplier;
        return price;
      }
      
      
      totalBaseStats() {
        if (!this.stats) return 0;
        try {
          return this.stats.reduce((total, stat) => total + stat.base_stat, 0);
        } catch (error) {
          console.error('Error getting total base stats:', error.message);
          return 0;
        }
      }
      
      
}
