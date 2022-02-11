import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'

import { GraphQLClient } from 'graphql-request'

import './styles/App.scss';
import './styles/tailwind.css';

(async () => {

  const app = createApp(App);
  // 接入graphcms 
  const graphcmsClient = new GraphQLClient(
    'https://api-ap-northeast-1.graphcms.com/v2/ckwa7f1gn203y01z242t77w7w/master'
  );
  app.mixin({
    beforeCreate() {
      this.$graphcms = graphcmsClient;
    }
  })

  setupRouter(app);

  await router.isReady();
  
  app.mount('#app');
})();
// createApp(App).use(router).mount('#app');
