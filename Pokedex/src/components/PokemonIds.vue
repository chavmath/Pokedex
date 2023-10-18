<template>
  <div class="container-fluid autos" style="min-height: 100vh;">
    <img src="../assets/LogoPokemon.png" alt="Pokemon logo" style="width:300px; height:100px; display: block; 
    margin-left: auto; margin-right: auto; margin-top: 16px; margin-bottom: 0px;">
    <h2>Imágenes de Pokémon</h2>
    <div style="margin-bottom: 20px;">
      <button @click="limpiarPantalla" class="btn btn-danger">Limpiar Pantalla</button>
      <button @click="cargarInformacion" class="btn btn-primary" style="margin-left: 10px;">Cargar Información</button>
      <button :disabled="pokemonList.length === 0" @click="exportToPDF" class="btn btn-secondary" style="margin-left: 10px;">
        Exportar a PDF <i class="fas fa-file-pdf" style="margin-left: 5px;"></i>
      </button>
      <button :disabled="pokemonList.length === 0" @click="exportToExcel" class="btn btn-success" style="margin-left: 10px;">
        Exportar a Excel <i class="fas fa-file-excel" style="margin-left: 5px;"></i>
      </button>
    </div>
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
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import XLSX from 'xlsx/dist/xlsx.full.min.js';

export default {
  data() {
    return {
      pokemonList: [],
      originalPokemonList: [] // Almacena la lista original para poder restablecerla
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
        this.originalPokemonList = data.results // Almacena la lista original para poder restablecerla
      })
  },
  methods: {
    limpiarPantalla() {
      this.pokemonList = [];
    },
    cargarInformacion() {
      this.pokemonList = this.originalPokemonList;
    },
    exportToPDF() {
      const doc = new jsPDF();
      const tableData = this.pokemonList.map(pokemon => [pokemon.name]);
      doc.autoTable({
        head: [['Pokémon Name']],
        body: tableData,
      });
      doc.save('pokemon_list.pdf');
    },
    exportToExcel() {
      const worksheet = XLSX.utils.json_to_sheet(this.pokemonList.map(pokemon => ({ Name: pokemon.name })));
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'pokemon_list');
    },
    saveAsExcelFile(buffer, fileName) {
      const data = new Blob([buffer], { type: 'application/octet-stream' });
      const url = window.URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${fileName}.xlsx`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
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
  margin-top: 15px;
  margin-bottom: 15px;
}

</style>
