import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CityWeather from "@/components/CityWeather.vue";
import CitiesList from "@/views/CitiesList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/CitiesList',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/CitiesList.vue')
      component:CitiesList
    },
    {
      path:'/ville',
      name:'weather',
      component:CityWeather
    }

  ]
})

export default router;
