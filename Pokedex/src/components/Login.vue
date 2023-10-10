<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <div class="login-form">
            <img src="../assets/LogoPokemon.png" alt="Pokemon logo" class="logo">
            <h2>Iniciar Sesión</h2>
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="username">Nombre de usuario:</label>
                    <input type="text" id="username" v-model="username" class="form-control" placeholder="Ingrese su nombre de usuario" required>
                </div>
                <div class="form-group">
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" v-model="password" class="form-control" placeholder="Ingrese su contraseña" required>
                </div>
                <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
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
      login() {
        if (this.username === "usuario" && this.password === "contraseña") {
          this.$router.push("/"); 
        } else {
          alert("Credenciales incorrectas. Inténtalo de nuevo.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
  }
  
  .login-form {
    max-width: 400px;
    padding: 40px;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: left;   
  }
  
  .logo {
    width: 200px;
    height: 100px;
    margin-bottom: 20px;
    margin-top: 0px;
  }
  
  h2 {
    margin: 0 0 20px;
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
    width: 90%;
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
    margin-top: 10px;
  }
  
  .btn-primary:hover {
    background-color: #293a80;
  }

  </style>
  