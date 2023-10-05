<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <Fondo />
      <h1>Bienvenido a la Pokedex</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: "Fondo-Inicio",
    components: {
      Fondo: () => import("./Fondo.vue"),
    },
  }
  </script>
  