import './index.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia';
import { Button, setConfig, frappeRequest, resourcesPlugin } from 'frappe-ui'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';



let app = createApp(App)
const pinia = createPinia();

setConfig('resourceFetcher', frappeRequest)

app.use(router)
app.use(pinia);
app.use(resourcesPlugin)
app.use(VueSweetalert2)
app.component('Button', Button)
app.mount('#app')
