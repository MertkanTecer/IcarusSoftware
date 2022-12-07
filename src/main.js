import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './assets/tailwind.css'
// ..
AOS.init();
library.add(faChevronRight)
library.add(faChevronLeft)
const app = createApp(App)
app.use(router)
app.component("font-awesome-icon",FontAwesomeIcon)
app.use(store)
app.mount('#app')
