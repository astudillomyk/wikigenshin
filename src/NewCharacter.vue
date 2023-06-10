<template>
    <div class="new-character">
      <h1>Nuevo Personaje</h1>
      <form @submit.prevent="createCharacter">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input type="text" id="name" v-model="character.name" required>
        </div>
        <div class="form-group">
          <label for="rarity">Rareza:</label>
          <select id="rarity" v-model="character.rarity" required>
            <option value="1">4 estrellas</option>
            <option value="2">5 estrellas</option>
          </select>
        </div>
        <div class="form-group">
          <label for="weapon">Arma:</label>
          <select id="weapon" v-model="character.weapon" required>
            <option value="1">Lanza</option>
            <option value="2">Mandoble</option>
            <option value="3">Espada Ligera</option>
            <option value="4">Catalizador</option>
            <option value="5">Arco</option>
          </select>
        </div>
        <div class="form-group">
          <label for="element">Elemento:</label>
          <select id="element" v-model="character.element" required>
            <option value="1">Pyro</option>
            <option value="2">Dendro</option>
            <option value="3">Electro</option>
            <option value="4">Anemo</option>
            <option value="5">Hydro</option>
            <option value="6">Geo</option>
            <option value="7">Cryo</option>
          </select>
        </div>
        <div class="form-group">
          <label for="gender">Género:</label>
          <select id="gender" v-model="character.gender" required>
            <option value="1">Masculino</option>
            <option value="2">Femenino</option>
            <option value="3">?</option>
          </select>
        </div>
        <div class="form-group">
          <label for="region">Región:</label>
          <select id="region" v-model="character.region" required>
            <option value="1">Mondstadt</option>
            <option value="2">Liyue</option>
            <option value="3">Inazuma</option>
            <option value="4">Sumeru</option>
            <option value="5">Fontaine</option>
            <option value="6">Snezhnaya</option>
          </select>
        </div>
        <div class="form-group">
          <label for="image">Imagen:</label>
          <input type="text" id="image" v-model="character.image" required>
        </div>
        <button type="submit">Crear Personaje</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        character: {
          name: '',
          rarity: '',
          weapon: '',
          element: '',
          gender: '',
          region: '',
          image: ''
        }
      };
    },
    methods: {
      createCharacter() {
        console.log('Nuevo personaje:', this.character);
        this.character = {
          name: '',
          rarity: '',
          weapon: '',
          element: '',
          gender: '',
          region: '',
          image: ''
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .new-character {
    text-align: center;
    margin-top: 20px;
    width: 500px;
    position: absolute;
    left: 450px;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  select {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  button[type="submit"] {
    padding: 10px 20px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  