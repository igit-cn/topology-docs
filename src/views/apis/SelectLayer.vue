<template>
  <div class="selectLayer">
    <markdown-render ref="mdRender" :mdCode="selectLayer" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'SelectLayer',
  components:{ MarkdownRender},
  data():{
    selectLayer:string,
    titleList:number[]}{
     return{
        selectLayer:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.selectLayer = await this.axios.get('/markdown/selectLayer.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.selectLayer{
  height: 100%;
}
</style>
