import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles.css'; // Optional: Add custom styles
import router from './router';

const app = createApp(App);
app.use(router); // Make sure you're using the router
app.mount('#app'); 