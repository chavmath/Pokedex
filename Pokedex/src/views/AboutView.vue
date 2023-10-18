<template>
  <div class="container-fluid">
    <div class="w*100 fixed-top bg-danger">header</div>
    <div class="w-100 bg-info h-50">componente</div>
    <div class="w-100 fixed-bottom bg-success">footer</div>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      // Accede al estado de inicio de sesión desde tu aplicación centralizada.
      return this.loggedIn;
    }
  }
}
</script>

<style>

</style>
