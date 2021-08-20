import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import store from "./store";
import {
  Layout,
  Menu,
  SubMenu,
} from 'ant-design-vue'

createApp(App)
  .use(store)
  .use(Layout)
  .use(Menu)
  .use(router)
  .mount('#app')
