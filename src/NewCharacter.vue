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
          <option value="4 estrellas">4 estrellas</option>
          <option value="5 estrellas">5 estrellas</option>
        </select>
      </div>
      <div class="form-group">
        <label for="weapon">Arma:</label>
        <select id="weapon" v-model="character.weapon" required>
          <option value="Lanza">Lanza</option>
          <option value="Mandoble">Mandoble</option>
          <option value="Espada Ligera">Espada Ligera</option>
          <option value="Catalizador">Catalizador</option>
          <option value="Arco">Arco</option>
        </select>
      </div>
      <div class="form-group">
        <label for="element">Elemento:</label>
        <select id="element" v-model="character.element" required>
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
        <select id="gender" v-model="character.gender" required>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="?">?</option>
        </select>
      </div>
      <div class="form-group">
        <label for="region">Región:</label>
        <select id="region" v-model="character.region" required>
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
        <input type="text" id="image" v-model="character.image" required>
      </div>
      <button type="submit">Crear Personaje</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

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
    async createCharacter() {
      try {
        const response = await axios.post('http://localhost:3000/character', this.character);
        console.log('Personaje creado:', response.data);
        
        this.character = {
          name: '',
          rarity: '',
          weapon: '',
          element: '',
          gender: '',
          region: '',
          image: ''
        };
      } catch (error) {
        console.error(error);
      }
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
