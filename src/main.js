import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

const app = createApp(App)
    .use(router)
    .use(createPinia())
    .use(VueLazyload, {
        preload: 1.3,
        loading: 'path/to/loading-image.png',
        error: 'path/to/error-image.png'
    })

app.mount('#app')
