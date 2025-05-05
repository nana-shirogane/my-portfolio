import { createApp } from 'vue'
import App from './App.vue'

// Vuetifyの読み込み
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // ←必須
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify();
createApp(App).use(vuetify).mount('#app');
