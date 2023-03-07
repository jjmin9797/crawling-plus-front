import { createRouter, createWebHistory } from "vue-router";
import FindRobots from "@/pages/find-robots";
import AboutMe from "@/pages/about-me";
const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes: [
        {
            path: '/findrobots',
            name: 'FindRobots',
            component: FindRobots
        },
        {
            path: '/',
            name: 'AboutMe',
            component: AboutMe
        }
    ]
})
export default router;