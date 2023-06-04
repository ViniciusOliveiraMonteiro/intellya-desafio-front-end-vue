import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { CIcon } from '@coreui/icons-vue';
import * as icons from '@coreui/icons';
import VueAwesomePaginate from "vue-awesome-paginate";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(vuetify);
app.use(createPinia())
app.use(router)
app.use(VueAwesomePaginate);
app.provide('icons', icons)
app.component('CIcon', CIcon)

app.mount('#app')
