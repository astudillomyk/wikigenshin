<template>
  <div class="fondo">
  <div class="login-form">
    <h2>Iniciar sesión</h2>
    <form>
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
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  }
};
</script>

<style scoped>
.fondo{
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
.mb-3{
  text-decoration: solid;
  color: black;
}
</style>

  