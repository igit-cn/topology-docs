<template>
  <footer class="flex footer">
    <div class="relevant flex">
      <div class="left flex">
        <p>微信关注</p>
        <img src="../../public/img/wechat.png" alt="" />
      </div>
      <div class="right flex">
        <div class="item" v-for="(item, index) in relevant" :key="index">
          <p>{{ item.title }}</p>
          <ul>
            <li v-for="(e, i) in item.children" :key="i">
              <a :href="e.url" target="_blank">{{ e.name }}</a>
            </li>
            <li
              style="list-style-type: none; margin-left: -14px;color:#ffffff;"
              v-if="item.title === '关于我们'"
              class="email"
            >
              Email：alsmile123@qq.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Video',
  data():{
      relevant:any[]
  }{
    return{
         relevant:[
            {
                title: '产品与服务',
                children: [
                    {
                    name: '产品介绍',
                    url: 'https://juejin.im/post/6844903934474076167'
                    },
                    {
                    name: '技术支持',
                    url: 'https://www.yuque.com/alsmile/topology/aboutus#gWc5X'
                    }
                ]
                },
                {
                title: '开源与社区',
                children: [
                    {
                    name: 'Github官网',
                    url: 'https://github.com/le5le-com'
                    },
                    {
                    name: '核心库',
                    url: 'https://github.com/le5le-com/topology'
                    },
                    {
                    name: 'React示例',
                    url: 'https://github.com/le5le-com/topology-react'
                    },
                    {
                    name: 'Vue示例',
                    url: 'https://github.com/le5le-com/topology-vue'
                    },
                    {
                    name: 'Javascript示例',
                    url: 'https://github.com/le5le-com/topology-es5-demo'
                    }
                ]
                },
                {
                title: '帮助文档',
                children: [
                    {
                    name: '开发教程',
                    url: 'https://www.yuque.com/alsmile/topology/installation'
                    },
                    {
                    name: 'API文档',
                    url: 'https://www.yuque.com/alsmile/topology/umsiq3'
                    },
                    {
                    name: '专栏教程',
                    url: 'https://juejin.im/user/58b1336c570c3500696559f8/posts'
                    },
                    {
                    name: '常见问题',
                    url: 'https://www.yuque.com/alsmile/topology/faq'
                    }
                ]
                },
                {
                title: '关于我们',
                children: [
                    {
                    name: '我们与规划',
                    url: 'https://www.yuque.com/alsmile/topology/aboutus'
                    },
                    {
                    name: '微信技术大群',
                    url: 'http://topology.le5le.com/assets/img/topology_wechat.jpg'
                    },
                    {
                    name: '微信技术群3',
                    url: 'http://topology.le5le.com/assets/img/topology_wechat2.jpg'
                    }
                ]
                }
         ]
    }
  }
});
</script>

<style lang="scss" scoped>
.footer {
  height: 295px;
  width: 100%;
  background: #141621;
  align-items: center;
  justify-content: center;
  .relevant {
    width: 1000px;
    height: 65%;
    color: white;
    font-size: 14px;
    justify-content: space-between;
    .left {
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      img {
        height: 123px;
        width: 123px;
      }
    }
    .right {
      height: 100%;
      min-width: 500px;
      .item {
        text-align: left;
        padding-right: 50px;
        p {
          margin-left: 25px;
        }
        ul {
          margin-left: 0;
          cursor: pointer;
          margin-top: 42px;
          li {
            font-size: 12px;
            margin-top: 7px;
            color: #999999;
            position: relative;
            a {
              color: #999999;
            }
          }
          .email::before {
            width: 0px;
            height: 0px;
          }
        }
      }
    }
  }
}
</style>
