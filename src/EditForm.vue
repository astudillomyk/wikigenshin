<template>
    <div>
      <h1>Lista de Personajes</h1>
      <div v-if="message" class="alert" :class="message.type">
        {{ message.text }}
      </div>
      <ul class="list-group">
        <li v-for="character in characters" :key="character._id" class="list-group-item">
          <img :src="character.image" :alt="character.name" class="img-fluid">
          <h3>{{ character.name }}</h3>
          <div class="form-container">
            <div class="form-group">
              <label for="name">Nombre:</label>
              <input type="text" id="name" v-model="character.name" required class="form-control">
            </div>
            <div class="form-group">
              <label for="rarity">Rareza:</label>
              <select id="rarity" v-model="character.rarity" required class="form-control">
                <option value="4 estrellas">4 estrellas</option>
                <option value="5 estrellas">5 estrellas</option>
              </select>
            </div>
            <div class="form-group">
              <label for="weapon">Arma:</label>
              <select id="weapon" v-model="character.weapon" required class="form-control">
                <option value="Lanza">Lanza</option>
                <option value="Mandoble">Mandoble</option>
                <option value="Espada Ligera">Espada Ligera</option>
                <option value="Catalizador">Catalizador</option>
                <option value="Arco">Arco</option>
              </select>
            </div>
            <div class="form-group">
              <label for="element">Elemento:</label>
              <select id="element" v-model="character.element" required class="form-control">
                <option value="Pyro">Pyro</option>
                <option value="Dendro">Dendro</option>
                <option value="Electro">Electro</option>
                <option value="Anemo">Anemo</option>
                <option value="Hydro">Hydro</option>
                <option value="Geo">Geo</option>
                <option value="Cryo">Cryo</option>
              </select>
            </div>
            <div class="form-group">
              <label for="gender">Género:</label>
              <select id="gender" v-model="character.gender" required class="form-control">
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="?">?</option>
              </select>
            </div>
            <div class="form-group">
              <label for="region">Región:</label>
              <select id="region" v-model="character.region" required class="form-control">
                <option value="Mondstadt">Mondstadt</option>
                <option value="Liyue">Liyue</option>
                <option value="Inazuma">Inazuma</option>
                <option value="Sumeru">Sumeru</option>
                <option value="Fontaine">Fontaine</option>
                <option value="Snezhnaya">Snezhnaya</option>
              </select>
            </div>
            <div class="form-group">
              <label for="image">Imagen:</label>
              <input type="text" id="image" v-model="character.image" required class="form-control">
            </div>
            <button @click="updateCharacter(character)" class="btn btn-primary">Actualizar</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        characters: [],
        message: null
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
            this.showMessage('Error al obtener los personajes', 'alert-danger');
          }
        } catch (err) {
          this.showMessage('Error en la solicitud', 'alert-danger');
        }
      },
      async updateCharacter(character) {
        try {
          const response = await fetch(`http://localhost:3000/character/${character._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(character)
          });
  
          if (response.ok) {
            this.showMessage('Personaje actualizado correctamente', 'alert-success');
          } else {
            this.showMessage('Error al actualizar el personaje', 'alert-danger');
          }
        } catch (err) {
          this.showMessage('Error en la solicitud', 'alert-danger');
        }
      },
      showMessage(text, type) {
        this.message = { text, type };
        setTimeout(() => {
          this.message = null;
        }, 3000);
      }
    }
  }
  </script>
  
  <style>
  .img-fluid {
    max-width: 300px;
    height: auto;
    
  }
  .alert {
    margin-bottom: 10px;
    padding: 10px;
  }
  .alert-danger {
    background-color: #f8d7da;
    color: #721c24;
  }
  .alert-success {
    background-color: #d4edda;
    color: #155724;
  }
  .form-container {
    max-width: 400px;
    margin: 0 auto;
  }
  </style>
  
  
  
  
  
  


  