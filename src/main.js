import { createApp } from 'vue';
import * as directives from '@/directives';

import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

// 注册自定义指令
Object.keys(directives).forEach((key) => {
  app.directive(key, directives[key]);
});

app.use(store).use(router).mount('#app');
