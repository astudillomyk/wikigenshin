<template>
    <div class="admin-page">
      <h1>Bienvenid@, {{ admin.firstName }} {{ admin.lastName }}</h1>
      <div class="admin-profile">
        <div class="profile-container">
        <div class="profile-picture">
          <img :src="admin.profilePicture" alt="Foto de perfil">
        </div>
        <div class="button-container">
        <button type="button" class="btn btn-primary" @click="goToNewCharacter">Crear Personaje</button>
    </div>
<div class="button-containeredit">
    <button type="button" class="btn btn-primary">Editar Personaje</button>
</div>
<div class="button-containerdelete">
    <button type="button" class="btn btn-primary">Eliminar Personaje</button>
</div>
        <div class="profile-info">
          <p><strong>Nombre:</strong> {{ admin.firstName }} {{ admin.lastName }}</p>
          <p><strong>Email:</strong> {{ admin.email }}</p>
          <p><strong>Teléfono:</strong> {{ admin.phone }}</p>
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
        admin: {
          firstName: '',
          lastName: '',
          profilePicture: '',
          email: '',
          phone: ''
        }
      };
    },
    created() {
      this.admin = {
        firstName: 'Cristiano',
        lastName: 'Ronaldo',
        profilePicture: 'https://media.tenor.com/NF6ixwAmrTMAAAAd/cristiano-ronaldo-drinking.gif',
        email: '123@123.com',
        phone: '123456789'
      };
    },
    methods: {
      logout() {
        this.$router.push('/login');
        
      },
      goToNewCharacter() {
      this.$router.push('/new-character');
    }
    }
  };
  </script>
  
  <style scoped>
  .admin-page {
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
  
  .admin-profile {
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

.button-containerdelete {
  position: fixed;
  bottom: 300px;
  left: 300px;
  width: 100px;
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
  </style>
  