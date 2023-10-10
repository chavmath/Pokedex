<template>
  <div id="app-vue">
    <header>
      <!-- div class bg-primary -->
      <router-link to="/login">Iniciar Sesión</router-link> <!-- Enlace a la página de inicio de sesión -->
      <router-link to="/">Inicio</router-link>
      <router-link to="/pokemon-names">Nombres de Pokémon</router-link>
      <router-link to="/pokemon-ids">IDs de Pokémon</router-link>        
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <!-- div class bg-warning -->
      <p>©Pokédex</p>
    </footer>
  </div>
</template>

<style>
body {
  position: relative;
  min-height: 100vh;
  margin: 0;
  padding: 0;
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
  padding: 15px;
  display: flex;
  justify-content: space-around;
}

header a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

main {
  padding: 20px;
}

footer {
  background-color: #e9bd2d;
  padding: 5px;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: white;
}
table{
  color:white;
}
</style>
