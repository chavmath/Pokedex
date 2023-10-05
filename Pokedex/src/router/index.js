import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../components/Inicio.vue'
import PokemonList from '../components/PokemonList.vue'
import PokemonIds from '../components/PokemonIds.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Inicio },
  { path: '/pokemon-names', component: PokemonList },
  { path: '/pokemon-ids', component: PokemonIds }
]

const router = new VueRouter({
  routes
})

export default router
