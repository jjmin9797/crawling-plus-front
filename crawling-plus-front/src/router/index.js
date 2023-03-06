import { createRouter, createWebHistory } from "vue-router";
import FindRobots from "@/pages/find-robots";
const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'FindRobots',
            component: FindRobots
        }
    ]
})
export default router;