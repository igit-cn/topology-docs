<template>
  <div class="home">
    <Header />
    <section>
      <div class="menu">
        <Menu />
      </div>
      <div class="content">
        <div :class="['modal',{'isShow':isShow}]">
            <Modal />
        </div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue'; 
import Menu from '@/components/Menu.vue';
import Modal from '@/components/modal/Index.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Header, 
    Menu,
    Modal
  },
  data():{anchorList:string[],targetOffset:any,isShow:boolean} {
    return {
      anchorList:[],
      targetOffset:undefined,
      isShow:false
    }
  },
  mounted(){
    // 实时监听变化
    const subscribe = (window as any).Store.subscribe('anchorList',(value:any) => {
        this.anchorList = value
    });
    this.targetOffset = window.innerHeight / 2;
    console.log(this.targetOffset);



    const tryCode = (window as any).Store.subscribe('tryCode',(value:any) => {
        this.isShow = value
    });




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
      max-height: calc(100vh - #{$head-height});
      padding: 20px 60px 0;
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
    .modal{
      visibility:hidden;
      position: fixed;
      border-left: 1px solid #eeeeee;;
      top:62px;
      right: 20px;
      height: calc(100vh - #{$head-height});
      width: 28.4%;
      background: #ffffff;
      z-index: 9;
      &.isShow{
        visibility:visible;
      }
    }
  }
}
</style>
