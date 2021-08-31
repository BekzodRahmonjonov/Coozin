import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
// import VueSlickCarousel from 'vue-slick-carousel'
  // optional style for arrows & dots
  // import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

const app = createApp(App)
// app.component('VueSlickCarousel', VueSlickCarousel)

app.use(router).use(store).mount('#app')
