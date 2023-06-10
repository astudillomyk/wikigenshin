<template>
    <div class="character-page">
      <h2>Información del personaje</h2>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      document.body.classList.add('character-page-open');
    },
    beforeUnmount() {
      document.body.classList.remove('character-page-open');
    }
  };
  </script>
  
  <style scoped>
  .character-page {
    background-color: #fff;
    padding: 20px;
  }
  </style>
  