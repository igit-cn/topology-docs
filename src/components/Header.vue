<template>
  <div class="header">
    <div class="left">
      <img src="../assets/logo.png" alt="" />
      <span>Le5le Topology</span>
      <div class="search">
        <input
          type="text"
          placeholder="搜索组件"
          v-model="searchValue"
          @keyup="searchFor"
        />
        <img
          src="../assets/search.png"
          class="t-search"
          alt=""
          @click="searchFor"
        />
      </div>
    </div>
    <div class="right">
      <div class="nav">
        <div class="item" v-for="(item, index) in nav" :key="index" @click.stop="handleNavClick(item)">
          <router-link v-if="item.router" :to="item.router">{{
            item.title
          }}</router-link>
          <a v-else :href="item.url" target="_blank">{{ item.title }}</a>
        </div>
      </div>

      <div class="language">
        EN <i class="t-icon t-angle-down"></i>
        </div>
      

      <div class="user">
          <img src="../../public/img/github.png" alt="" />
      </div>
    </div>

    <!-- <div class="nav"> -->
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/guide">Guide</router-link> |
      <router-link to="/support">Support us</router-link> -->
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: {},
  data() {
    return {
      searchValue: '', //搜索组件
      a: 1,
      nav: [
        {
          title: '首页',
          router: '/'
        },
        {
          title: '开发文档',
          router: '/home'
        },
        {
          title: '视频教程',
          url: 'https://www.baidu.com/'
        },
        {
          title: '社区',
          url: 'https://www.baidu.com/'
        },
        {
          title: '支持我们',
          router: '/support'
        }
      ]
    };
  },
  methods: {
    handleNavClick(item){
      if(item.title === "开发文档"){
        sessionStorage.setItem('activeMenu','Topology');
      }
    }
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.header {
  width: 100%;
  height: $head-height;
  padding: 0 45px;
  box-sizing: border-box;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  border-bottom: 1px solid #eeeeee;
  .left {
    display: flex;
    align-items: center;
    img {
      height: 33px;
      width: 33px;
    }
    span {
      font-size: 19px;
      font-family: Arial, Segoe UI, Segoe UI-Semibold;
      font-weight: 600;
      margin-left: 17px;
      color: #333333;
      transform: translateY(-2px);
    }
    .search {
      position: relative;
      margin-left: 34px;
      input {
        width: 184px;
        height: 27px;
        background: #eeeeee;
        border-radius: 14px;
        border: none;
        outline: none;
        padding-left: 14px;
        font-size: 14px;
        &::-webkit-input-placeholder {
          font-size: 14px;
          font-family: Source Han Sans CN, Source Han Sans CN-Regular;
          font-weight: 400;
          color: #cccccc;
        }
      }

      .t-search {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 12px;
        cursor: pointer;
        font-size: 12px;
        height: 12px;
        width: 12px;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    white-space: nowrap;
    .nav {
      display: flex;
      .item {
        margin-right: 38px;
        a {
          font-size: 14px;
          font-family: Source Han Sans CN, Source Han Sans CN-Regular;
          font-weight: 400;
          text-align: left;
          color: #333333;
        }
      }
    }
    .language {
      cursor: pointer;
      margin-right: 38px;
      font-size: 14px;  
      height: 21.5px;
      line-height: 21.5px;
      display: flex;
      align-items: center;
      .t-angle-down{
        font-size: 12px;
        margin-left: 5px;
      }
    }
    .user {
      height: 27px;
      width: 27px;
      border-radius: 50%; 
      img {
        height: 27px;
        width: 27px;
        border-radius: 50%;
      }
    }
  }
}
</style>
