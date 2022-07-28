import { createApp } from 'vue';
import * as directives from '@/directives';
import { Toast, Button, Tabbar, TabbarItem, Field, CellGroup, Grid, GridItem, Icon } from 'vant';
import App from './App.vue';
import router from './router';
import store from './store';
import { analysisDomainName } from './utils/helpers';

import './style/basic.less';
import 'vant/es/toast/style';
import 'vant/es/dialog/style';

const app = createApp(App);
analysisDomainName();
// 注册自定义指令
Object.keys(directives).forEach((key) => {
  app.directive(key, directives[key]);
});

app.config.globalProperties.$toast = Toast;

app.use(Button).use(Tabbar).use(TabbarItem).use(Field).use(CellGroup).use(Grid).use(GridItem).use(Icon);

app.use(store).use(router).mount('#app');
