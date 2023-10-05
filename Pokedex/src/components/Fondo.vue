<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="background-image">
      <p>Componente de Fondo</p>
        <img src="@/assets/body_bg.png" alt="Fondo de pantalla" />
    </div>
  </template>
  
  <style scoped>
  .background-image {
    background-size: cover;
    background-position: center;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  </style>
  