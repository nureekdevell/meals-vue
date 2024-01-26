// Imports

import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue";
import MealList from "../views/MealList.vue";


// Scripts

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/letter/:letter',
        name: 'byLetter',
        component: MealList
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,

})

// Exports
export default router

