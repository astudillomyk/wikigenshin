import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import LandingPage from './LandingPage.vue';
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';
import CharacterPage from './CharacterPage.vue';
import CharacterList from './CharacterList.vue';
import UserPage from './UserPage.vue';
import AdminPage from './AdminPage.vue'
import NewCharacter from './NewCharacter.vue'


const routes = [
  { path: '/', component: LandingPage },
  { path: '/login', component: LoginForm },
  { path: '/register', component: RegisterForm },
  { path: '/character', component: CharacterPage },
  { path: '/character-list', component: CharacterList },
  { path: '/userpage', component: UserPage },
  { path: '/adminpage', component: AdminPage },
  { path: '/new-character', component: NewCharacter }
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');


