import './styles/styles.scss';
import './index.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import router from '@/router/index';

import App from './App.vue';
const pinia = createPinia();
createApp(App).use(pinia).use(router).mount('#app');
