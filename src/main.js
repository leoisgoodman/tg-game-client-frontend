import { createApp } from 'vue';
import * as directives from '@/directives';
import { Toast, Button, Tabbar, TabbarItem } from 'vant';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vant/es/toast/style';

const app = createApp(App);

// 注册自定义指令
Object.keys(directives).forEach((key) => {
  app.directive(key, directives[key]);
});

app.config.globalProperties.$toast = Toast;

app.use(Button).use(Tabbar).use(TabbarItem);

app.use(store).use(router).mount('#app');
