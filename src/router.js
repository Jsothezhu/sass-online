import { createRouter,createWebHashHistory } from 'vue-router'


const routes = [
    {
        path:'/',
        redirect:"/home"
    },
    {
        path:'/home',
        name:"home",
        component:()=>import("./views/Home.vue")},
    {
        path:'/login',
        name:"login",
        component: ()=>import('./views/login.vue')
    },
    {
        path: '/course',
        name:"course",
        component:()=>import('./views/Course.vue')
    },
    {
        path: "/course-info/:id",
        name: "CourseInfo",
        component: () => import( "./views/Course-Info.vue"),
    },
    {
        path:'/course-play',
        name:'course-play',
        component: () => import('./views/CoursePlay.vue')
    },
    {
        path: "/car",
        name: "Car",
        component: () => import( "./views/Car.vue")
    },
    {
        path: "/confirmOrder",
        name: "ConfirmOrder",
        component: () => import("./views/ConfirmOrder.vue"),
    },
]


const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})


export default router
