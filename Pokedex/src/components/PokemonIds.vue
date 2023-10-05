<template>
  <div>
    <h2>IDs de Pokémon</h2>
    <ul>
      <li v-for="pokemon in pokemonList" :key="pokemon.name">{{ pokemon.id }}</li>
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
    // Hacer una llamada a la PokeAPI para obtener la lista de IDs
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.pokemonList = data.results
      })
  }
}
</script>
