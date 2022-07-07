import { createApp } from 'vue'
import router from "./router";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import store from "./store/index";
//全局清除样式
import "./common/css/global.css";


createApp(App).use(router).use(ElementPlus).use(store).mount('#app')