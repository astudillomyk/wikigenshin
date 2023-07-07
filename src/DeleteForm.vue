<template>
    <div>
      <h1>Lista de Personajes</h1>
      <ul>
        <li v-for="character in characters" :key="character._id">
          <div class="character-info">
            <img :src="character.image" :alt="character.name" class="character-image2">
            <div class="character-details">
              <h3>{{ character.name }}</h3>
              <button @click="deleteCharacter(character.name)" class="btn btn-danger">Eliminar</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        characters: []
      };
    },
    mounted() {
      this.fetchCharacters();
    },
    methods: {
      async fetchCharacters() {
        try {
          const response = await fetch('http://localhost:3000/characters');
          if (response.ok) {
            this.characters = await response.json();
          } else {
            console.error('Error al obtener los personajes:', response.status);
          }
        } catch (err) {
          console.error('Error en la solicitud:', err);
        }
      },
      async deleteCharacter(characterName) {
        try {
          const response = await fetch(`http://localhost:3000/characters/${characterName}`, {
            method: 'DELETE'
          });
  
          if (response.ok) {
            console.log('Personaje eliminado correctamente');
            this.fetchCharacters();
          } else {
            console.error('Error al eliminar el personaje:', response.status);
          }
        } catch (err) {
          console.error('Error en la solicitud:', err);
        }
      }
    }
  }
  </script>
  
  <style>
  .character-info {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .character-image2 {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 10px;
  }
  
  .character-details {
    display: flex;
    align-items: center;
  }
  
  .btn-danger {
    margin-left: 10px;
  }
  </style>
  