import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "./components/Dashboard.vue"
import Render from "./components/Render.vue"
// const Foo = { template: Dashboard }
// const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/', name: 'dashboarh', component: Dashboard },
    // { path: '/bar', component: Bar }
    { path: '/book', name: 'book', component: Render },
    { path: '/heart', name: 'heart', component: Render },
    { path: '/notification', name: 'notificaton', component: Render },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
