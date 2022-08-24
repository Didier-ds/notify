import { createApp } from 'vue'
import './style.css'
import 'animate.css';
import App from './App.vue'
import notify from "./plugin/notify";

// console.log(notify)
// @ts-ignore
createApp(App).use(notify).mount('#app')
