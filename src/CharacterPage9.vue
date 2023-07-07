<template>
    <div class="page-container">
      <div class="character-page">
        <h1>{{ character.name }}</h1>
        <img :src="character.image" alt="" class="img-fluid character-image">
        <p>{{ character.description }}</p>
        <h2>Rareza</h2>
        <p>{{ character.rarity }}</p>
        <h2>Elemento</h2>
        <p>{{ character.element }}</p>
        <h2>Tipo de arma</h2>
        <p>{{ character.weapon }}</p>
        <h2>Género</h2>
        <p>{{ character.gender }}</p>
        <h2>Región</h2>
        <p>{{ character.region }}</p>
        <ul class="list-group">
          <li v-for="ability in character.abilities" :key="ability" class="list-group-item">{{ ability }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        character: {
          name: '',
          image: '',
          description: '',
          abilities: [],
          rarity: '',
          weapon: '',
          region: '',
          gender: '',
          element: ''
        }
      };
    },
    mounted() {
      this.fetchCharacterData();
    },
    methods: {
      fetchCharacterData() {
        const characterId = '64a27e41b445d5c2e6ed804e';
        const apiUrl = `http://localhost:3000/character/${characterId}`;
  
        axios.get(apiUrl)
          .then(response => {
            const characterData = response.data;
            this.character.name = characterData.name;
            this.character.image = characterData.image;
            this.character.description = characterData.description;
            this.character.abilities = characterData.abilities;
            this.character.rarity = characterData.rarity;
            this.character.weapon = characterData.weapon;
            this.character.region = characterData.region;
            this.character.gender = characterData.gender;
            this.character.element = characterData.element;
          })
          .catch(error => {
            console.error('Error fetching character data:', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  .page-container {
    background-image: url('https://fondosmil.com/fondo/92209.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    padding: 20px;
  }
  
  .character-page {
    background-color: lightgray;
    text-align: center;
    padding: 20px;
    width: 1000px;
    height: auto;
    margin-left: 200px;
    border-radius: 5%;
  }
  
  .character-image {
    border: 2px solid black; 
    max-width: 400px; 
    margin: 0 auto; 
    border-radius: 5%;
  }
  </style>