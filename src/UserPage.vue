<template>
    <div class="user-page">
      <h1>Bienvenid@, {{ user.name }}</h1>
      <div class="user-profile">
        <div class="profile-container">
        <div class="profile-picture">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="Foto de perfil">
        </div>
        <div class="button-container">
        <button type="button" class="btn btn-primary" @click="goToNewCharacter">Crear Personaje</button>
    </div>
    <div class="button-containeredit">
    <button type="button" class="btn btn-primary" @click="goToEditCharacter">Editar Personaje</button>
</div>
<div class="button-containeredit2">
    <button type="button" class="btn btn-primary" @click="goToDeleteCharacter">Eliminar Personaje</button>
</div>
        <div class="profile-info">
          <p><strong>Nombre:</strong> {{ user.name }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
         
        </div>
    </div>
      </div>
      <button @click="logout">Cerrar sesión</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: '',
          profilePicture: '',
          email: '',
          
        }
      };
    },
    created() {
  this.user = {
    email: this.$route.query.email,
    name: this.$route.query.name
  };
},
   
    methods: {
      logout() {
        this.$router.push('/login');
      },
      goToNewCharacter() {
      this.$router.push('/new-character');
    },
    goToEditCharacter() {
      this.$router.push('/edit');
    },
    goToDeleteCharacter() {
      this.$router.push('/delete');
    }
    }
  };
  </script>
  
  <style scoped>
  .user-page {
    display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .user-profile {
    display: flex;
  align-items: center;
  margin-bottom: 20px;
  }
  
  .profile-picture {
    width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
  }
  
  .profile-picture img {
    width: 100%;
  height: 100%;
  object-fit: cover;
  }

  .profile-container {
  display: flex;
  background-color: #ffffff; 
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}
  
  .profile-info {
    text-align: left;
  }

  
  
  
h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

  button {
    position: absolute;
  top: 10px;
  right: 10px;
  }

  .button-container {
  position: fixed;
  bottom: 300px;
  left: 100px;
  width: 100px;
}

.button-containeredit {
  position: fixed;
  bottom: 300px;
  left: 200px;
  width: 100px;
}

.button-containeredit2 {
  position: fixed;
  bottom: 300px;
  left: 300px;
  width: 100px;
}
  </style>
  