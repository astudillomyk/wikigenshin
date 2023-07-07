<template>
  <div class="fondo">
    <div class="register-form">
      <h2>Registrarse</h2>
      <form @submit.prevent="registerUser">
        <div class="mb-3">
          <label for="name" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="name" v-model="name" placeholder="Ingrese su nombre">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Correo electrónico</label>
          <input type="email" class="form-control" id="email" v-model="email" placeholder="Ingrese su correo electrónico">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="password" v-model="password" placeholder="Ingrese su contraseña">
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">Confirmar contraseña</label>
          <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" placeholder="Confirme su contraseña">
        </div>
        <button type="submit" class="btn btn-primary">Registrarse</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post('http://localhost:3000/auth/register', {
          name: this.name,
          email: this.email,
          password: this.password
        });
        console.log(response.data); 
        this.name = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.fondo {
  background-image: url('https://www.xtrafondos.com/wallpapers/viajero-aether-y-lumine-from-genshin-impact-7761.jpg');
  height: 650px;
}

.register-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 100px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-image: url('https://www.xtrafondos.com/wallpapers/viajero-aether-y-lumine-from-genshin-impact-7761.jpg');
  background-size: cover;
  background-position: center;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: black;
  text-decoration: solid;
}

.mb-3 {
  text-decoration: solid;
  color: black;
}
</style>
