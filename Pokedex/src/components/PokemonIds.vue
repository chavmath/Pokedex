<template>
  <div class="container-fluid autos" style="min-height: 100vh;">
    <img src="../assets/LogoPokemon.png" alt="Pokemon logo">
    <h2>IDs de Pokémon</h2>
    <div v-if="loggedIn"> <!-- Verifica el estado de inicio de sesión -->
      <table class=" table table-striped">
        <tr>
          <th>Nombre</th>
          <th>ID</th>
          <th>Imagen</th>
        </tr>
        <tr v-for="(pokemon, index) in pokemonList" :key="index">
          <td>{{ pokemon.name }}</td>
          <td>{{ index + 1 }}</td>
          <td><img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + (index + 1) + '.png'" alt="Pokemon logo"></td>
        </tr>
      </table>
    </div>
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
    // Hacer una llamada a la PokeAPI para obtener la lista de IDs
    fetch('https://pokeapi.co/api/v2/pokemon?')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.pokemonList = data.results
      })
  }
}
</script>

<style scoped>
img {
  width: 300px;
  height: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
