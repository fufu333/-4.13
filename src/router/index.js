import { createApp } from 'vue';  
import { useRouter,createRouter, createWebHistory } from 'vue-router';  
import App from '../App.vue'; // 假设你的主组件是 App.vue  
  
// 导入组件  
import Home from '../components/Home.vue';  
import MovieList from '../components/MovieList.vue';  
import ProfilePage from '../components/ProfilePage.vue';  
import Shezhi from '../components/Shezhi.vue';  
import Search from '../components/Search.vue';
import Bofang from '../components/Bofang.vue';  
  
// 创建路由  
const routes = [  
  { path: '/', component: Home },  
  { path: '/movies', component: MovieList },  
  { path: '/profile', component: ProfilePage },  
  { path: '/Shezhi', component: Shezhi }, // 注意：组件名通常首字母大写  
  { path: '/search', component: Search },
  { path: '/bofang', component: Bofang}  
];  
  
const router = createRouter({  
  history: createWebHistory(),  
  routes, // 简写，相当于 routes: routes  
});  
  
const app = createApp(App);  
  
// 在 Vue 3 中，使用 app.use() 而不是 Vue.use()  
app.use(router);  
  
// 挂载应用实例  
app.mount('#app');