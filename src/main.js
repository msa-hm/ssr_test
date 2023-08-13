import { createPinia } from "pinia";
import { createSSRApp } from "vue";
import App from "./App.vue";
import { createRouter } from "./router";

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives
});

export function createApp() {
  const app = createSSRApp(App);
  app.use(vuetify)
  const pinia = createPinia();
  app.use(pinia);
  const router = createRouter();
  app.use(router);
  return { app, router };
}
