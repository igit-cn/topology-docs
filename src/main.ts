import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/styles/index.scss';
import { Button, Menu, Anchor,Dropdown } from 'ant-design-vue';

createApp(App)
  .use(Button, Menu, Anchor,Dropdown)
  .use(router)
  .mount('#app');
