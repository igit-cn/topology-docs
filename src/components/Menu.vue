/* eslint-disable no-var */ /* eslint-disable @typescript-eslint/no-unused-vars
*/ /* eslint-disable @typescript-eslint/no-unused-vars */
<template>
  <div class="menu">
    <div class="content">
      <div class="item" v-for="(item, index) in menus" :key="index">
        <div @click.prevent="menuClick(index)" v-if="item.children">
          <router-link
            :to="item.router"
            
          >
            {{ item.text }}
            <i
              :class="
                item.children && item.hide ? 't-angle-right' : 't-angle-down'
              "
              class="t-icon"
            ></i>
          </router-link>
        </div>
        
        <div @click.prevent="firstMenuClick(item)"  v-else>
           <router-link :to="item.router"  :class="[{'active':item.active}]" >
            {{ item.text }}
          </router-link>
        </div>
       

        <div
          v-for="(el, i) in item.children"
          :key="i"
          class="children"
          @click.prevent="secondMenuClick(el)"
          :class="item.hide ? 'hidden' : 'block'"
        >
          <router-link :to="el.router" :class="[{'active':el.active}]" >
            {{ el.text }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Menu',
  props: {
    menu:{
      type:Array,
      default:()=>{
        return []
      }
    }
  },
  data():{
    activeMenu:string|null,
    hide:boolean,
    selectIndex:string,// 
    lastActive:object,
    lastActiveFlag:boolean,
    menus:any[]
  } {
    return {
      hide: false,
      selectIndex: '',  
      lastActive:{},
      lastActiveFlag:false,
      activeMenu:'',
      menus:[]
    };
  },
   watch: {
      //正确给 cData 赋值的 方法
      menu: function(newVal){
        this.menus = newVal
        this.setActiveMenu()
      }
  },
  methods: {
    setActiveMenu(){
        this.activeMenu = sessionStorage.getItem('activeMenu')
        if(this.activeMenu){
            const activeItem = this.findActiveRouterPath(this.menus,this.activeMenu);
            console.log('find',activeItem)
            if(activeItem){
              this.lastActiveFlag = true
              this.lastActive = activeItem
              activeItem.active = true
            }
        }
    },
    findActiveRouterPath(menu:object[],activeMenu:string):any{
      for (let i = 0; i < menu.length; i++) {
        if((menu[i] as any).text === activeMenu){
          return menu[i]
        }else{
          if(Object.prototype.hasOwnProperty.call(menu[i],'children')){
            return this.findActiveRouterPath((menu[i] as any).children,activeMenu)
          }
        }
      }
    },
    secondMenuClick(item:object){
      this.commonClick(item)
    },
    commonClick(item:object){
      if(this.lastActiveFlag){
        (this.lastActive as any).active = false
      }
      (item as any).active = true
      this.lastActive = item
      this.lastActiveFlag = true
      sessionStorage.setItem('activeMenu',(item as any).text);
      // 如果试一试编辑器被打开，并且点击的路由菜单不是当前页面
      if((window as any).Store.get('tryCode') && (item as any).text !== this.activeMenu){
        (window as any).Store.set('tryCode',false)
      }
    },
    firstMenuClick(item:object){
      this.commonClick(item)
    },
    menuClick(i: number) { 
      console.log('helo');
      (this.menus[i]['hide'] as any) = (!this.menus[i]['hide'] as any)
    }
  }
});
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.menu {
  padding: 20px 0px 0px 45px;
  width: 258.5px;
  max-height: 100vh;
  box-sizing: border-box;
  overflow-y: scroll;
  .content {
    position: fixed;
    width: 205px;
    border-right: 1px solid #eee;
    height: calc(100vh - #{$head-height});
    overflow-y: scroll;
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
        &.active{
          color: #FB8501;
        }
      }
      .children {
        margin-top: 25px;
        padding-left: 20px;
      }
    }
  }
}
</style>
