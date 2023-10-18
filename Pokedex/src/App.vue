<template>
  <div id="app-vue">
    <header class="w-100">
      <router-link to="/">Inicio</router-link>
      <router-link to="/pokemon-names">Nombres de Pokémon</router-link>
      <router-link to="/pokemon-ids">IDs de Pokémon</router-link>
      <!-- Mostrar el botón de cierre de sesión si el usuario ha iniciado sesión -->
      <button v-if="loggedIn" @click="logout" class="btn btn-danger">
        <i class="fas fa-sign-out-alt"></i> Cerrar Sesión
      </button>
    </header>
    
    <div class="vista">
    <main >
      <router-view></router-view>
    </main>
    </div>

    <footer class="w-100">
      <p>©Pokédex</p>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    },
  },
};
</script>

<style>
body {
  position: relative;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  text-align: center;
}

ul{
    list-style: none;
}
#app-vue {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #333;
  margin:0px;
  padding:0px;
  height: 100vh;
  width: 100vw; 
  position: relative;
}

.bg{
  background: url('@/assets/body_bg.png') no-repeat center center fixed;
    background-size: cover;
    background-position: center;
    margin: 0;
    padding: 0;
}

header {
  background-color: #3341a7;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  max-width: 100%;
  /* position: absolute; */
  /* top: 0px; */
  z-index: 200;
  /* left: 0%; */

}

header a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: large;
}

main {
  padding: 20px;
}

footer {
  background-color: #e9bd2d;
  padding: 5px;
  /* position: relative; */
  max-width: 100%;
  text-align: center;
  color: white;  
  /* position: absolute; */
 /*  bottom: 0px; */
  z-index: 200;
  /* left: 0%; */
}

/* .vista{
   height: 500px;
   overflow: hidden;
   border: 1px solid #ccc;
} */

</style>

