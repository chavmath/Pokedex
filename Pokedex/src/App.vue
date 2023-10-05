<template>
  <div id="app-vue">
    <header>
      <router-link to="/">Inicio</router-link>
      <router-link to="/pokemon-names">Nombres de Pokémon</router-link>
      <router-link to="/pokemon-ids">IDs de Pokémon</router-link>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <p>© 2023 Tu Aplicación de la Pokedex</p>
    </footer>
  </div>
</template>

<style>
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
    overflow: hidden;
}

header {
  background-color: #4caf50;
  padding: 10px;
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
  background-color: #4caf50;
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: white;
}
</style>
