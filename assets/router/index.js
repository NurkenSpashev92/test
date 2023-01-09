import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../components/auth/Login';
import Home from "../components/Home.vue";
import Registration from "../components/auth/Registration.vue";
import Catalog from "../components/catalog/Catalog.vue";
import NotFound from "../components/auth/NotFound.vue";

const router = createRouter({
    history: createWebHashHistory(),
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home,
        },
        {
            path: '/',
            name: 'login',
            component: Login,
        },
        {
            path: '/registration',
            name: 'Registration',
            component: Registration
        },
        {
            path: '/catalog',
            name: 'Catalog',
            component: Catalog
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: NotFound
        }
    ]
});

export default router;
