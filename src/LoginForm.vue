<template>
  <div class="fondo">
    <div class="login-form">
      <h2>Iniciar sesión</h2>
      <form @submit.prevent="loginUser">
        <div class="mb-3">
          <label for="email" class="form-label">Correo electrónico</label>
          <input type="email" class="form-control" id="email" v-model="email" placeholder="Ingrese su correo electrónico">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="password" v-model="password" placeholder="Ingrese su contraseña">
        </div>
        <button type="submit" class="btn btn-primary">Iniciar sesión</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
  async loginUser() {
    try {
      const registeredUsersResponse = await axios.get('http://localhost:3000/auth/register');
      const registeredUsers = registeredUsersResponse.data;

      if (Array.isArray(registeredUsers) && registeredUsers.length > 0) {
        const matchedUser = registeredUsers.find(
          user => user.email === this.email && user.password === this.password
        );

        if (matchedUser) {
          const user = {
            email: matchedUser.email,
            name: matchedUser.name
          };
          this.$router.push({ path: '/userpage', query: user });
        } else {
          console.log('Inicio de sesión fallido');
        }
      } else {
        console.log('No hay usuarios registrados');
      }
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

.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 200px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-image: url('https://www.xtrafondos.com/wallpapers/viajero-aether-y-lumine-from-genshin-impact-7761.jpg');
  background-size: cover;
  background-position: center;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  text-decoration: solid;
  color: black;
}

.mb-3 {
  text-decoration: solid;
  color: black;
}
</style>
