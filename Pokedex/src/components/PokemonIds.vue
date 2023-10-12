<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="container-fluid autos" style="min-height: 100vh;">
    <img src="../assets/LogoPokemon.png" alt="Pokemon logo" style="width:300px; height:100px; display: block; 
    margin-left: auto; margin-right: auto; margin-top: 16px; margin-bottom: 0px;">
    <h2>Imágenes de Pokémon</h2>
    <table class="table table-striped">
      <tr style="align-items: center; color: white;">
        <th>Fase Inicial</th>
        <th>1ra Evolución</th>
        <th>2da Evolución</th>
      </tr>
      <tr v-for="rowIndex in Math.ceil(pokemonList.length / 3)" :key="rowIndex">
        <td v-for="columnIndex in 3" :key="columnIndex">
          <img style="background: none;" v-if="(rowIndex * 3 + columnIndex - 3) < pokemonList.length"
                  :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + (rowIndex * 3 + columnIndex -3) + '.png'"
                  :alt="pokemonList[rowIndex * 3 + columnIndex - 3].name">
        </td>
      </tr>

    </table>
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
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500&offset=0')
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
  width: 200px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 0px;
}

.table {
  margin-top: 50px;
  width: 100%;
  border-collapse: collapse;
}

th,td {
  width: 33.33%;
  text-align: center;
}

h2{
  color: white;
  margin-top: 30px;
}

</style>