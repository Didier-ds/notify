import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import notify from "./plugin/notify";

// console.log(notify)
createApp(App).use(notify).mount('#app')
