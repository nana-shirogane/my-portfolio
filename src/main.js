import { createApp } from 'vue'
import App from './App.vue'

// Vuetifyの読み込み
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // ←必須
import '@mdi/font/css/materialdesignicons.css';
import VueScrollTo from "vue-scrollto";

const app = createApp(App);
app.use(VueScrollTo);
const vuetify = createVuetify();
app.use(vuetify).mount('#app');
