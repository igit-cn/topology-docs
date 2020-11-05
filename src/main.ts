import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/styles/index.scss';
import { Button, Menu, Anchor,Dropdown,Checkbox } from 'ant-design-vue';
import {Node} from '@topology/core';

import { Store } from 'le5le-store';
import axios from '@/http';
import VueAxios from 'vue-axios'
(window as any).Store= Store;
(window as any).Node = Node;

createApp(App)
  .use(Button)
  .use(Menu)
  .use(Anchor)
  .use(Dropdown)
  .use(Checkbox)
  .use(router)
  .use(VueAxios, axios)
  .mount('#app');
