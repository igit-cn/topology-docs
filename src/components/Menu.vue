/* eslint-disable no-var */ /* eslint-disable @typescript-eslint/no-unused-vars
*/ /* eslint-disable @typescript-eslint/no-unused-vars */
<template>
  <div class="menu">
    <div class="content">
      <div class="item" v-for="(item, index) in menu" :key="index">
        <router-link
          :to="item.router"
          v-if="item.children"
          @click.prevent="menuClick(index)"
        >
          22{{ item.text }}
          <i
            :class="
              item.children && item.hide ? 't-angle-right' : 't-angle-down'
            "
            class="t-icon"
          ></i>
        </router-link>

        <router-link :to="item.router" v-else>
          11{{ item.text }}
        </router-link>

        <div
          v-for="(e, i) in item.children"
          :key="i"
          class="children"
          :class="[item.hide ? 'hidden' : 'block',item.isActive?'active':'']"
        >
          <router-link :to="e.router">
            33{{ e.text }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from '@/http';

export default defineComponent({
  name: 'Menu',
  props: {},
  data() {
    return {
      hide: false,
      selectIndex: '', 
      menu: [
        // {
        //   text: '常见问题',
        //   router: '/faq'
        // },
        // {
        //   text: '支持我们',
        //   router: '/support'
        // },
        // {
        //   text: 'Components',
        //   router: '/',
        //   childer: [
        //     {
        //       text: '画布',
        //       router: '/canvas'
        //     },
        //     {
        //       text: 'Button按钮',
        //       router: '/b'
        //     }
        //   ]
        // }
      ]
    };
  },
  async created() {
    this.menu = await axios.get('/apis/syllabus.json');
    console.log(111,this.menu)
  },
  methods: {
    menuClick(i: number) { 
      (this.menu[i]['hide'] as any) = (!this.menu[i]['hide'] as any)
    }
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
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-right: 18px;
        font-size: 16px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #333333;
      }
      .children {
        margin-top: 25px;
        padding-left: 20px;
      }
    }
  }
}
</style>
