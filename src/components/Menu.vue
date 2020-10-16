<template>
  <div class="menu">
    <div class="content">
      <div class="item" v-for="(item, index) in menu" :key="index">
        <router-link :to="item.router">
          {{ item.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Menu',
  props: {},
  data() {
    return {
      menu: [
        {
          title: '常见问题',
          router: '/faq'
        },
        {
          title: '支持我们',
          router: '/support'
        }
        // {
        //   title: 'Components',
        //   childer: [
        //     {
        //       title: 'General',
        //       router: ''
        //     },
        //     {
        //       title: 'Button按钮',
        //       router: ''
        //     }
        //   ]
        // }
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
.menu {
  padding: 20px 0px 0px 45px;
  width: 258.5px;
  box-sizing: border-box;
  border-right: 1px solid #eee;
  .content {
    .item {
      margin-bottom: 25px;
      a {
        font-size: 16px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #333333;
      }
    }
  }
}
</style>
