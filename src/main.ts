import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './index.css'
import './assets/styles/global.scss'
import 'flowbite'

createApp(App).use(store).mount('#app')
