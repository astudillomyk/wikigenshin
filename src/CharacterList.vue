<template>
    <div class="character-list">
        <br>
      <h2>Listado de Personajes</h2>
      <br>
      <div class="row">
        <div class="col-md-4" v-for="character in characters" :key="character.id">
          <div class="card mb-3">
            <img :src="character.image" class="card-img-top" alt="Imagen del personaje">
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
  export default {
    data() {
      return {
        characters: [
          { id: 1, name: 'Personaje 1', image: 'https://i0.wp.com/www.korosenai.es/wp-content/uploads/2020/10/diluc-genshin-impact.jpg?resize=628%2C471&ssl=1' },
          { id: 2, name: 'Personaje 2', image: 'https://i0.wp.com/www.korosenai.es/wp-content/uploads/2020/12/zhongli-genshin-impact.jpg?fit=640%2C480&ssl=1' },
          { id: 3, name: 'Personaje 3', image: 'https://i0.wp.com/www.korosenai.es/wp-content/uploads/2021/08/shogun-raiden-genshin-impact.jpg?w=640&ssl=1' },
          { id: 4, name: 'Personaje 4', image: 'https://i0.wp.com/www.korosenai.es/wp-content/uploads/2023/01/alhacen-genshin-impact.jpg?w=640&ssl=1' },
          { id: 5, name: 'Personaje 5', image: 'https://i0.wp.com/www.korosenai.es/wp-content/uploads/2021/05/eula-genshin-impact.jpg?w=640&ssl=1' },
          { id: 6, name: 'Personaje 6', image: 'https://i0.wp.com/www.korosenai.es/wp-content/uploads/2022/05/yelan-genshin-impact.jpg?w=640&ssl=1' },
          { id: 7, name: 'Personaje 7', image: 'https://i0.wp.com/www.korosenai.es/wp-content/uploads/2021/02/xiao-genshin-impact.jpg?w=640&ssl=1' },
          { id: 8, name: 'Personaje 8', image: 'https://i0.wp.com/www.korosenai.es/wp-content/uploads/2021/08/yoimiya-genshin-impact.jpg?w=640&ssl=1' },
          { id: 9, name: 'Personaje 9', image: 'https://i0.wp.com/www.korosenai.es/wp-content/uploads/2022/03/kamisato-ayato-genshin-impact.jpg?w=640&ssl=1' },
          { id: 10, name: 'Personaje 10', image: 'https://i0.wp.com/www.korosenai.es/wp-content/uploads/2021/07/kamisato-ayaka-genshin-impact.jpg?w=640&ssl=1' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>

  .h2{
    text-align: center;
  }
  .character-list {
    background-color: antiquewhite;
  }
  
 
  </style>
  
  