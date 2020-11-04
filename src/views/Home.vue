<template>
  <div class="home">
    <Header @navclick="navclick" />
    <section>
      <div class="menu">
        <Menu :menu="menu"/>
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
  data():{anchorList:string[],targetOffset:any,isShow:boolean,menu:any[],} {
    return {
      anchorList:[],
      targetOffset:undefined,
      isShow:false,
      menu:[]
    }
  },
   async created(){ 
      if(sessionStorage.getItem('navNow')){
        const val =  sessionStorage.getItem('navNow')
        
       switch  (val) {
            case '/enterprise':
              (this.menu as any)  =  await this.axios.get('/apis/support.json');
              break;
            case '/topology':
              (this.menu as any) =  await this.axios.get('/apis/syllabus.json');
              break;
            case '/gtofficial':
              (this.menu as any) =  await this.axios.get('/apis/community.json');
              break;
            case '/profile':
              (this.menu as any) =  await this.axios.get('/apis/about.json');
              break;
            case '/introduce':
              (this.menu as any) =  await this.axios.get('/apis/service.json');
              break;
          }
      };
      
  },
  mounted(){
    // 实时监听变化
    const subscribe = (window as any).Store.subscribe('anchorList',(value:any) => {
        this.anchorList = value
    });
    this.targetOffset = window.innerHeight / 2;
    const tryCode = (window as any).Store.subscribe('tryCode',(value:any) => {
        this.isShow = value
    });

    const navNow = (window as any).Store.subscribe('navNow', async (value:any) => {
           switch  (value) {
            case '/enterprise':
              (this.menu as any)  =  await this.axios.get('/apis/support.json');
              break;
            case '/topology':
              (this.menu as any) =  await this.axios.get('/apis/syllabus.json');
              break;
            case '/gtofficial':
              (this.menu as any) =  await this.axios.get('/apis/community.json');
              break;
            case '/profile':
              (this.menu as any) =  await this.axios.get('/apis/about.json');
              break;
            case '/introduce':
              (this.menu as any) =  await this.axios.get('/apis/service.json');
              break;
          }
        
    });

  },
  methods:{
    async navclick(item:string){
     switch  (item) {
        case '/enterprise':
          (this.menu as any)  =  await this.axios.get('/apis/support.json');
          break;
        case '/topology':
          (this.menu as any) =  await this.axios.get('/apis/syllabus.json');
          break;
        case '/gtofficial':
          (this.menu as any) =  await this.axios.get('/apis/community.json');
          break;
        case '/profile':
          (this.menu as any) =  await this.axios.get('/apis/about.json');
          break;
        case '/introduce':
          (this.menu as any) =  await this.axios.get('/apis/service.json');
          break;
      }  
    }
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
