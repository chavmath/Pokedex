import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Inicio from '../src/components/Inicio.vue';
import PokemonList from '../src/components/PokemonList.vue';
import PokemonIds from '../src/components/PokemonIds.vue';
import Login from '../src/components/Login.vue';

const routes = [
  { path: '/', component: Inicio },
  { path: '/pokemon-names', component: PokemonList },
  { path: '/pokemon-ids', component: PokemonIds },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);

// Variable para controlar el estado de inicio de sesión
const loggedIn = false;

// Guardia de navegación para verificar el inicio de sesión
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    // Si el usuario intenta acceder a la página de inicio de sesión, permitir el acceso.
    next();
  } else if (!loggedIn) {
    // Si el usuario no ha iniciado sesión y está intentando acceder a otra página, redirigirlo a la página de inicio de sesión.
    next('/login');
  } else {
    // Si el usuario ha iniciado sesión, permitir el acceso a la página solicitada.
    next();
  }
});

app.mount('#app-vue');
