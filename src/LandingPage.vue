<template>
  <div class="landing-page">
    <video class="video-background" autoplay muted loop>
      <source src="https://webstatic.hoyoverse.com/upload/contentweb/2021/04/07/3e78e808a274ec2caf5dce50012d62ad_3073755638184960996.mp4" type="video/mp4">
    </video>
    <h1 class="landing-title"></h1>
    <div class="button-container">
      <button type="button" class="btn btn-primary" @click="goToLogin">Iniciar sesión</button>
      &nbsp;
      <button type="button" class="btn btn-dark" @click="goToRegister">Registrarse</button>
    </div>
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
    }
  }
};
</script>

<style scoped>
.landing-page {
  text-align: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  display: flex;
  align-items: center;
}

.login-button,
.register-button {
  margin-left: 10px;
}


.character-list-link {
  margin-top: 10px;
  font-size: 16px;
  margin-left: 10px;
  position: relative;
  z-index: 1;
}
</style>



  
  