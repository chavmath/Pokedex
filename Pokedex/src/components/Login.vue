<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <div class="login-form">
            <img src="../assets/LogoPokemon.png" alt="Pokemon logo" class="logo">
            <h2>Iniciar Sesión</h2>
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="username">Nombre de usuario:</label>
                    <input type="text" id="username" v-model="username" class="form-control" placeholder="Ingrese su usuario" required>
                </div>
                <div class="form-group">
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" v-model="password" class="form-control" placeholder="Ingrese su contraseña" required>
                </div>
                <button type="submit" class="btn btn-primary" @click="authenticate">Iniciar Sesión</button>
            </form>
        </div>
    </div>
</template>

  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
    authenticate() {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password,
      }).then((authenticated) => {
        if (authenticated) {
          this.$router.push('/');
        } else {
          alert('Credenciales incorrectas. Inténtalo de nuevo.');
        }
      });
    },
  },
};
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 82vh;
    min-height: 100%;
  }
  
  .login-form {
    max-width: 400px;
    max-height: 600px;
    padding: 60px;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: left;   
  }
  
  .logo {
    width: 250px;
    height: 100px;
    margin-bottom: 30px;
  }
  
  h2 {
    margin-top: 0px;
    margin-bottom: 40px;
    font-size: 24px;
    color: #3341a7;
    text-align: center;
  }
  
  .form-group {
        margin-left: auto;
        margin-right: auto;
        margin-top: 0px;
        margin-bottom: 10px;
  }
  
  label {
    display: block;
    font-weight: bold;
    color: #3341a7;
    margin-bottom: 10px;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  
  .btn-primary {
    width: 100%;
    padding: 10px;
    background-color: #3341a7;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px;
  }
  
  .btn-primary:hover {
    background-color: #293a80;
  }

  </style>
  