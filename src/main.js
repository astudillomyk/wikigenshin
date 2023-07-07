import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import LandingPage from './LandingPage.vue';
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';
import CharacterPage from './CharacterPage.vue';
import CharacterPage2 from './CharacterPage2.vue';
import CharacterPage3 from './CharacterPage3.vue';
import CharacterPage4 from './CharacterPage4.vue';
import CharacterPage5 from './CharacterPage5.vue';
import CharacterPage6 from './CharacterPage6.vue';
import CharacterPage7 from './CharacterPage7.vue';
import CharacterPage8 from './CharacterPage8.vue';
import CharacterPage9 from './CharacterPage9.vue';
import CharacterPage10 from './CharacterPage10.vue';
import CharacterList from './CharacterList.vue';
import UserPage from './UserPage.vue';
import AdminPage from './AdminPage.vue'
import NewCharacter from './NewCharacter.vue'
import EditForm from './EditForm.vue'
import DeleteForm from './DeleteForm.vue'



const routes = [
  { path: '/', component: LandingPage },
  { path: '/login', component: LoginForm },
  { path: '/register', component: RegisterForm },
  { path: '/character', component: CharacterPage },
  { path: '/character2', component: CharacterPage2 },
  { path: '/character3', component: CharacterPage3 },
  { path: '/character4', component: CharacterPage4 },
  { path: '/character5', component: CharacterPage5 },
  { path: '/character6', component: CharacterPage6 },
  { path: '/character7', component: CharacterPage7 },
  { path: '/character8', component: CharacterPage8 },
  { path: '/character9', component: CharacterPage9 },
  { path: '/character10', component: CharacterPage10 },
  { path: '/character-list', component: CharacterList },
  { path: '/userpage', name:'UserPage', component: UserPage },
  { path: '/adminpage', component: AdminPage },
  { path: '/new-character', component: NewCharacter },
  { path: '/edit', component: EditForm },
  { path: '/delete', component: DeleteForm }
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');


