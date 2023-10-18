import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Inicio from '../src/components/Inicio.vue';
import PokemonList from '../src/components/PokemonList.vue';
import PokemonIds from '../src/components/PokemonIds.vue';
import Login from '../src/components/Login.vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import store from './store'; 

const routes = [
  { path: '/', component: Inicio },
  { path: '/pokemon-names', component: PokemonList },
  { path: '/pokemon-ids', component: PokemonIds },
  { path: '/login', component: Login },
  { path: '/about', component: () => import('../src/views/AboutView.vue')},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.use(store);

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else if (!store.getters.isLoggedIn) {
    next('/login');
  } else {
    next();
  }
});

app.mount('#app-vue');
