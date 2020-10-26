import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/styles/index.scss';
import { Button, Menu, Anchor,Dropdown } from 'ant-design-vue';
import { Store } from 'le5le-store';
(window as any).Store= Store


createApp(App)
  .use(Button)
  .use(Menu)
  .use(Anchor)
  .use(Dropdown)
  .use(router)
  .mount('#app');
