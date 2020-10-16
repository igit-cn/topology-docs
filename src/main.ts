import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/styles/index.scss';
<<<<<<< HEAD
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
=======
import { Button } from 'ant-design-vue';
>>>>>>> master

createApp(App)
  .use(Button)
  .use(router)
  .mount('#app');
