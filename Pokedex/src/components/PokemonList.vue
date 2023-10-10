<template>
  <div class="container-fluid autos" style="min-height: 100vh;">
    <img src="../assets/LogoPokemon.png" alt="Pokemon logo">
    <h2>Nombres de Pokémon</h2>
    <ul v-if="loggedIn"> <!-- Verifica el estado de inicio de sesión -->
      <li v-for="pokemon in pokemonList" :key="pokemon.name">{{ pokemon.name }}</li>
    </ul>    
    <div v-else>
      <p>Debes iniciar sesión para acceder a esta página.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemonList: []
    }
  },
  computed: {
    loggedIn() {
      // Accede al estado de inicio de sesión desde tu aplicación centralizada.
      return this.loggedIn;
    }
  },
  mounted() {
    // Hacer una llamada a la PokeAPI para obtener la lista de nombres
    fetch('https://pokeapi.co/api/v2/pokemon?')
      .then(response => response.json())
      .then(data => {
        this.pokemonList = data.results
      })
  }
}
</script>
<style scoped>
ul{
    list-style: none;
}
img{
        width: 300px;
        height: 100px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0px;
        margin-bottom: 0px;
    }
</style>