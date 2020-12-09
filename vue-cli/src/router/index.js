
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import About from '../views/About.vue';


const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/register', name: 'Register', component: Register },
    { path: '/login', name: 'Login', component: Login }
];

export default routes
