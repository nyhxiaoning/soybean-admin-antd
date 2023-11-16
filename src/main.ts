import { createApp } from 'vue';
import './plugins/assets';
import { setupNProgress, setupIconifyOffline } from './plugins';
import { setupStore } from './store';
import { setupRouter } from './router';
import { setupI18n } from './locales';
import App from './App.vue';

async function setupApp() {
  setupNProgress();

  setupIconifyOffline();

  const app = createApp(App);

  setupStore(app);

  await setupRouter(app);

  setupI18n(app);

  app.mount('#app');
}

setupApp();
