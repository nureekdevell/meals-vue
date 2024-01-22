// Imports

import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue";


// Scripts

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,

})

// Exports
export default router

