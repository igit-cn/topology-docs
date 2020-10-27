<template>
  <div class="home">
    <Header />
    <section>
      <div class="menu">
        <Menu />
      </div>
      <div class="content">
        <router-view />
      </div> 
      <div class="wrapper">
        <!-- 锚点 区域 -->
        <a-anchor>
          <a-anchor-link 
          v-for="(item,index) in anchorList" 
          :key="index" :href="'#'+item" :title="item"></a-anchor-link>
        </a-anchor>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Menu from '@/components/Menu.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    Footer,
    Menu
  },
  data():{anchorList:string[],targetOffset:any} {
    return {
      anchorList:[],
      targetOffset:undefined
    }
  },
  mounted(){
    // 实时监听变化
    const subscribe = (window as any).Store.subscribe('anchorList',(value:any) => {
        console.log(9999,value)
        this.anchorList = value
    });
    this.targetOffset = window.innerHeight / 2;
    console.log(this.targetOffset);
  },
  methods:{
    
  }
});
</script>
<style lang="scss" scoped>
@import '@/styles/index.scss';

.home {
  section {
    display: flex;
    .content {
      width: calc(100% - 149px - 258.5px);
      max-height: calc(100vh - 61px);
      padding: 20px 20px 0;
      box-sizing: border-box;
      overflow: auto;
      &::-webkit-scrollbar { width: 0 !important }
    }
    .wrapper {
      width: 149px;
      position: fixed;
      height: 300px;
      // background: green;
      right: 0;
      top: $head-height;
      margin-top: 20px;
    }
  }
}
</style>
