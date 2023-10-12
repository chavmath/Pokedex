<template>
  <div class="container-fluid autos" style="min-height: 100vh;">
    <img src="../assets/LogoPokemon.png" alt="Pokemon logo" class="img-fluid mt-3">
    <h2 class="mt-3" style="color: white; margin-bottom: 30px; margin-top: 0px;">Nombres de Pokémon</h2>
    <div class="row">
      <div class="col-md-4" v-for="(pokemon, index) in pokemonList" :key="index">
        <div class="card mb-3" style="background-color: rgba(255, 217, 0, 0.863); color: black;">
          <img
            :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + (index + 1) + '.png'"
            class="card-img-top"
            :alt="pokemon.name"
            style="width: 100px; height: 100px; display: block; margin-left: auto; margin-right: auto; margin-top: 0px; margin-bottom: 0px; ">
          <div class="card-body">
            <h5 class="card-title">{{ pokemon.name }}</h5>
            <!-- <a :href="'#/' + (index + 1)" class="btn btn-primary">Detalles</a> -->
          </div>
        </div>
      </div>
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
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500&offset=0')
      .then(response => response.json())
      .then(data => {
        this.pokemonList = data.results
      })
  }
}
</script>
<style scoped>
ul {
  columns: 3;
  -webkit-columns: 3;
  -moz-columns: 3;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  padding: 0px;
  text-align: center;
  position: relative;
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