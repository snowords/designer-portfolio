import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'
import './styles/App.scss';
import './styles/tailwind.css';

(async () => {

  const app = createApp(App);

  setupRouter(app);

  await router.isReady();
  
  app.mount('#app');
})();
// createApp(App).use(router).mount('#app');
