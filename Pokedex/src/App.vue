<template>
  <div id="app-vue">
    <header>
      <router-link to="/">Inicio</router-link>
      <router-link to="/pokemon-names">Nombres de Pokémon</router-link>
      <router-link to="/pokemon-ids">IDs de Pokémon</router-link>
      <!-- Mostrar el botón de cierre de sesión si el usuario ha iniciado sesión -->
      <button v-if="loggedIn" @click="logout" class="btn btn-danger">
        <i class="fas fa-sign-out-alt"></i> Cerrar Sesión
      </button>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
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
}

.bg{
  background: url('@/assets/body_bg.png') no-repeat center center fixed;
    background-size: cover;
    background-position: center;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
}

header {
  background-color: #3341a7;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  max-width: 100%;
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
  position: relative;
  bottom: 0;
  max-width: 100%;
  text-align: center;
  color: white;  
}

</style>

