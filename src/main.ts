import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/styles/index.scss';
import { Button, Menu, Anchor,Dropdown } from 'ant-design-vue';
import { Store } from 'le5le-store';
import axios from '@/http';
import VueAxios from 'vue-axios'
(window as any).Store= Store


createApp(App)
  .use(Button)
  .use(Menu)
  .use(Anchor)
  .use(Dropdown)
  .use(router)
  .use(VueAxios, axios)
  .mount('#app');
