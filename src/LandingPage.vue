<template>
    <div class="landing-page">
      <h1 class="landing-title"></h1>
      <div class="button-container">
        <button type="button" class="btn btn-primary" @click="goToLogin">Iniciar sesión</button>
        <button type="button" class="btn btn-dark" @click="goToRegister">Registrarse</button>
      </div>
      <img class="character-image"  @click="goToCharacter" src="https://i0.wp.com/www.korosenai.es/wp-content/uploads/2020/10/diluc-genshin-impact.jpg?resize=628%2C471&ssl=1" alt="Imagen del personaje" />
      <p class="character-list-link"><router-link to="/character-list">Lista de personajes</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToLogin() {
        this.$router.push('/login');
      },
      goToRegister() {
        this.$router.push('/register');
      },
      goToCharacter() {
      this.$router.push('/character');
    }
    }
  };
  </script>
  
  <style scoped>
  .landing-page {
    background-image: url('https://www.xtrafondos.com/wallpapers/viajero-aether-y-lumine-from-genshin-impact-7761.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    height: 100vh;
    position: relative;
  }
  
  .landing-title {
    background-image: url('https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Genshin_Impact_logo.svg/2560px-Genshin_Impact_logo.svg.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top left;
    width: 200px;
    height: 100px;
    text-indent: -9999px;
    position: absolute;
    top: 20px;
    left: 20px;
  }
  
  .button-container {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  
  .login-button,
  .register-button {
    margin-left: 10px;
  }

  .character-image {
  cursor: pointer;
  width: 220px;
  height: 200px;
  position: absolute;
  top: 220px;
  left: 220px;
  border: 10px;
  border-radius: 50%;
}
.character-list-link {
  margin-top: 10px;
  font-size: 16px;
}
  </style>
  
  
  