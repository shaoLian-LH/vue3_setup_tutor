// root function
import { createApp } from 'vue'
// components
import App from './App.vue'
import router from './router'
import store from './store'
// styles
import 'reset-css'
import './config/global.css'
import 'ant-design-vue/dist/antd.less'
import 'highlight.js/styles/monokai.css'
// components lib
import Antd from 'ant-design-vue'

createApp(App).use(store).use(Antd).use(router).mount('#app')
