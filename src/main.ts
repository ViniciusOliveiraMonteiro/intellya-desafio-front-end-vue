import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { CIcon } from '@coreui/icons-vue';
import * as icons from '@coreui/icons';
import VueAwesomePaginate from "vue-awesome-paginate";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAwesomePaginate);
app.provide('icons', icons)
app.component('CIcon', CIcon)

app.mount('#app')
