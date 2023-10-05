<template>
  <div>
    <h2>Nombres de Pokémon</h2>
    <ul>
      <li v-for="pokemon in pokemonList" :key="pokemon.name">{{ pokemon.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemonList: []
    }
  },
  mounted() {
    // Hacer una llamada a la PokeAPI para obtener la lista de nombres
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => response.json())
      .then(data => {
        this.pokemonList = data.results
      })
  }
}
</script>
