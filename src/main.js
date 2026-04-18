import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter } from './router'
import { vuetify } from './plugins/vuetify'

const app = createApp(App)

app.use(createRouter())
app.use(vuetify)

app.mount('#app')
