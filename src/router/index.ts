import { 
  createRouter, 
  createWebHistory, 
  RouteRecordRaw 
} from "vue-router";
import Home from "../views/Home/index.vue";
import SlostAndAttrs from '../views/SlotsAndAttrs/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/SAA",
    name: "SAA",
    component: SlostAndAttrs
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
