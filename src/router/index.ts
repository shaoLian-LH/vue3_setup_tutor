import { 
  createRouter, 
  createWebHistory, 
  RouteRecordRaw 
} from "vue-router";
// layouts
import BasicLayout from '@/layouts/BasicLayout.vue';
// components
import Home from "@/views/Home/index.vue";
import Reactivity from "@/views/Reactivity/index.vue";
import DynamicComponent from '@/views/DynamicComponents/index.vue';
import PropsAndEmits from '@/views/PropsAndEmit/index.vue'
import SlostAndAttrs from "@/views/SlotsAndAttrs/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: 'BasicLayout',
    component: BasicLayout,
    children: [{
      path: '/',
      name: "Home",
      component: Home,
    }, {
      path: "/Reactivity",
      name: "Reactivity",
      component: Reactivity
    }, {
      path: "/Dynamic",
      name: "Dynamic",
      component: DynamicComponent
    }, {
      path: "/PropsAndEmit",
      name: "PropsAndEmit",
      component: PropsAndEmits
    }, {
      path: "/SlostAndAttrs",
      name: "SlostAndAttrs",
      component: SlostAndAttrs
    }]
  },
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
