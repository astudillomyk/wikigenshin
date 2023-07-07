<template>
  <div class="character-list">
    <button class="back-button" @click="goToHomePage">&#8592; Volver</button>
    <br>
    <h2 class="h2">Listado de Personajes</h2>
    <br>
    <div class="row">
      <div class="col-md-4" v-for="(character, index) in characters" :key="character.id">
        <div class="card mb-3">
          <img :src="character.image" class="card-img-top" alt="Imagen del personaje" @click="goToCharacter(index)">
          <div class="card-body">
            <h5 class="card-title">{{ character.name }}</h5>
            <p class="card-text">Descripción del personaje</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    goToCharacter(index) {
      if (index >= 1 && index <= 9) {
        const characterId = index + 1;
        this.$router.push(`/character${characterId}`);
      } else {
        this.$router.push('/character');
      }
    },
    goToHomePage() {
      window.location.href = 'http://localhost:8080';
    }
  },

  data() {
    return {
      characters: []
    };
  },
  created() {
    axios.get('http://localhost:3000/characters')
      .then(response => {
        this.characters = response.data.map(character => ({
          id: character.id,
          name: character.name,
          image: character.image
        }));
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>

<style scoped>
.h2 {
  text-align: center;
}

.character-list {
  background-image: url("https://fondosmil.com/fondo/92209.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.card {
  margin: 20px; 
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: black;
  cursor: pointer;
}
</style>
